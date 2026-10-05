import "server-only";

import { siteConfig } from "@/config/site";
import type { Video } from "@/types";

const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";
const REVALIDATE_SECONDS = 3600;

type YouTubeThumbnail = {
  url: string;
  width?: number;
  height?: number;
};

type YouTubeChannelResponse = {
  items?: Array<{
    contentDetails?: {
      relatedPlaylists?: {
        uploads?: string;
      };
    };
  }>;
};

type YouTubePlaylistResponse = {
  items?: Array<{
    snippet?: {
      resourceId?: {
        videoId?: string;
      };
    };
  }>;
};

type YouTubeVideosResponse = {
  items?: Array<{
    id: string;
    snippet?: {
      title?: string;
      publishedAt?: string;
      thumbnails?: Record<string, YouTubeThumbnail | undefined>;
    };
    statistics?: {
      viewCount?: string;
    };
    contentDetails?: {
      duration?: string;
    };
  }>;
};

function getApiKey(): string | undefined {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "YouTube videos are unavailable: set YOUTUBE_API_KEY and YOUTUBE_CHANNEL_ID.",
      );
    }
    return undefined;
  }

  return apiKey;
}

async function youtubeRequest<T>(
  resource: string,
  params: Record<string, string>,
): Promise<T> {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error("YouTube API configuration is missing.");
  }

  const query = new URLSearchParams({ ...params, key: apiKey });
  const response = await fetch(`${YOUTUBE_API_BASE}/${resource}?${query}`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(
      `YouTube ${resource} request failed with status ${response.status}.`,
    );
  }

  return (await response.json()) as T;
}

export function formatYouTubeDuration(isoDuration: string): string {
  const match = isoDuration.match(
    /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/,
  );
  if (!match) {
    return "0:00";
  }

  const hours = Number(match[1] ?? 0);
  const minutes = Number(match[2] ?? 0);
  const seconds = Number(match[3] ?? 0);

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export function formatYouTubeViews(viewCount: number): string {
  return `${new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(viewCount)} views`;
}

export function formatYouTubeDate(publishedAt: string): string {
  return new Date(publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function getYouTubeChannelVideosUrl(): string | null {
  const channelUrl = siteConfig.social.youtube.trim().replace(/\/+$/, "");
  if (channelUrl) {
    return `${channelUrl}/videos`;
  }

  const channelId = process.env.YOUTUBE_CHANNEL_ID;
  return channelId
    ? `https://www.youtube.com/channel/${encodeURIComponent(channelId)}/videos`
    : null;
}

function getBestThumbnail(
  thumbnails: Record<string, YouTubeThumbnail | undefined> | undefined,
  videoId: string,
): string {
  for (const quality of ["maxres", "standard", "high", "medium", "default"]) {
    const thumbnail = thumbnails?.[quality];
    if (thumbnail?.url) {
      return thumbnail.url;
    }
  }

  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

export async function getLatestVideos(limit = 3): Promise<Video[]> {
  const apiKey = getApiKey();
  const channelId = process.env.YOUTUBE_CHANNEL_ID;
  if (!apiKey || !channelId) {
    return [];
  }

  const safeLimit = Math.max(1, Math.min(Math.floor(limit), 50));

  try {
    const channel = await youtubeRequest<YouTubeChannelResponse>("channels", {
      part: "contentDetails",
      id: channelId,
    });
    const uploadsPlaylistId =
      channel.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

    if (!uploadsPlaylistId) {
      throw new Error("The configured YouTube channel has no uploads playlist.");
    }

    const playlist = await youtubeRequest<YouTubePlaylistResponse>(
      "playlistItems",
      {
        part: "snippet",
        playlistId: uploadsPlaylistId,
        maxResults: String(safeLimit),
      },
    );
    const videoIds = (playlist.items ?? [])
      .map((item) => item.snippet?.resourceId?.videoId)
      .filter((videoId): videoId is string => Boolean(videoId));

    if (videoIds.length === 0) {
      return [];
    }

    const videos = await youtubeRequest<YouTubeVideosResponse>("videos", {
      part: "snippet,statistics,contentDetails",
      id: videoIds.join(","),
    });

    return (videos.items ?? [])
      .flatMap((item): Video[] => {
        const title = item.snippet?.title;
        const publishedAt = item.snippet?.publishedAt;
        const duration = item.contentDetails?.duration;

        if (!title || !publishedAt || !duration) {
          return [];
        }

        return [
          {
            id: item.id,
            title,
            thumbnail: getBestThumbnail(item.snippet?.thumbnails, item.id),
            publishedAt,
            views: Number(item.statistics?.viewCount ?? 0),
            duration: formatYouTubeDuration(duration),
            url: `https://www.youtube.com/watch?v=${encodeURIComponent(item.id)}`,
          },
        ];
      })
      .sort(
        (first, second) =>
          Date.parse(second.publishedAt) - Date.parse(first.publishedAt),
      )
      .slice(0, safeLimit);
  } catch (error) {
    console.error("Failed to fetch latest YouTube videos.", error);
    return [];
  }
}

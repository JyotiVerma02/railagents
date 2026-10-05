import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoCard } from "@/components/ui/VideoCard";
import { getLatestVideos, getYouTubeChannelVideosUrl } from "@/lib/youtube";
import { SocialCards } from "@/components/home/SocialCards";

export async function LatestVideos() {
  const videos = await getLatestVideos(3);
  const channelVideosUrl = getYouTubeChannelVideosUrl();

  return (
    <section className="bg-[#fff9f5] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Latest Video Guides"
          href={channelVideosUrl ?? undefined}
          external
          linkText={channelVideosUrl ? "View All Videos" : undefined}
        />
        {videos.length > 0 ? (
          <div className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : null}
        <div className={videos.length > 0 ? "mt-12 sm:mt-16" : undefined}>
          <div className="mb-6 sm:mb-8">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.045em] text-[var(--navy)]">
              Stay connected
            </h2>
          </div>
          <SocialCards />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Eye, Play } from "lucide-react";
import type { Video } from "@/types";
import { formatYouTubeDate, formatYouTubeViews } from "@/lib/youtube-format";

type VideoCardProps = {
  video: Video;
};

export function VideoCard({ video }: VideoCardProps) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_3px_12px_rgba(15,39,71,0.04)] transition-all hover:-translate-y-0.5 hover:border-[var(--primary-border)] hover:shadow-[0_8px_20px_rgba(15,39,71,0.09)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
    >
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <Image
          src={video.thumbnail}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/15">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[var(--primary)] opacity-0 shadow transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            <Play aria-hidden="true" className="ml-0.5 h-4 w-4 fill-current" />
          </span>
        </span>
        <span className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-1 text-[0.8125rem] font-[700] text-white">
          {video.duration}
        </span>
      </div>
      <div className="p-4">
        <h3 className="line-clamp-2 min-h-[3rem] text-base font-[700] leading-[1.45] text-[var(--navy)] group-hover:text-[var(--primary-dark)]">
          {video.title}
        </h3>
        <div className="mt-2 flex items-center justify-between gap-2 text-sm text-slate-600">
          <span>{formatYouTubeDate(video.publishedAt)}</span>
          <span className="inline-flex shrink-0 items-center gap-1">
            <Eye className="h-4 w-4" />
            {formatYouTubeViews(video.views)}
          </span>
        </div>
      </div>
    </a>
  );
}

import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoCard } from "@/components/ui/VideoCard";
import {
  getLatestVideos,
  getYouTubeChannelVideosUrl,
} from "@/lib/youtube";
import { SocialCards } from "@/components/home/SocialCards";
import { PlayCircle, Sparkles } from "lucide-react";

export async function LatestVideos() {
  const videos = await getLatestVideos(3);
  const channelVideosUrl = getYouTubeChannelVideosUrl();

  return (
    <section className="relative overflow-hidden bg-[#fff9f5] py-12 sm:py-16 lg:py-20">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-orange-100/50 blur-[90px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-orange-200/30 blur-[100px]"
      />

      <div className="site-container relative">
        {/* =========================
            VIDEO SECTION HEADER
        ========================== */}

        <div className="mb-8 sm:mb-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#f5dfcf] bg-white/70 px-3.5 py-2 text-[0.75rem] font-[800] uppercase tracking-[0.12em] text-[#e96713] shadow-sm backdrop-blur-md">
            <PlayCircle className="h-4 w-4" />
            Video Learning
          </div>

          <SectionHeading
            title="Latest Video Guides"
            href={channelVideosUrl ?? undefined}
            external
            linkText={channelVideosUrl ? "View All Videos" : undefined}
          />
        </div>

        {/* =========================
            VIDEO CARDS
        ========================== */}

        {videos.length > 0 ? (
          <div className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-[#f1e4d9] bg-white/70 px-6 py-10 text-center shadow-[0_10px_30px_rgba(15,39,71,0.05)] backdrop-blur-md">
            <PlayCircle className="mx-auto h-10 w-10 text-[#f97316]" />

            <h3 className="mt-4 text-lg font-[800] text-[var(--navy)]">
              Video guides are coming soon
            </h3>

            <p className="mx-auto mt-2 max-w-[480px] text-sm leading-[1.6] text-slate-600">
              We&apos;re adding useful railway and IRCTC video guides to help
              you learn faster.
            </p>
          </div>
        )}

        {/* =========================
            SOCIAL SECTION
        ========================== */}

        <div className={videos.length > 0 ? "mt-14 sm:mt-18" : "mt-10"}>
          <div
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-[#f2e2d4]
              bg-white/70
              px-5
              py-7
              shadow-[0_16px_45px_rgba(15,39,71,0.06)]
              backdrop-blur-xl
              sm:px-7
              sm:py-8
              lg:px-9
              lg:py-10
            "
          >
            {/* Social card glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-100/60 blur-[80px]"
            />

            <div className="relative z-10 mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 text-[0.75rem] font-[800] uppercase tracking-[0.12em] text-[#e96713]">
                  <Sparkles className="h-4 w-4" />
                  Follow RailAgents
                </div>

                <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold leading-[1.08] tracking-[-0.045em] text-[var(--navy)]">
                  Stay Connected With Us
                </h2>

                <p className="mt-2 max-w-[620px] text-sm leading-[1.65] text-slate-600 sm:text-[0.95rem]">
                  Follow RailAgents for new guides, railway updates, video
                  tutorials and helpful content.
                </p>
              </div>
            </div>

            <div className="relative z-10">
              <SocialCards />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
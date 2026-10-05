import { SectionHeading } from "@/components/ui/SectionHeading";
import { TopicCard } from "@/components/ui/TopicCard";
import { topics } from "@/data/topics";

export function ExploreTopics() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <SectionHeading title="Explore by Topic" href="/guides" linkText="View All Topics" />
      <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 min-[1440px]:grid-cols-6 xl:gap-5">
        {topics.map((topic) => (
          <TopicCard key={topic.title} topic={topic} />
        ))}
      </div>
    </section>
  );
}

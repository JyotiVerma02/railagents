import { QueryPage } from "@/components/ui/QueryPage";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Contact RailAgents",
  description:
    "Contact RailAgents for help finding railway agent guides, IRCTC information, and railway service resources.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <QueryPage />
  );
}

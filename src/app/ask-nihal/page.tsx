import { QueryPage } from "@/components/ui/QueryPage";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Ask Nihal Singh About Railway Services",
  description:
    "Ask Nihal Singh for guidance on railway agent registration, IRCTC information, booking questions, and railway services.",
  alternates: { canonical: `${siteConfig.url}/ask-nihal` },
};

export default function AskNihalPage() {
  return (
    <QueryPage />
  );
}

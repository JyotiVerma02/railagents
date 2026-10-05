import type { Topic } from "@/types";

export const topics: Topic[] = [
  {
    title: "IRCTC Agent Registration",
    href: "/irctc-agent-registration",
    icon: "user-check",
    accent: "bg-[#fff7ed]",
    iconClassName: "bg-[#ffedd5] text-[#c2410c]",
  },
  {
    title: "Ticket Booking",
    href: "/guides/ticket-booking",
    icon: "ticket",
    accent: "bg-[#eafaf0]",
    iconClassName: "bg-[#dff5e8] text-[#1ba05d]",
  },
  {
    title: "Tatkal Booking",
    href: "/guides/tatkal-booking",
    icon: "zap",
    accent: "bg-[#fff4df]",
    iconClassName: "bg-[#fff0c8] text-[#e5a900]",
  },
  {
    title: "Cancellation & Refund",
    href: "/guides/cancellation-refund",
    icon: "x-circle",
    accent: "bg-[#ffe8ea]",
    iconClassName: "bg-[#ffd9de] text-[#e14b5d]",
  },
  {
    title: "TDR Filing",
    href: "/guides/tdr",
    icon: "file-text",
    accent: "bg-[#eef2ff]",
    iconClassName: "bg-[#e0e7ff] text-[#4f46e5]",
  },
  {
    title: "Passenger Rules",
    href: "/guides/passenger-rules",
    icon: "shield-check",
    accent: "bg-[#e6fbf8]",
    iconClassName: "bg-[#d9f8f2] text-[#0c9b87]",
  },
];

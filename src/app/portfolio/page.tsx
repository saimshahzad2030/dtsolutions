import type { Metadata } from "next";
import { portfolioPage } from "@/data/site";
import { PortfolioContent } from "@/components/sections/PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description: portfolioPage.description,
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}


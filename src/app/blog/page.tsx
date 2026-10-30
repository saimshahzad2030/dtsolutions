import type { Metadata } from "next";
import { blogPage } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Clock, ArrowUpRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Articles",
  description: blogPage.description,
};

export default function BlogPage() {
  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-32">
      {/* Header */}
      <section className="container-x">
        <SectionHeading
          as="h1"
          eyebrow={blogPage.eyebrow}
          title={blogPage.title}
          description={blogPage.description}
        />
        <div data-reveal className="mt-8">
          <Button href="/contact">Contact us</Button>
        </div>
      </section>

      {/* Topic Chips */}
      <section className="container-x mt-12 sm:mt-16">
        <div className="flex flex-wrap items-center gap-2 border-b border-line pb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-muted mr-2">
            Topics:
          </span>
          {blogPage.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-paper px-3.5 py-1.5 text-xs font-semibold text-body transition-colors hover:bg-brand/10 hover:text-brand"
            >
              {topic}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="container-x mt-12">
        <div className="rounded-3xl border border-line bg-white p-8 sm:p-12 shadow-[0_15px_40px_rgba(5,11,26,0.03)]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/10 px-3 py-1 text-xs font-semibold text-amber-700">
              <Sparkles className="size-3 text-amber-500" />
              Featured Post
            </span>
            <span className="rounded-full bg-brand/5 px-3 py-1 text-xs font-semibold text-brand">
              {blogPage.featured.category}
            </span>
          </div>

          <h2 className="mt-6 font-display text-2xl font-bold tracking-tight text-heading sm:text-4xl max-w-3xl">
            {blogPage.featured.title}
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {blogPage.featured.excerpt}
          </p>

          <div className="mt-8 flex items-center justify-between border-t border-line/60 pt-6">
            <div className="flex items-center gap-2 text-xs font-medium text-muted">
              <Clock className="size-3.5" />
              <span>{blogPage.featured.readTime}</span>
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-brand inline-flex items-center gap-1">
              Read insight
              <ArrowUpRight className="size-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Posts Grid */}
      <section className="container-x mt-12 sm:mt-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {blogPage.posts.map((post, idx) => (
            <div
              key={idx}
              data-reveal
              style={{ "--d": `${idx * 80}ms` } as React.CSSProperties}
              className="group flex flex-col justify-between rounded-3xl border border-line bg-white p-8 shadow-sm transition-all hover:border-brand/30 hover:shadow-lg"
            >
              <div>
                <span className="rounded-full bg-brand/5 px-3 py-1 text-xs font-semibold text-brand">
                  {post.category}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-heading group-hover:text-brand transition-colors">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-line/60 pt-5">
                <div className="flex items-center gap-2 text-xs font-medium text-muted">
                  <Clock className="size-3.5" />
                  <span>{post.readTime}</span>
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read
                  <ArrowUpRight className="size-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


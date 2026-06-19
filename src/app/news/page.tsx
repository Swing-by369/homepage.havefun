import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { posts } from "@/content/site";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "導入事例・コラム・お知らせなど、私たちの取り組みを発信します。",
};

export default function NewsPage() {
  return (
    <>
      <section className="border-b border-line bg-ink py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="お知らせ"
              title="News & Column"
              lead="導入事例やDXのヒントになるコラムを発信しています。"
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link href={`/news/${post.slug}`} className="card flex h-full flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="rounded-full bg-surface-2 px-2.5 py-1 text-green">{post.category}</span>
                    <time>{post.date}</time>
                  </div>
                  <h2 className="mt-4 font-semibold leading-snug text-fg">{post.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
                    続きを読む
                    <Icon name="arrow" width={16} height={16} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

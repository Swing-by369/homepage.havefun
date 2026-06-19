import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, CTAButton } from "@/components/ui";
import { Icon } from "@/components/Icons";
import { posts } from "@/content/site";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "お知らせ" };
  return { title: post.title, description: post.excerpt };
}

export default async function NewsArticle({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="py-16 md:py-24">
      <Container className="max-w-3xl">
        <Link
          href="/news"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-fg"
        >
          <Icon name="arrow" width={16} height={16} className="rotate-180" />
          お知らせ一覧へ
        </Link>

        <header className="mt-8 border-b border-line pb-8">
          <div className="flex items-center gap-3 text-xs text-muted">
            <span className="rounded-full bg-surface-2 px-2.5 py-1 text-green">{post.category}</span>
            <time>{post.date}</time>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-snug tracking-tight text-fg md:text-4xl">
            {post.title}
          </h1>
        </header>

        <div className="mt-8 space-y-6 text-[15px] leading-8 text-muted">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-line bg-ink p-8 text-center">
          <p className="text-muted">DXのご相談は、30分の無料オンライン相談から。</p>
          <CTAButton href="/contact" className="mt-5" withIcon>
            無料相談を予約する
          </CTAButton>
        </div>
      </Container>
    </article>
  );
}

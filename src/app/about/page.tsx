import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { company, members, site } from "@/content/site";

export const metadata: Metadata = {
  title: "会社概要",
  description: "私たちのミッションとメンバーをご紹介します。現場が自走できる組織づくりを支援します。",
};

export default function AboutPage() {
  return (
    <>
      {/* Mission */}
      <section className="relative overflow-hidden border-b border-line bg-ink py-20 md:py-28">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue/15 blur-[120px]" />
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-green">
              Mission
            </span>
            <h1 className="text-balance text-3xl font-bold leading-snug tracking-tight text-fg md:text-5xl">
              テクノロジーで、<span className="text-gradient">現場の可能性</span>を解き放つ。
            </h1>
            <p className="mt-6 leading-relaxed text-muted">
              私たちは、ツールを納品して終わるのではなく、使う人が主役になれるDXを目指します。
              企業が自らの力で改善を続けられる——そんな自走する組織づくりを伴走支援します。
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Company info */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="会社概要" title="Company" />
          </Reveal>
          <Reveal delay={120} className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-line">
            <dl>
              {company.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-1 gap-1 px-6 py-5 sm:grid-cols-3 ${
                    i !== company.length - 1 ? "border-b border-line" : ""
                  }`}
                >
                  <dt className="text-sm font-semibold text-muted">{row.label}</dt>
                  <dd className="text-sm text-fg sm:col-span-2">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* Members */}
      <section className="border-t border-line bg-ink py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="メンバー"
              title="伴走する、チーム"
              lead="技術と現場の橋渡しを得意とするメンバーが、あなたのDXを支えます。"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {members.map((m, i) => (
              <Reveal key={m.name} delay={i * 100} className="card p-8 text-center">
                <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-blue/30 to-green/30 text-2xl font-bold text-fg">
                  {m.initial}
                </span>
                <h3 className="mt-5 text-lg font-bold text-fg">{m.name}</h3>
                <p className="mt-1 text-sm font-medium text-green">{m.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{m.bio}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-muted">
            ※ 掲載内容はサンプルです。{site.name} の実際の情報に差し替えてご利用ください。
          </p>
        </Container>
      </section>
    </>
  );
}

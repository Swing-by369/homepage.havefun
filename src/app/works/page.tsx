import type { Metadata } from "next";
import { Container, SectionHeading, CTAButton } from "@/components/ui";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import { caseStudy } from "@/content/site";

export const metadata: Metadata = {
  title: "導入事例",
  description: "中小企業のバックオフィス業務をAIで自動化し、月50時間の削減を実現した事例をご紹介します。",
};

export default function WorksPage() {
  return (
    <>
      <section className="border-b border-line bg-ink py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="導入事例"
              title="成果につながった、伴走の記録"
              lead="数字に表れる効果と、現場が自走できるようになるまでの取り組みをご紹介します。"
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <Reveal className="overflow-hidden rounded-3xl border border-line bg-surface">
            <div className="grid lg:grid-cols-5">
              {/* Metric */}
              <div className="relative flex flex-col items-center justify-center border-b border-line bg-ink p-12 text-center lg:col-span-2 lg:border-b-0 lg:border-r">
                <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
                <span className="relative text-sm text-muted">{caseStudy.metricLabel}</span>
                <div className="relative mt-2 flex items-end gap-1">
                  <CountUp value={caseStudy.metricValue} className="text-7xl font-bold text-gradient md:text-8xl" />
                  <span className="mb-3 text-2xl font-bold text-fg">{caseStudy.metricUnit}</span>
                </div>
                <span className="relative mt-4 rounded-full border border-line px-3 py-1 text-xs text-muted">
                  {caseStudy.client}
                </span>
              </div>

              {/* Detail */}
              <div className="space-y-7 p-10 lg:col-span-3 lg:p-12">
                <h2 className="text-2xl font-bold text-fg">{caseStudy.headline}</h2>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-green">課題</h3>
                  <p className="mt-2 leading-relaxed text-muted">{caseStudy.challenge}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-green">取り組み</h3>
                  <p className="mt-2 leading-relaxed text-muted">{caseStudy.approach}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-green">成果</h3>
                  <p className="mt-2 leading-relaxed text-muted">{caseStudy.result}</p>
                </div>
                <blockquote className="rounded-xl border border-line bg-ink p-5 text-sm italic leading-relaxed text-muted">
                  “{caseStudy.voice}”
                </blockquote>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-12 text-center">
            <p className="text-muted">同じような課題でお悩みですか？ まずはお気軽にご相談ください。</p>
            <CTAButton href="/contact" className="mt-6" withIcon>
              無料オンライン相談（30分）
            </CTAButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

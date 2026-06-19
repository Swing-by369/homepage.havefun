import Link from "next/link";
import { Container, SectionHeading, CTAButton } from "@/components/ui";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Faq from "@/components/Faq";
import { Icon } from "@/components/Icons";
import {
  problems,
  strengths,
  services,
  caseStudy,
  stats,
  plans,
  flow,
  posts,
} from "@/content/site";

export default function Home() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="pointer-events-none absolute -top-32 right-0 -z-10 h-[480px] w-[480px] rounded-full bg-blue/15 blur-[120px]" />
        <div className="pointer-events-none absolute top-40 -left-20 -z-10 h-[420px] w-[420px] rounded-full bg-green/10 blur-[120px]" />

        <Container className="flex flex-col items-center py-28 text-center md:py-40">
          <Reveal as="div">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-green" />
              AI導入支援・DXコンサルティング
            </span>
          </Reveal>

          <Reveal as="h1" delay={80} className="mt-7 max-w-4xl text-balance text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl">
            AIとDXで、
            <br className="hidden sm:block" />
            現場が<span className="text-gradient">自走する</span>組織へ。
          </Reveal>

          <Reveal as="p" delay={160} className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">
            ツールを入れて終わりにしない。ツール選定から業務自動化、人材育成まで、
            現場が自分たちで改善を回せる状態になるまで伴走します。
          </Reveal>

          <Reveal delay={240} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <CTAButton href="/contact" withIcon>
              無料オンライン相談（30分）
            </CTAButton>
            <CTAButton href="/services" variant="ghost">
              サービスを見る
            </CTAButton>
          </Reveal>

          <Reveal delay={320} className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-4 border-t border-line pt-10">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-fg md:text-4xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs text-muted md:text-sm">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ===== Problems ===== */}
      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="こんな課題、ありませんか"
              title="DXが「掛け声」で終わってしまう理由"
              lead="多くの企業がつまずくのは、技術ではなく「定着」と「人」の問題です。"
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-line text-blue">
                  <Icon name={p.icon} width={22} height={22} />
                </span>
                <h3 className="mt-5 font-semibold text-fg">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== Strengths ===== */}
      <section className="border-y border-line bg-ink py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="私たちの強み"
              title={
                <>
                  「導入して終わり」にしない。
                  <br className="hidden md:block" />
                  自走できるまで<span className="text-gradient">伴走</span>します。
                </>
              }
              lead="導入 → 定着 → 自走。私たちのゴールは、私たちがいなくても改善が回る状態をつくることです。"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {strengths.map((s, i) => (
              <Reveal key={s.step} delay={i * 120} className="relative">
                <div className="card h-full p-8">
                  <span className="text-5xl font-bold text-gradient">{s.step}</span>
                  <h3 className="mt-4 text-xl font-bold text-fg">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
                </div>
                {i < strengths.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-green md:block">
                    <Icon name="arrow" width={22} height={22} />
                  </span>
                )}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== Services ===== */}
      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="サービス"
              title="3つの事業で、DXを支えます"
              lead="単発の支援から継続的な内製化まで、フェーズに合わせて選べます。"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((svc, i) => (
              <Reveal key={svc.slug} delay={i * 120} className="card flex flex-col p-8">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-blue/20 to-green/20 text-green">
                  <Icon name={svc.icon} width={24} height={24} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-fg">{svc.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{svc.lead}</p>
                <ul className="mt-5 space-y-2.5">
                  {svc.points.slice(0, 3).map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-muted">
                      <Icon name="check" width={18} height={18} className="mt-0.5 shrink-0 text-green" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services#${svc.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition hover:gap-2.5"
                >
                  詳しく見る
                  <Icon name="arrow" width={16} height={16} />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== Case study ===== */}
      <section className="border-y border-line bg-ink py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="導入事例" title="月50時間の業務を、AIで自動化" />
          </Reveal>
          <Reveal delay={120} className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-10 text-center glow-blue">
              <div className="text-sm text-muted">{caseStudy.metricLabel}</div>
              <div className="mt-2 flex items-end justify-center gap-1">
                <CountUp value={caseStudy.metricValue} className="text-7xl font-bold text-gradient md:text-8xl" />
                <span className="mb-3 text-2xl font-bold text-fg">{caseStudy.metricUnit}</span>
              </div>
              <p className="mt-6 border-t border-line pt-6 text-sm italic leading-relaxed text-muted">
                “{caseStudy.voice}”
              </p>
            </div>
            <div className="space-y-6">
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
              <CTAButton href="/works" variant="ghost">
                ほかの事例を見る
              </CTAButton>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===== Stats ===== */}
      <section className="py-24">
        <Container>
          <div className="grid gap-8 rounded-3xl border border-line bg-surface/50 p-12 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="text-center">
                <div className="text-4xl font-bold text-gradient md:text-5xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-muted">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== Pricing ===== */}
      <section className="border-y border-line bg-ink py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="料金・プラン"
              title="ご相談内容に応じた、明朗な料金"
              lead="以下は参考価格です。実際の費用は無料相談のうえ、お見積りでご提示します。"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal
                key={plan.name}
                delay={i * 100}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  plan.highlight
                    ? "border-green/50 bg-surface glow-green"
                    : "border-line bg-surface/60"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green px-3 py-1 text-xs font-semibold text-base">
                    おすすめ
                  </span>
                )}
                <h3 className="text-lg font-bold text-fg">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted">{plan.target}</p>
                <div className="mt-6 space-y-1 border-y border-line py-5">
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="text-muted">初期費用</span>
                    <span className="text-lg font-bold text-fg">{plan.initial}</span>
                  </div>
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="text-muted">月額</span>
                    <span className="text-lg font-bold text-fg">{plan.monthly}</span>
                  </div>
                </div>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted">
                      <Icon name="check" width={18} height={18} className="mt-0.5 shrink-0 text-green" />
                      {f}
                    </li>
                  ))}
                </ul>
                <CTAButton
                  href="/contact"
                  variant={plan.highlight ? "primary" : "ghost"}
                  className="mt-7 w-full"
                >
                  相談する
                </CTAButton>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            ※ 価格は参考値です。詳しくは{" "}
            <Link href="/pricing" className="text-blue underline-offset-4 hover:underline">
              料金ページ
            </Link>{" "}
            をご覧ください。
          </p>
        </Container>
      </section>

      {/* ===== Flow ===== */}
      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="ご利用の流れ" title="相談から自走まで、4ステップ" />
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {flow.map((f, i) => (
              <Reveal key={f.step} delay={i * 100} className="relative text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-green/40 text-lg font-bold text-green">
                  {f.step}
                </div>
                <h3 className="mt-5 font-semibold text-fg">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== FAQ ===== */}
      <section className="border-y border-line bg-ink py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="よくある質問" title="ご相談前の不安にお答えします" />
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <Faq />
          </Reveal>
          <div className="mt-8 text-center">
            <Link href="/faq" className="text-sm text-blue underline-offset-4 hover:underline">
              すべての質問を見る
            </Link>
          </div>
        </Container>
      </section>

      {/* ===== News ===== */}
      <section className="py-24">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between">
              <SectionHeading eyebrow="お知らせ" title="最新の取り組み" center={false} />
              <Link
                href="/news"
                className="hidden items-center gap-1.5 text-sm font-semibold text-blue transition hover:gap-2.5 sm:inline-flex"
              >
                一覧へ
                <Icon name="arrow" width={16} height={16} />
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 100}>
                <Link href={`/news/${post.slug}`} className="card flex h-full flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="rounded-full bg-surface-2 px-2.5 py-1 text-green">{post.category}</span>
                    <time>{post.date}</time>
                  </div>
                  <h3 className="mt-4 font-semibold leading-snug text-fg">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

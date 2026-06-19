import type { Metadata } from "next";
import { Container, SectionHeading, CTAButton } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import { Icon } from "@/components/Icons";
import { plans } from "@/content/site";

export const metadata: Metadata = {
  title: "料金・プラン",
  description: "ご相談内容に応じた見積もりベース。参考価格（初期費用・月額）と3つのプランをご案内します。",
};

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-line bg-ink py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="料金・プラン"
              title="必要な分だけ、無理なく始められる"
              lead="費用はご相談内容に応じた個別見積もりです。以下は参考価格として目安をご確認ください。"
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <Reveal
                key={plan.name}
                delay={i * 100}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  plan.highlight ? "border-green/50 bg-surface glow-green" : "border-line bg-surface/60"
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

          <Reveal delay={120} className="mx-auto mt-10 max-w-3xl rounded-2xl border border-line bg-ink p-6 text-sm leading-relaxed text-muted">
            <p className="font-semibold text-fg">料金についての補足</p>
            <ul className="mt-3 space-y-2">
              <li>・記載の金額はすべて参考価格（税別）です。対象業務の範囲や規模により変動します。</li>
              <li>・まずは無料相談で課題を整理し、最適なプランと正式なお見積りをご提示します。</li>
              <li>・スモールスタートのご相談も歓迎です。お気軽にお問い合わせください。</li>
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line bg-ink py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="よくある質問" title="料金・進め方について" />
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <Faq />
          </Reveal>
        </Container>
      </section>
    </>
  );
}

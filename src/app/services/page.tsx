import type { Metadata } from "next";
import { Container, SectionHeading, CTAButton } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "サービス",
  description: "AI導入支援・DXコンサルティング／受託システム開発／IT人材育成。3つの事業でDXを支えます。",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line bg-ink py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="サービス"
              title="現場に根づくDXを、3つの事業で"
              lead="ツール選定から自動化、開発、人材育成まで。フェーズに合わせて最適な支援を提供します。"
            />
          </Reveal>
          <Reveal delay={120} className="mt-10 flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="rounded-full border border-line px-4 py-2 text-sm text-muted transition hover:border-green hover:text-green"
              >
                {s.title}
              </a>
            ))}
          </Reveal>
        </Container>
      </section>

      {services.map((svc, i) => (
        <section
          key={svc.slug}
          id={svc.slug}
          className={`scroll-mt-24 py-20 md:py-28 ${i % 2 === 1 ? "border-y border-line bg-ink" : ""}`}
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-blue/20 to-green/20 text-green">
                  <Icon name={svc.icon} width={28} height={28} />
                </span>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-fg">{svc.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">{svc.lead}</p>
                <CTAButton href="/contact" className="mt-8" withIcon>
                  この事業について相談する
                </CTAButton>
              </Reveal>

              <Reveal delay={120} className={i % 2 === 1 ? "lg:order-1" : ""}>
                <ul className="grid gap-3">
                  {svc.points.map((pt) => (
                    <li key={pt} className="card flex items-start gap-3 p-5">
                      <Icon name="check" width={20} height={20} className="mt-0.5 shrink-0 text-green" />
                      <span className="text-sm leading-relaxed text-fg">{pt}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}

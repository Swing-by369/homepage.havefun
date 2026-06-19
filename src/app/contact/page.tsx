import type { Metadata } from "next";
import { Container } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import ContactForm from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "30分の無料オンライン相談を受付中。お気軽にご相談ください。",
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left: intro + free consultation */}
          <Reveal className="lg:col-span-2">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-green">
              Contact
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-fg md:text-4xl">
              まずは気軽に、
              <br />
              話してみませんか？
            </h1>
            <p className="mt-5 leading-relaxed text-muted">
              「何から始めればいいか分からない」段階のご相談も大歓迎です。
              無理な営業は行いません。お気軽にお問い合わせください。
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 rounded-xl border border-green/30 bg-green/5 p-5">
                <Icon name="calendar" width={22} height={22} className="mt-0.5 shrink-0 text-green" />
                <div>
                  <p className="font-semibold text-fg">無料オンライン相談（30分）</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    オンライン会議で、課題の整理と進め方をご提案します。フォームの「ご相談の種類」で選択してください。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-line p-5">
                <Icon name="mail" width={22} height={22} className="mt-0.5 shrink-0 text-blue" />
                <div>
                  <p className="font-semibold text-fg">メールでのお問い合わせ</p>
                  <a href={`mailto:${site.email}`} className="mt-1 block text-sm text-blue hover:underline">
                    {site.email}
                  </a>
                  <p className="mt-1 text-sm text-muted">{site.hours}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={120} className="lg:col-span-3">
            <div className="rounded-3xl border border-line bg-surface p-8 md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

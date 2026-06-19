import type { Metadata } from "next";
import { Container, SectionHeading, CTAButton } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "よくある質問",
  description: "「ITに詳しくない社員ばかりでも大丈夫？」など、ご相談前によくいただく質問にお答えします。",
};

export default function FaqPage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="よくある質問"
            title="FAQ"
            lead="ご相談前によくいただく質問をまとめました。ここにない疑問もお気軽にお問い合わせください。"
          />
        </Reveal>
        <Reveal delay={120} className="mt-12">
          <Faq />
        </Reveal>
        <Reveal delay={180} className="mt-14 text-center">
          <p className="text-muted">疑問は解消できましたか？ 個別のご相談も無料で承ります。</p>
          <CTAButton href="/contact" className="mt-6" withIcon>
            無料オンライン相談（30分）
          </CTAButton>
        </Reveal>
      </Container>
    </section>
  );
}

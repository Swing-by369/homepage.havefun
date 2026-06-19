import Link from "next/link";
import { nav, site } from "@/content/site";
import { Container, CTAButton } from "./ui";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-ink">
      {/* 最終 CTA */}
      <Container className="py-16">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-8 py-12 text-center">
          <div className="pointer-events-none absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-green/20 blur-3xl" />
          <h2 className="relative text-2xl font-bold text-fg md:text-3xl">
            まずは30分、無料で話しませんか？
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-muted">
            「何から始めればいいか分からない」段階でも大丈夫です。オンラインでお気軽にご相談ください。
          </p>
          <div className="relative mt-7 flex justify-center">
            <CTAButton href="/contact" withIcon>
              無料オンライン相談を予約する
            </CTAButton>
          </div>
        </div>
      </Container>

      <Container className="grid gap-10 border-t border-line py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-blue to-green text-base">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18" strokeLinecap="round" opacity="0.9" />
              </svg>
            </span>
            <span className="text-lg font-bold text-fg">{site.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{site.description}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-fg">メニュー</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted transition hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/faq" className="text-muted transition hover:text-fg">
                よくある質問
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-fg">お問い合わせ</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted">
            <li>
              <a href={`mailto:${site.email}`} className="transition hover:text-fg">
                {site.email}
              </a>
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-line py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}

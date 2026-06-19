import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icons";

/** 中央寄せコンテナ（最大幅・左右余白） */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>;
}

/** セクション見出し（小見出し＋大見出し＋リード） */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-green">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-fg md:text-4xl">{title}</h2>
      {lead && <p className="mt-4 leading-relaxed text-muted">{lead}</p>}
    </div>
  );
}

type CTAProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  withIcon?: boolean;
};

/** 主要 CTA ボタン（primary = ネオングリーン / ghost = アウトライン） */
export function CTAButton({ href, children, variant = "primary", className = "", withIcon }: CTAProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition duration-300";
  const styles =
    variant === "primary"
      ? "bg-green text-base hover:brightness-110 glow-green hover:-translate-y-0.5"
      : "border border-line-strong text-fg hover:border-green hover:text-green";
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      {withIcon && <Icon name="arrow" width={18} height={18} />}
    </Link>
  );
}

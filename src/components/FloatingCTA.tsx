"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/** スクロールすると右下に現れる控えめな常時 CTA */
export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href="/contact"
      className={`fixed bottom-5 right-5 z-40 hidden items-center gap-2 rounded-full bg-green px-5 py-3 text-sm font-semibold text-base shadow-lg transition-all duration-300 md:inline-flex ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 3v4M16 3v4" strokeLinecap="round" />
      </svg>
      無料相談（30分）
    </Link>
  );
}

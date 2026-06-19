"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-lg border border-line bg-ink px-4 py-3 text-sm text-fg placeholder:text-muted/70 focus:border-green focus:outline-none focus:ring-2 focus:ring-green/30";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // デモ送信：実運用では Formspree / 独自API / メール送信などに接続してください
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-fg">
            会社名
          </label>
          <input id="company" name="company" type="text" className={inputClass} placeholder="株式会社サンプル" />
        </div>
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-fg">
            お名前 <span className="text-green">*</span>
          </label>
          <input id="name" name="name" type="text" required className={inputClass} placeholder="山田 太郎" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-fg">
            メールアドレス <span className="text-green">*</span>
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-fg">
            電話番号
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} placeholder="03-0000-0000" />
        </div>
      </div>

      <div>
        <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-fg">
          ご相談の種類
        </label>
        <select id="topic" name="topic" className={inputClass} defaultValue="無料オンライン相談（30分）">
          <option>無料オンライン相談（30分）</option>
          <option>AI導入支援・DXコンサルティング</option>
          <option>受託システム開発</option>
          <option>IT人材育成・研修</option>
          <option>料金・お見積りについて</option>
          <option>その他</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-fg">
          お問い合わせ内容 <span className="text-green">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={inputClass}
          placeholder="現在の課題やご相談内容をご記入ください。"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-semibold text-base transition hover:brightness-110 glow-green"
      >
        この内容で送信する
      </button>

      {sent && (
        <p className="rounded-lg border border-green/40 bg-green/10 px-4 py-3 text-center text-sm text-green">
          送信ありがとうございます。担当者より2営業日以内にご連絡します。
          <br />
          <span className="text-muted">※ 現在は送信デモです。バックエンド連携で実送信を有効化できます。</span>
        </p>
      )}
    </form>
  );
}

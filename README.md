# Synaptic — AI導入支援・DXコンサルティング コーポレートサイト

AI導入支援・DXコンサルティング会社向けのコーポレートサイトです。
ダークモードを基調としたミニマルなデザインで、サービス紹介から無料相談への導線までをカバーします。

> サンプルのブランド名・実績・料金で構築しています。`src/content/site.ts` を編集すると、文言・実績・料金などをまとめて差し替えられます。

## 技術構成

- **Next.js 16**（App Router）／ **React 19** ／ **TypeScript**
- **Tailwind CSS v4**（CSSベースのデザイントークン）
- スクロール表示アニメーション・数値カウントアップは Intersection Observer による自前実装
- `prefers-reduced-motion` 対応（モーション軽減設定を尊重）

## ページ構成

| パス | 内容 |
| --- | --- |
| `/` | トップ（ヒーロー／課題／強み／サービス／事例／実績／料金／流れ／FAQ／お知らせ） |
| `/services` | サービス詳細（AI導入支援・DX／受託開発／人材育成） |
| `/works` | 導入事例（月50時間削減の事例） |
| `/pricing` | 料金・プラン（参考価格＋FAQ） |
| `/about` | 会社概要・メンバー紹介 |
| `/news` ・ `/news/[slug]` | お知らせ／ブログ一覧・記事詳細 |
| `/faq` | よくある質問 |
| `/contact` | お問い合わせ（無料オンライン相談の導線） |

## セットアップ

```bash
npm install
npm run dev      # http://localhost:3000
```

その他のコマンド:

```bash
npm run build    # 本番ビルド
npm run start    # 本番サーバー起動
npm run lint     # ESLint
```

## カスタマイズ

| やりたいこと | 編集する場所 |
| --- | --- |
| 会社名・実績・料金・FAQ・お知らせ等の文言 | `src/content/site.ts` |
| テーマカラー（背景・テックブルー・ネオングリーン） | `src/app/globals.css` の `@theme` トークン |
| 共通レイアウト（ヘッダー／フッター／フローティングCTA） | `src/components/` |
| お問い合わせフォームの送信処理 | `src/components/ContactForm.tsx`（現在はデモ） |

### デザイントークン（`globals.css`）

| トークン | 用途 | 値 |
| --- | --- | --- |
| `--color-base` | ページ背景 | `#0a0e1a` |
| `--color-surface` | カード面 | `#141a33` |
| `--color-blue` | アクセント（テックブルー） | `#38bdf8` |
| `--color-green` | アクセント（ネオングリーン・CTA） | `#22f5a0` |

## お問い合わせフォームについて

現在はフロントのみのデモ動作です。実送信するには、`ContactForm.tsx` の `handleSubmit` を
Formspree などの外部サービスや独自APIに接続してください。無料相談の予約は Calendly 等の
外部予約ツールへ差し替えることも可能です。

## デプロイ

Vercel へのデプロイを推奨します（リポジトリを連携するだけで自動ビルド／公開）。

## 設計ドキュメント

サイト全体の構成・デザイン方針は [`docs/proposal.md`](./docs/proposal.md) にまとめています。

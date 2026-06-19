# HaveFun ホームページ

「事業・サービス紹介」向けのランディングページ（LP）です。
ビルド不要の **静的サイト（HTML + Tailwind CSS + バニラJS）** なので、ブラウザで開くだけで動作し、GitHub Pages などにそのまま公開できます。

## 構成

| ファイル | 役割 |
| --- | --- |
| `index.html` | ページ本体（ヒーロー / 特徴 / サービス / 流れ / お客様の声 / お問い合わせ） |
| `styles.css` | スクロールアニメーションなどの追加スタイル |
| `main.js` | ヘッダー追従・モバイルメニュー・スクロール表示・フォーム処理 |

Tailwind CSS は CDN から読み込んでいるため、追加インストールは不要です。

## ローカルで確認する

ファイルをブラウザで直接開くか、簡易サーバーで確認できます。

```bash
# どちらか
open index.html              # macOS
python3 -m http.server 8000  # → http://localhost:8000
```

## カスタマイズ

- **サービス名・コピー**: `index.html` 内の「HaveFun」やキャッチコピーを書き換えてください。
- **配色**: `index.html` 冒頭の `tailwind.config` 内 `brand` カラーを変更すると全体のテーマ色が変わります。
- **連絡先**: フッターの メールアドレス（`hello@havefun.example`）を実際のものに置き換えてください。
- **お問い合わせフォーム**: 現在は送信デモです。Formspree などの外部サービスや独自バックエンドに接続すると実送信できます（`main.js` の `handleSubmit` を参照）。

## 公開（GitHub Pages）

1. リポジトリの **Settings → Pages** を開く
2. **Source** を `Deploy from a branch` にする
3. Branch を `main`（または公開したいブランチ）/ `root` に設定して保存
4. 数分後に発行される URL で公開されます

> 本番運用では、Tailwind CDN を CLI ビルドに切り替えると読み込みが高速・安定します。

import type { NextConfig } from "next";

// GitHub Pages はサブパス（/<repo名>/）で配信されるため basePath を環境変数で指定する。
// ローカル開発（npm run dev）では未設定なのでルート配信のまま動作します。
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export", // 静的書き出し（out/ を生成）
  basePath,
  trailingSlash: true, // /services/ → index.html で配信（静的ホスティング向け）
  images: {
    unoptimized: true, // 画像最適化サーバーを使わない（静的配信のため）
  },
};

export default nextConfig;

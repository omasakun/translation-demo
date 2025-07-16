# Translation Demo

日本語から英語へのシンプルな翻訳アプリケーションです。

Google Cloud Translation API を使用して、テキストの翻訳を行います。

単一ファイル ([public/index.html](public/index.html)) で実装されています。

## 開発環境のセットアップ

### 必要な要件

- Node.js
- pnpm (corepack経由で使用)
- Cloudflareアカウント

### 事前準備

1. **Node.js のインストール**

- [Node.js 公式サイト](https://nodejs.org/) からダウンロードしてインストール
- または [asdf](https://asdf-vm.com/) を使用して Node.js を管理

2. **pnpm の有効化 (corepack使用)**

```bash
# corepackを有効にする
corepack enable

# pnpmをインストール
corepack install
```

### インストール

1. リポジトリをクローン

```bash
git clone <repository-url>
cd translation-demo
```

2. 依存関係をインストール

```bash
pnpm install
```

### 開発

ローカル開発サーバーを起動:

```bash
pnpm start
```

開発サーバーが起動したら、ブラウザで表示されるURLにアクセスして動作を確認できます。

## デプロイ

Cloudflare Workersにデプロイする場合:

```bash
pnpm deploy
```

**注意**: デプロイする前に、Cloudflareにログインする必要があります。

```bash
npx wrangler login
```

## 関連リンク

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

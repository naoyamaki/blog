
# 試しに作ってみたブログ
## DEMO

[GitHub Pages](https://naoyamaki.github.io/blog/)にてサイトを閲覧できます。

## Requirement

* node 14.x.x

## Installation

`blog/`直下にて以下コマンドを打つ

```bash
npm install
```

## Usage

### ローカルにてサイト公開

`blog/`直下にて以下コマンドを打つ

```bash
npm run dev
```

http://localhost:8080/blog/
でアクセスができる

### 静的資材のビルド

`blog/`直下にて以下コマンドを打つと`./src/`の内容を`./docs/`へビルド、デプロイする

```bash
npm run build
```

GitHub Pagesでは`./docs/`配下を公開している

## Note

Node.jsのバージョンが16だとsass-loaderインストール時に依存エラーが出てしまうようなので、  
バージョンは14としている
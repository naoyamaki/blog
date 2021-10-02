---
title: ブログ始めてみます！
description: お試しでブログを始めてみます、技術的なことも少しずつためていければなと思っております。
meta:
  - property: og:title
    content: ブログ始めてみます！
  - name: description
    content: お試しでブログを始めてみます、技術的なことも少しずつためていければなと思っております。
  - property: og:description
    content: お試しでブログを始めてみます、技術的なことも少しずつためていければなと思っております。
  - property: og:image
    content: https://naoyamaki.github.io/blog/hellow-world/thumbnail.webp
  - property: og:url
    content: https://naoyamaki.github.io/blog/hellow-world/
canonicalUrl: https://naoyamaki.github.io/blog/hellow-world/
date: 2021-09-09
img: /hellow-world/thumbnail.webp
category: dairy
tags:
  - GitHub
  - VuePress
  - shell script
---

# ブログ始めてみます！

書こうと思ったきっかけは、本当にとくにないと思う。  
「きっかけは、」以降の文字を何度も書き換えてみたがどれもしっくりこない。

試しにGitHub pagesやVuePressを使ってメモ代わりにしようと思った程度だろう。

なので早速今日の日記だが、

::: tip 結論
自動化させたものは、最後に完了したこと連絡させよう
:::

である。

思った経緯を話すと、、、

最近は、深～い訳がありElasticsearch Service(現:OpenSearch Service)で全文検索をしている機能をMySQLエンジンのRDSに乗せ換えることをしている。

そうすると、  
テスト用に立ち上げたRDSインスタンスのファーストタッチペナルティ対応であったり、  
SQLの速度を計測するため、何回もクエリを実行したり  
と待ちの長い作業がたびたび発生する。

大体はシェルを作って予備用PCで流しっぱなしにするのだが、気づいたときに終わっているか確認をしている。

`気づいたときに終わっているか確認をしている`  
これがめんどくさい。

弊社ではslackを使っているので自分専用のWebhookとか作って通知させるように（次回から）した。

でも、チャットツールを使っていなかったり、セキュリティ的に、運用的にできない環境であれば  
一行追加するだけだしshellでビープ音鳴らすようにしちゃえば？と考えた。

以下どれでも1つ選んでshell scriptの末尾に書き加えるだけだ。  
面倒とは言わせない。

```sh
printf '\a'
echo -e '\a'
echo -e '\007'
```

周りに迷惑がかかりそう？  
であれば、イヤホンをしよう。

1回鳴るだけじゃ気づけないかもしれない？  
なら繰り返そう。

```sh
for i in `seq 1 5`
do
  sleep 1
  echo -e '\a'
done
```

なんにせよ自動化させたんだから（ちょこちょこ状況を確認するのではなく）完了連絡も自動化させようよ。  
と思った日であった。。。
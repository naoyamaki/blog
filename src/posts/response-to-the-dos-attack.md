---
title: Dosっぽい攻撃が来た時の（個人的）対応方針
description: Dosっぽいアクセスがあった場合にどういった判断をしてどういった対応をすればいいのか個人的な見解のまとめ
meta:
  - property: og:title
    content: Dosっぽい攻撃が来た時の（個人的）対応方針
  - name: description
    content: Dosっぽいアクセスがあった場合にどういった判断をしてどういった対応をすればいいのか個人的な見解のまとめ
  - property: og:description
    content: Dosっぽいアクセスがあった場合にどういった判断をしてどういった対応をすればいいのか個人的な見解のまとめ
  - property: og:image
    content: https://naoyamaki.github.io/blog/response-to-the-dos-attack/thumbnail.webp
  - property: og:url
    content: https://naoyamaki.github.io/blog/response-to-the-dos-attack/
canonicalUrl: https://naoyamaki.github.io/blog/response-to-the-dos-attack/
date: 2022-03-05
img: /blog/response-to-the-dos-attack/thumbnail.webp
category: dev
tags:
  - Dos
---

# Dosっぽい攻撃が来た時の（個人的）対応方針

::: tip 結論
IPやUAなどを調べて人間のアクセスか確認をする。  
人でも、必要なクローラでもない場合はIPでアクセス拒否をしよう。  
対応が終わり、アクセス元がクラウドサービスのIPだったら通報しよう。
:::

サイトを運営していると「急に〇〇の負荷が上がった！」ということを必ずしも経験しているだろう。

この時サイトがいわゆる〇〇砲（田代砲を除く）でバズっているのであればうれしい悲鳴であり、  
どのくらいで収束するか、サーバを増強するべきかは判断がつきやすい。  
そうでない場合は、対応方針などを用意していないと事故につながる可能性がある。

大量アクセスの原因が、ユーザの通常利用に起因するものなのか、悪意のある攻撃者によるものなのか。  
どちらなのか判別する指標と対応方法、事後対応を紹介する。

（前提として、サイトのwebサーバ、アプリケーションサーバ、DBなどの負荷が急増し、  
その原因が内部のロジックや運用ではなくユーザのアクセスによるものと推測ができている状態、あるいはその可能性を疑っている状態である。）

## 原因がユーザによるものかの確認

まず、アクセスログから高負荷が発生した時間の前後にてアクセスが急増したIPを探す。  
そのIPのアクセスログについて以下のことを確認していく

- アクセスしているURLは存在するものか（`../../password`のように明らか攻撃していそうなアクセスであれば行儀が悪いのでこの時点でブロックしていい。）
- UAが一般に利用されているブラウザからか（headless Chromeだとseleniumを使ったアクセスの可能性がある。curlやRubyなどわかりやすい場合もある。）
- アクセス数 / 時間が現実味のある数値か（たとえば1秒間に20アクセスとかしていたら連打したとしても実現できなさそうなので、怪しい）
- （上と合わせて）リファラに妥当性はあるか
- IPからWHOIS情報を調べる（サクッと調べられる[ip-adress.com](https://www.ip-adress.com/search)をよく使う、これでAWSやAzureのIPであれば十中八九通常のユーザではない）

確認が終わったら、得られた情報を総合的に見てユーザによるものか、その他機械によるアクセスかを判断する。  
判断基準は各組織ごと作っていけばいいが、常識的にあまり変わらない判断基準になると思う。

また、UAに`Googlebot`などの公式クローラの肩書きをつけている場合は、そのクローラについても調べよう。  
また、公式では「このレンジのIPアドレス帯がうちのクローラですよ」と記載していることがほとんどで、IPアドレスが一致しない場合、  
悪意のあるものからのアクセスと見てほぼ間違いないだろう。名前を偽っている時点でマナー違反だし、悪意がなければ名前を偽る必要もないからだ。

また、あまり聞きなれないクローラだと、サイトにメリットをもたらさないクローラであったり、お作法が悪いと悪評のあるクローラもあるため、そういう観点でも調べてみよう。

## ユーザでないと分かった後の対応

通常ユーザでも有益なクローラでもなかった場合、まずIP単位でアクセスを遮断しよう。

IPをブロックする際はIPを[ip-adress.com](https://www.ip-adress.com/search)などで調べプロバイダなどではないことも念の為調べておこう。  
IP単位でブロックしてしまうとその集合住宅や近隣の家庭からのアクセスなどもブロックしかねないため、その場合はUAも組み合わせてブロックするなどなるべく影響範囲を狭めよう。

WAFなどを導入していればIP単位でのブロック機能なども備わっていると思うので利用しているサービスのドキュメントを読んでいただければ。。。  
WAFを導入していない場合はロードバランサ、WebサーバにてIPを指定したアクセス拒否を追加しよう。

## 事後対応

「[#原因がユーザによるものかの確認](#原因がユーザによるものかの確認)」にて判断を迷ったものや判断の経緯、ブロックしたIPは記録に残しておこう。  
次回、また対象のIPから大量のアクセスがあった際に傾向を読みやすくなり、判断もより早く決めるための材料となり得るからだ。

また、クラウドサービスで取得したパブリクIPからの迷惑な大量アクセスであれば、そのクラウドサービスに通報することもできる。  
AWSは以下ページにて迷惑な利用者を報告することができるGCPやAzure、Alibaba Cloudなどについてはわかり次第載せよう（とおもう）。

[AWS リソースの不正使用を報告するにはどうすればよいですか?](https://aws.amazon.com/jp/premiumsupport/knowledge-center/report-aws-abuse/)

## 準備できているといいなと思うこと

こういう準備ができていたら未然に防げたり、より良い対応ができるのになぁ、というものを書いていく。

### キャッシュの導入

静的ページであれば特別な理由がなければ導入しよう。  
動的ページであってもキャッシングできる部分には導入し、そもそも大量アクセスに対応できるだけのサービスにしよう。

### robots.txtにクローリング規約を記載

クローラがサイトを短時間に大量に回遊したとき、高負荷になってしまうケースがある。  
そういった際はrobots.txtに`Crawl-delay`を記載することを検討しよう。

ちなみに[robots.txtの記載については公式サイト](http://www.robotstxt.org/)を参照し、  
クローラによっては`Crawl-delay`を参照しない場合もあるため、各クローラの仕様の公式ドキュメントを確認しよう！！  
（Googleは`Crawl-delay`を参照しないため、ウェブマスターツールから頻度を申請する必要がある）

### 事前にユーザにこういうことしたらブロックしますよという規約を掲載

これは、後述対応をする場合であろうとなかろうと作っておくべき。

対応時の判断軸になり、スムーズに一貫した対応を誰でもできるようになるためである。  
有事の際はエスカレーションやジャッジに時間をかけるのが一番勿体ないため、まず第一にやってもいい。

### Dos検知WAFの導入

n秒間にm回アクセスしたら一定期間アクセス遮断  
という動作をするWAFサービスもあるが、お金がかけられないなど事情があれば、アクセスログを定期的にチェックしブロックするツールを作ってもいい。

これのメリットは、機械的ルールで自動的な対応ができるため、オペレーションミスはなく、不要な工数を割くこともないからである。

### 今までのIPブロック時の確認作業、ブロック作業の自動化

何度かIPブロック作業をすると、機械的な作業になり工数のムダを感じてくるだろう。  
であれば、まず「[#事後対応](#事後対応)」にて記載したように記録した判断基準を基にブロック時のルールを固めよう。  
それが自動化する時の仕様書となり、そのルールに則った通知やIPの情報提示をする。  
その内容を確認し、「[#Dos検知WAFの導入](#Dos検知WAFの導入)」にて記載したブロックツールを動作させてやれば、人を解する作業はほとんどなくなる。
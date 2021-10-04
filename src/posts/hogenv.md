---
title: Macの〇〇env用のprofile、shrc設定を整理した
description: pyenv、nodenv、jenv、goenv用のprofile、shrc設定を整理したのでそのついでの備忘録
meta:
  - property: og:title
    content: Macの〇〇env用のprofile、shrc設定を整理した
  - name: description
    content: pyenv、nodenv、jenv、goenv用のprofile、shrc設定を整理したのでそのついでの備忘録
  - property: og:description
    content: pyenv、nodenv、jenv、goenv用のprofile、shrc設定を整理したのでそのついでの備忘録
  - property: og:image
    content: https://naoyamaki.github.io/blog/hogenv/thumbnail.webp
  - property: og:url
    content: https://naoyamaki.github.io/blog/hogenv/
canonicalUrl: https://naoyamaki.github.io/blog/hogenv/
date: 2021-09-28
img: /blog/hogenv/thumbnail.webp
category: dev
tags:
  - shell script
  - pyenv
  - nodenv
  - jenv
  - goenv
---

# Macの〇〇env用のprofile、shrc設定を整理した

::: tip 結論
```sh
# .zshrc
export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init --path)"
eval "$(pyenv init -)"
export PATH="$HOME/.nodenv/bin:$PATH"
eval "$(nodenv init -)"
export PATH="$HOME/.jenv/bin:$PATH"
eval "$(jenv init -)"
export PATH=$HOME/.goenv/bin:$PATH
eval "$(goenv init -)"
```
:::

（各〇〇envのインストールとかは他の記事を参考にしてね。）

## 背景

色々な記事を読んでそれぞれ設定していたため、`.zshrc`、`.zprofile`はそれぞれ以下のような悲惨な状態になっていた。

```sh
# .zshrc
eval "$(pyenv init -)"
eval "$(nodenv init -)"
export PATH="$HOME/.jenv/bin:$PATH"
eval "$(jenv init -)"
export GOENV_ROOT=$HOME/.goenv
export PATH=$GOENV_ROOT/bin:$PATH
export PATH=$HOME/.goenv/bin:$PATH
eval "$(goenv init -)"
```


```sh
# .zprofile
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init --path)"
export PATH="$HOME/.nodenv/bin:$PATH"
eval "$(nodenv init -)"
export JENV_ROOT="$HOME/.jenv"
if [ -d "${JENV_ROOT}" ]; then
  export PATH="$JENV_ROOT/bin:$PATH"
  eval "$(jenv init -)"
fi
```

## そもそも`.zprofile`、`.zshrc`とは

横道に逸れるが、`.zprofile`、`.zshrc`についてざっと説明すると、ターミナル立ち上げ時

zprofile -> zshrc

の順で実行される。  

- `.zprofile`（ログイン時にzshで読み込む、環境変数とかを記述する印象）
- `.zshrc`（zshのrun command、環境変数以外はこちらの印象）

これらは他のコマンドシェルでも同じで、  
たとえば、bashを使っている人であれば`.bashrc`、`.bash_profile`に読み替えられる。

また、`.zprofile`、`.zshrc`の使い分けについて、いろんな文化があるのでプロダクトで統一されていればどのような書き方でもいい（と私は思っている。宗教戦争に巻き込まれたくないので）

## 整理の仕方

やればいいことは

1. hogenv達のパスを追加して
1. hogenv達のinitを実行する

なので、hogenv毎に上記を記述してやった。

`.zprofile`で`export PATH=〇〇`をまとめてあげて  
`.zshrc`でinitしてあげても良かったが、一箇所にまとめたかったので、`.zshrc`に以下のように記述した。

```sh
# .zshrc
export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init --path)"
eval "$(pyenv init -)"
export PATH="$HOME/.nodenv/bin:$PATH"
eval "$(nodenv init -)"
export PATH="$HOME/.jenv/bin:$PATH"
eval "$(jenv init -)"
export PATH=$HOME/.goenv/bin:$PATH
eval "$(goenv init -)"
```

ちなみに各コマンドは`echo "$(pyenv init -)"`などで実行している内容がわかる。

めった見ることはないと思うが、、、今回`pyenv`だけ`init --path`が必要なのか調べる際に利用した。  
（`pyenv`については`shims`も環境変数に追加してあげないといけないっぽい。。。ほんの1、2分調べた程度だけど）
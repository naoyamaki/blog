---
title: PHPちょっとしたメモ
description: PHPにかかわるちょっとしたTipsや他言語を使っていると忘れちゃうちょっとしたもの
meta:
  - property: og:title
    content: PHPちょっとしたメモ
  - name: description
    content: PHPにかかわるちょっとしたTipsや他言語を使っていると忘れちゃうちょっとしたもの
  - property: og:description
    content: PHPにかかわるちょっとしたTipsや他言語を使っていると忘れちゃうちょっとしたもの
  - property: og:image
    content: https://naoyamaki.github.io/blog/php-tips/thumbnail.webp
  - property: og:url
    content: https://naoyamaki.github.io/blog/php-tips/
canonicalUrl: https://naoyamaki.github.io/blog/php-tips/
date: 2021-09-22
img: /php-tips/thumbnail.webp
category: dev
tags:
  - PHP
---

# PHPちょっとしたメモ


## 文字列と数字の比較

```php
$str = "a";

$str > 0 ? print("真") : print("偽");
// 偽
(int)$str > 0 ? print("真") : print("偽");
// 偽
echo (int)$str;
// 0
```

## 条件判定

工事中

## 配列の要素を関数で変換

```php
// 配列の要素を引数にした以下関数の結果を配列で取得する
function is_odd(int $value) {
  return ($value % 2 == 1);
}

$number = array(1, 2, 3, 4, 5);
$result = array_map('square', $number);
var_dump($result);
// array(5) {
//   [0]=>
//   bool(true)
//   [1]=>
//   bool(false)
//   [2]=>
//   bool(true)
//   [3]=>
//   bool(false)
//   [4]=>
//   bool(true)
// }

// 引数が複数の場合は
function sum(int $a, int $b) {
  return $a + $b;
}

$number     = array(1, 2, 3, 4, 5);
$add_number = array(2, 4, 6, 8, 10);
$result = array_map('sum', $number, $add_number);
var_dump($result);
// array(5) {
//   [0]=>
//   int(3)
//   [1]=>
//   int(6)
//   [2]=>
//   int(9)
//   [3]=>
//   int(12)
//   [4]=>
//   int(15)
// }
```

## 標準入力取得方法いろいろ

```php
fscanf(STDIN, "%d", $a);
fscanf(STDIN, "%d %d", $b, $c);
$d = explode(" ", fgets(STDIN));
```
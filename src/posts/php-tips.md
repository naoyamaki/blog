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
img: /blog/php-tips/thumbnail.webp
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

```php
// 試したい値でそれぞれテストをしていく
$target = null;
//$target = "";
//$target = 0;
//$target = [];     // 空配列
//$target = [""];   // 空文字要素が1つの配列
//$target = [null]; // null要素が1つの配列
//$target = [0];    // 0要素が1つの配列

($target)          ? print("True") : print("False");echo PHP_EOL;
($target == null)  ? print("True") : print("False");echo PHP_EOL;
($target == 0)     ? print("True") : print("False");echo PHP_EOL;
($target == "")    ? print("True") : print("False");echo PHP_EOL;
($target === null) ? print("True") : print("False");echo PHP_EOL;
($target === 0)    ? print("True") : print("False");echo PHP_EOL;
($target === "")   ? print("True") : print("False");echo PHP_EOL;
(!$target)         ? print("True") : print("False");echo PHP_EOL;
($target != null)  ? print("True") : print("False");echo PHP_EOL;
($target != 0)     ? print("True") : print("False");echo PHP_EOL;
($target != "")    ? print("True") : print("False");echo PHP_EOL;
($target !== null) ? print("True") : print("False");echo PHP_EOL;
($target !== 0)    ? print("True") : print("False");echo PHP_EOL;
($target !== "")   ? print("True") : print("False");echo PHP_EOL;
isset($target)     ? print("True") : print("False");echo PHP_EOL;
empty($target)     ? print("True") : print("False");echo PHP_EOL;
is_null($target)   ? print("True") : print("False");echo PHP_EOL;
```

### 結果

|                |未定義              |null |""    |0    |[]   |[""] |[null]|[0]  |
|:-:             |:-:                |:-:  |:-:   |:-:  |:-:  |:-:  |:-:   |:-:  |
|$target         |False(With Warning)|False|False |False|False|True |True  |True |
|$target == null |True(With Warning) |True |True  |True |True |False|False |False|
|$target == 0    |True(With Warning) |True |False |True |False|False|False |False|
|$target == ""   |True(With Warning) |True |True  |False|False|False|False |False|
|$target === null|True(With Warning) |True |False |False|False|False|False |False|
|$target === 0   |False(With Warning)|False|False |True |False|False|False |False|
|$target === ""  |False(With Warning)|False|True  |False|False|False|False |False|
|!$target        |True(With Warning) |True |True  |True |True |False|False |False|
|$target != null |False(With Warning)|False|False |False|False|True |True  |True |
|$target != 0    |False(With Warning)|False|True  |False|True |True |True  |True |
|$target != ""   |False(With Warning)|False|False |True |True |True |True  |True |
|$target !== null|False(With Warning)|False|True  |True |True |True |True  |True |
|$target !== 0   |True(With Warning) |True |True  |False|True |True |True  |True |
|$target !== ""  |True(With Warning) |True |False |True |True |True |True  |True |
|isset($target)  |False              |False|True  |True |True |True |True  |True |
|empty($target)  |True               |True |True  |True |True |False|False |False|
|is_null($target)|True(With Warning) |True |False |False|False|False|False |False|

by PHP 8.1

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
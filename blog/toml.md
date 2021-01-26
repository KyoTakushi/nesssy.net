---
slug: "what-is-toml"
date: "2020-03-15"
title: "tomlを使ってみる - toml -"
language: "ja"
---

今携わっているプロジェクト
個人的に、yamlなどを扱うことは結構あるのですが、
tomlについてはほぼ分からなかったので色々調べてみました。

# tomlとは
tomlとは、
>Tom's Obvious, Minimal Language.
（'トムの明瞭で最小の言語'）

[TOML](https://github.com/toml-lang/toml)

トムさんが作ったとてもわかりやすい言語、ということですね。

yamlやjsonなどを使う利点としては、シンプルで簡潔に記述できる点が大きいかと思います。
yamlはインデントなどの表現がありますが、tomlはどうでしょうか？

## tomlの言語仕様
違いがわかりやすいkey valueペアの形でyamlと比較します。

このような出力を希望する場合、

```
{Fruites=> {"A" => "apple", "B" => "banana", "C" => "coconut"}}
```

yaml:
```
Fruites:
  A: aaa
  B: bbb
  C: ccc
```

toml:
```
[Fruites]
A = "apple"
B = "banana"
C = "coconut"
```

これはtomlのテーブルを用いた書き方です。
また、配列に関しても、
yamlはインデントを揃えることによって表現しますが、
tomlの場合、多くの言語と同じように、

```
array = ["apple", "banana", "coconut"]
```
のように表現できるので可読性が高いですね！


今回私は個人的に、１つの配列に、複数の同じキーで構成されたオブジェクトを作りたかったので、
tomlのテーブルの配列を使うことにしました。

例えばこのようなものです。
```
{"array" => [{"kind" => "fruit", "name" => "apple"}, {"kind" => "fruit", "name" => "banana"}, {"kind" => "fruit", "name" => "coconut"}]}
```

tomlのテーブルは
```
[table]
kind = "fruit"
name = "apple"
```
出力：
```
{"table" => {"kind" => "fruit", "name" => "apple"}}
```
のように表記し、
テーブルの配列はこのように表記します。
```
[[table]]
kind = "fruit"
name = "apple"
```
出力：
```
"kind" => [{"kind" => "fruit", "name" => "apple"}]
```

テーブル配列を使うことで、同テーブル名ないの配列要素にできます。

```
[[array]]
kind = "fruit"
name = "apple"

[[array]]
kind = "fruit"
name = "banana"
```

出力：
```
{"array" => [{"kind" => "fruit", "name" =>"apple"}, {"kind" => "fruit", "name" => "banana"}]}
```

また、tomlテーブル、テーブルの配列ではこのような記述で入れ子にすることもできます。
```
[[array]]
kind = "fruit"
name = "banana"

[[array.two]]
kind = "vegetable"
name = "radish"
```

出力：
```
{"array" => [{"kind" => "fruit", "name" => "banana"}, two => [{"kind" => "vegetable", "name" => "radish"}]]}
```

tomlでは '.' で繋ぐことで、そのテーブルの要素であることを示します。のでとてもイメージがつきやすいのではないでしょうか？

## 最後に
調べてみると、tomlは色々なプロジェクトで使われており、
例えば、静的サイトジェネレーターであるHugoでも、
設定ファイルの形式にtomlを採用しています。

パーサーも多く作られているので、色々な言語で試してみたいと思います！

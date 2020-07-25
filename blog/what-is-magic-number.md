---
slug: "what-is-magic-number"
date: "2020-07-12"
title: "改めてマジックナンバーは避けたい"
language: "ja"
---

最近社内の開発で、APIを作成して、返ってくる特定の数値によって出力内容を出し分ける
ということをしました。

例えば、
（railsを使用した場合）
```ruby
class CreateFavoriteFruits < ActiveRecord::Migration
  def change
    create_table :favorite_fruits do |t|
      t.integer :fruit null: false
    end
  end
end
```

このようにfruitsテーブルは定義されており、
fruitカラムはinteger型にしています。

細かい部分は省きますが、クライアント側ではこのように選択式になっています。
選択して保存すればデータベースにはvalueの数値が保存されます。

```html
<select>
  <option value="0">banana</option>
  <option value="1">apple</option>
  <option value="2">grape</option>
</select>
```

そしてデータをAPIでクライアント側に渡します。
このように返ってくるとしましょう。

```json
fruits: {
  favorite_fruit: 0
}
```

つまりfavorite_fruitはbananaということになります。
そしてその値によって、JavaScriptが返す内容を分岐させます。
その時に、

```javascript
  // valueはAPIのfavorite_fruitの値だとします。
  if (value == 0){
    console.log("favorite fruit is banana!");
  } else {
    console.log("favorite fruit is not banana!");
  }  
```
内容は少し適当ですが、迂闊にこのようにすると、
valueがマジックナンバーになってしまいます。

マジックナンバーとは、
開発者しか理解できない数値のことです。

この場合、パッと見て、0がbananaである。ということが非常に判断しずらいです。
なぜなら、bananaということを判断するには、select内のoptionにしか記されていないからです。
パッと見て、確実に判断できる人はテレパシーが使えるか、鬼レベルで勘がいい人です。

マジックナンバーは開発時にはできるだけ避ける必要があります。
特に複数人で開発している場合、
また、後々にその可能性がある場合は特にです。
チーム開発は自分以外の人間でも比較的扱いやすいようにする必要があるためこうした配慮は重要です。

今回の場合、これを回避するためにrailsのモデル内とJavaScript内で同じような定数を定義し、
それを参照することでわかりやすくしました。

rails
```ruby
NAME_OF_FRUIT = {
  BANANA = 0 => 'banana',
  APPLE = 1 => 'apple',
  GRAPE = 2 => 'grape'
}
```

JavaScript
```javascript
class Fruits {
  static BANANA = 0;
  static APPLE = 1;
  static GRAPE = 2;
}
```

修正版：

```javascript
  class Fruits {
    static BANANA = 0;
    static APPLE = 1;
    static GRAPE = 2;
  }
  // valueはAPIのfavorite_fruitの値だとします。

  if (value == Fruits.BANANA){
    console.log("favorite fruit is banana!");
  } else {
    console.log("favorite fruit is not banana!");
  }
```


これでマジックナンバーは回避できました！

一人で開発している時は後のことを予想しながらやっていくことを心がけたいです。

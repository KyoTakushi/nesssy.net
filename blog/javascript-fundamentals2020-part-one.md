---
slug: "javascript-reduce"
date: "2020-10-17"
title: "JavaScriptと配列（reduceしてますか）"
language: "ja"
---

唐突ですが、配列ってよく登場しますよね。  
配列　↓
```
["Head", "Shoulder", "Knee", "Toe"] 
[{name: Jon, age: 20}, {name: Alice, age: 10}]  
```
配列内の要素に直接アクセスする場合は  
```javascript
const array = ["a", "b", "c"];
const array_a = array[0];
console.log(array_a);
// output: a
```
のようにインデックスを指定しますが、  
満遍なくアクセスしたい場合はループを使えば楽々ですよね。  
そんな配列を扱うため、JavaScriptには便利なメソッドが色々あります。  
その中で個人的に好きなのがreduceです。  
なので今回は簡単にreduceがどんなものなのかご紹介。  
ただ個人的に、reduceをもっと知りたい！好き！という気持ちを表した記事です。

## reduce()

reduceは指定したreducer関数を実行します。
reducer関数は以下４つの引数を持ちます。  
・Accumulator   
・Current Value   
・Current Index   
・Source Array

と言われてもよくわからないので早速ですが例をみてみましょう。  
以下の配列の合計を求めたい場合、  
```javascript
[0, 1, 2, 3, 4, 5];
```
```javascript
const numbers = [0, 1, 2, 3, 4, 5];
numbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 0);
//結果：15
```

```javascript

//
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
for (let i = 0; i < array.length; i++) {
    console.log("This means nothing but I just like array");
}
```

これだけみると、単純に、0+1+2+3+4+5  
ってやってるだけ？と思うかも知れませんが、reducer関数では過程が少々異なります。  
まず、0が引数としてありますが、これは初期値です。  
accumulatorは初期値があれば初期値から、なければ配列の一番初めの値になります。
今回の場合は0から始まります。  
そしてcurrent valueは初期値があれば配列の1番目の値、なければ2番目の値になります。  
今回の場合は0から始まります。  
そこから始まり、配列の最後の値までどんどん累積されていきます。  
一回目：　0 + 0 = 0  
二回目：　0 + 1 = 1  
三回目：　1 + 2 = 3  
四回目：　3 + 3 = 6  
五回目：　6 + 4 = 10  
六回目：　10 + 5 = 15  

なんだか面白いですよね。  
この独特な感じが個人的には好きです。  
これはスタック計算というものにも通ずるものがあり、  
逆ポーランド記法などにも関連しますが気になったら調べてみてください。  

map()と組み合わせてこんな風にも使えます。  
やってることはほぼ同じです。  
mapで新たにできた配列ないの数値の合計を出しています。
```javascript
const numbers = [{num: 1}, {num: 2}];
numbers.map(value => value.num).reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
});
//結果：3
```
工夫次第で色々できそうですね！  
今回は触りだけでしたが次回はもっと深掘りしてみたいと思います！  
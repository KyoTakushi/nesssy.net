---
slug: "funtion-return-in-jsx"
date: "2020-12-01"
title: "関数の返却値をjsx内で表示させたい場合 - React -"
language: "ja"
---

超基本ですがメモ

jsx内で関数のreturn値をしようしたい場合は以下のようなパターンが考えられます。

```javascript
const textFunc = () => {
	const text = ‘text’;
	return text;
}

const testFunc = newFunc();

return (
	<div>{testFunc}</div>
);
```
or
```javascript
const textFunc = () => {
  const text = ‘text’;
	return text; 
}

return (
  <div>{testFunc()}</div>
)
```

ついつい変数のような扱いをして
```javascript
return (
  <div>{testFunc}</div>
)
```

のようなことをしてしまって自分が嫌になるので気をつけましょう。

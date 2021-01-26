---
slug: "about-using-styled-jsx"
date: "2021-01-15"
title: "styled-jsx使うときの注意（メモ）- React -"
language: "ja"
---

rails-reactでReact側でstyled-jsxを使用したときに遭遇したエラー。  

以下React内
```javascript
  <>
    <div className="text">sample</div>
    <styled jsx>{`
      .text: {
        magin: auto; 
      }
    `}
  </>
```  
これだとproduction buildをした場合にうまくいかない。
development環境であればいけた。


これだといけた。

```javascript
  <React.Fragment>
    <div className="text">sample</div>
    <styled jsx>{`
      .text: {
        magin: auto; 
      }
    `}
  </React.Fragment>
```

まだ詳しく調べられていないが、まだ対応していない可能性。

<a href="https://github.com/vercel/next.js/issues/3432#issuecomment-403599018">
  https://github.com/vercel/next.js/issues/3432#issuecomment-403599018
</a>

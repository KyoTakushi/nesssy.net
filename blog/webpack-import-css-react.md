---
slug: "import-css-react-webpack"
date: "2020-11-12"
title: "Reactにcssをimportする場合 - Ruby on Rails, react-rails -"
language: "ja"
---

特にライブラリを使っている場合などにcssファイルをreactのjsファイルにimportする場合があるかと思います。  
react-railsを使っているのですが以下の1行を追加しなければcssを読み込んでくれませんでした。  

```
  <%= stylesheet_link_tag 'application' %=>
```

簡単にいえばimportされるcssもスタイルシートとして読み込むようにするものです。  
一瞬詰まりましたがissueが出ていました。  
https://github.com/rails/webpacker/issues/2667

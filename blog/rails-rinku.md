---
slug: "rails-rinku-gem"
date: "2020-06-26"
title: "Ruby on Rails - Rinkuを使ってテキストをリンクにする"
language: "ja"
---

[Rinku](https://github.com/vmg/rinku)を使ってテキストをリンクにします。  
使い方  
```ruby
Rinku.auto_link(item.comment)
```

尚且つ改行コードも置換して改行も反映させたい場合  
```ruby
Rinku.auto_link(item.comment).gsub(/\r\n|\r|\n/, "<br>")
```

---
slug: "first-post"
date: "2020-06-20"
title: "改行をそのまま反映する場合 - Ruby on Rails -"
language: "ja"
---

railsのviewでcontrollerから渡ってくるテキストデータの改行コードをbrに置換して反映させたい場合。  
```ruby
# @message = "テキスト\nテキスト"
safe_join("#{@message}".split("\n"), tag(:br))
```

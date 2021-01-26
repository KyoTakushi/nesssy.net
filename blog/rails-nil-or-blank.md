---
slug: "rails-nil-or-blank"
date: "2020-08-10"
title: "Ruby on Rails - nilまたは空かを判別する"
language: "ja"
---

nilまたは空かを判定。  
以下railsのmodel内。  
```ruby
Message.where.not(content: [nil, ''])
```

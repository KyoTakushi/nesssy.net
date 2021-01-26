---
slug: "rails-assets-precompile-node-env"
date: "2020-11-01"
title: "ローカルでproduction環境と同じようにrails assets:precompileする - Ruby on Rails, rails-react -"
language: "ja"
---

環境:  
rails 6.0.3  
ruby 2.6.5  

rails-reactを使っていて、production buildとdevelopmentの結果に差があった場合にローカルでproduction環境を再現するためにやったことです。

```
$ NODE_ENV=production bundle exec rails assets:precompile
```

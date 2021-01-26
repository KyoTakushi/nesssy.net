---
slug: "system-ruby-bundle-command"
date: "2020-12-20"
title: "Rubyのsystemを使ってファイルからbundle execを実行させる - Ruby, Ruby on Rails -"
language: "ja"
---

まずはrakeタスクを実行してその後にforemanを起動させてサーバーを立ち上げます。  
bin/initで実行できます。  
```bash
$ bin/init
```
  
bin/init
```ruby
#!/usr/bin/env ruby
require 'fileutils'

APP_ROOT = File.expand_path('..', __dir__)

def system!(*args)
  system(*args) || abort("\n== Command #{args} failed ==")
end

FileUtils.chdir APP_ROOT do
  # rakeタスクを実行
  puts 'Running rake task...'
  system!('bundle exec rake test_task')

  # foreman起動&サーバー起動
  puts 'Starting server!'
  system!('bundle exec foreman start -f ./Procfile.dev')
end
```

サーバーではcronで毎日走らせているタスクなのですが、ローカル開発時にも毎回走らせる必要があるので一発でできるようにまとめました。  
同じようにbin/に入ってるファイルの記述も参考にしました。

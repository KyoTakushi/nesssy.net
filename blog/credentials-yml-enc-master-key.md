---
slug: "permission-error-master-key"
date: "2020-07-26"
title: "binread': Permission denied @ rb_sysopen - /config/master.key (Errno::EACCES) の解消方法"
language: "ja"
---

rails 6 で色々あってmaster.keyを再生成した時にrails s が起動せずにこんな感じのエラーが出ました。 
```
/Users/user/.rbenv/gems/2.6.0/gems/activesupport-6.0.3.1/lib/active_support/encrypted_file.rb:93:in `binread': Permission denied @ rb_sysopen - /Users/user/app/config/master.key (Errno::EACCES)
```


## 解決方法
ファイルのパーミッションを変更してあげると治りました。
```
sudo chmod 644 config/master.key
```

master.keyを作り直す際にパーミッションも同時に変わっていたみたいです。

ちなみにこのmaster.keyはcredentials.yml.encを暗号化・複合する際に使います。
rails5.2以降に追加されているものです。

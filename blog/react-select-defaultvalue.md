---
slug: "react-select-defaultvalue"
date: "2021-01-08"
title: "動的に生成したoptionとselectにdefaultValueを設定する(React)"
language: "ja"
---

業務でselectを使った簡単な絞り込みを作っていたのですが、  
その際に思ったのでreactでselectなどを使う場合の注意点をメモしておきます。

# 動的にoptionを生成する場合  
APIなどによって選択項目などを動的に制御したい場合、  
何も考えないでやるとdefaultValueが効きません。  
これは慣れている人は特に問題ないかもしれないのですが、初めて実装する場合に困る場合があります。  
```javascript

```

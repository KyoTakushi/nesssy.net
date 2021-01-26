---
slug: "react-select-defaultvalue"
date: "2021-01-08"
title: "動的に生成したoptionとselectにdefaultValueを設定する - React -"
language: "ja"
---

業務でselectを使った簡単な絞り込みを作っていたのですが、  
その際に思ったのでreactでselectなどを使う場合の注意点をメモしておきます。

## APIをレスポンスを元にdefaultValueとoptionを設定する場合
APIレスポンス(dataオブジェクト)  
```json
  data = {
    currentValue: 0, 
    list: [
      { 
        value: 0, 
        name: "hogehoge1"
      },
      {
        value: 1,
        name: "hogehoge2"
      }
    ]
  }
```  

上記のデータが返ってくると仮定し、そこからoptionを動的に生成したい場合   
以下のようにするとうまくいかず  

```javascript
const Select = ({ data }) => {

  if (!data) {
    return null;
  }

  return (
    <select defaultValue={data.currentValue}>
      data.list.map((option, key) => (
        <option value={option.value} key={key}>{option.name}</option>
      ))
    </select>
  );
}
```  

以下だとうまくいきました  

```javascript
const Select = ({ data }) => {

  if (!data) {
    return null;
  }

  return (
    { data ?
      <select defaultValue={data.currentValue}>
        data.list.map((option, key) => (
          <option value={option.value} key={key}>{option.name}</option>
        ))
      </select> : null
    }
  );
}
```  

これはReactが初期レンダー時にしかdefaultValueを見ないために起きます。  
逆にdata.currentValueがAPI由来ではなく固定値の場合は特に問題はありません。
このようにAPIを使用する場合はどうしてもラグが発生するため常に気をつけておきたいです。  

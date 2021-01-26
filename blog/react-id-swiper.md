---
slug: "react-id-swiper-error"
date: "2020-08-27"
title: "react-id-swiperがうまく動かなかったときにやったこと - React -"
language: "ja"
---

react-id-swiperを使おうとしたところ、
以下のように実装した場合に正常に動作しませんでした。

```javascript
  //省略

  const params = {
    slidesPerView: 2,
    spaceBetween: 20,
    lazy: true,
  }

  return (
    <div className="container">
      {messages.length ? 
        <Swiper {...params}>
          messages.map((message, key) => (
            <div className="message" key={key}>
              {message.content}
            </div>
          ))
        </Swiper>
      } : 
      <div className="no-message>メッセージはありません</div>
    </div>
  )
```

observerとobseveParentsをパラメータに追加するとうまくいきました。  

```javascript
  //省略

  const params = {
    slidesPerView: 2,
    spaceBetween: 20,
    lazy: true,
    observer: true, //追加
    observeParents: true, //追加
  }
  
  return (
    <div className="container">
      {messages.length ? 
        <Swiper {...params}>
          messages.map((message, key) => (
            <div className="message" key={key}>
              {message.content}
            </div>
          ))
        </Swiper>
      } : 
      <div className="no-message>メッセージはありません</div>
    </div>
  )
```

APIのレスポンスの要素の有無によって表示の出しわけをしているため、  
observerで監視して、初期化をする必要があったようです。

import React from "react"

export default () => {
  return (
    <div className="front-content front-content--index">
      <div className="index__title title-medium bold">CONTENTS</div>
      <div className="index">
        <ul className="index__list">
          <li className="index__small"><a href="/">INTRODUCTION</a></li>
        </ul>
        <ul className="index__list">
          <li><a id="blog" href="/blog">TECH BLOG</a></li>
          <li><a id="works" href="/">WORKS</a></li>
          <li><a id="bruhbruh" href="/">BRUH BRUH</a></li>
        </ul>
      </div>
    </div>
  )
}

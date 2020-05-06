import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout.js"
import Graphic from "../components/graphic.js"

export default () => (
  
  <Layout>
    <div className="wrapper top">
      <div className="line line--top">
        <div className="line__inner-text">Neo Testament <span>ver.1</span></div>
      </div>
      <div className="line line--bottom">
        <div className="line__inner-text">Kyo T</div>
      </div>
      <div className="nav">
        <Link className="nav__link" to="blog">memos</Link>
        <Link className="nav__link" to="blog">works</Link>
      </div>
    </div>
    <Graphic />
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

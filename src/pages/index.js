import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MetaIndex from "../components/meta/meta-index"
import Portal from "../components/portal"
import Graphic from "../components/graphic"

//TODO metaをページごとに自由に変えられるようにする
export default () => (
  <Layout>
    <MetaIndex />
    <Portal />
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

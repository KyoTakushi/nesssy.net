import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import MetaIndex from "../components/meta/meta-index"
import Graphic from "../components/graphic"
import Portal from "../components/portal"

//TODO metaをページごとに自由に変えられるようにする
export default () => (
  <Layout>
    <MetaIndex />
    <Graphic />
    <Portal />
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

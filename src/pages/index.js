import React from "react"
import { graphql } from "gatsby"
import Layer from "../components/layer.js"
import ContentTable from "../components/content-table.js"

export default () => (
  <Layer>
    <div className="front-wrapper">
      <div className="front-content">
        <h1 className="front__title">Neo <br />Testament</h1>
        <div className="front__date">First Edition</div>
        <div className="front__author">Written by Me</div>
      </div>
      <ContentTable />
    </div>
  </Layer>
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

import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layer from "../components/layer.js"
import ContentTable from "../components/content-table.js"

export default ({ data }) => {
  console.log(data)
  return (
    <Layer>
      <div className="front-wrapper">
        <ContentTable />
        <div className="front-content front-content--list">
          <div className="index__title title-content bold">TECH BLOG</div>
          <div className="content-list">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id} className="content-list__item">
                <Link
                  to={node.fields.slug}
                >
                {node.frontmatter.title}<span>{node.frontmatter.date}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layer>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

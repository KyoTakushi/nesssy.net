import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout.js"
import ContentTable from "../components/content-table.js"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div className="front-content front-content--list">
        <div className="content__nav left kaku">
          <Link to="/">
            HOME
          </Link>
        </div>
        <div className="content__nav right kaku">
          <Link to="work">
            WORKS
          </Link>
        </div>
        <div className="content__title kaku">TECH BLOG</div>
        <div className="content__list">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className="content-list__item">
              <Link
                to={node.fields.slug}
              >
              {node.frontmatter.title}
              </Link>
              <span>{node.frontmatter.date}</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
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

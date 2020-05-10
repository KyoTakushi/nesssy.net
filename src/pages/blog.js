import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout.js"
import Header from "../components/header.js"

export default ({ data }) => {
  return (
    <Layout>
      <div className="wrapper wrapper--list">
        <Header />
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

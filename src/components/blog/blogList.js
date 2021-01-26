import React from "react"
import { graphql } from "gatsby"
import BlogContent from "./blogContent"
import Layout from "../layout"
import Header from "../header"
import ContentWrapper from "../contentWrapper"

export default ({ data }) => (
  <Layout>
    <ContentWrapper>
      <Header />
      <BlogContent data={data} />
    </ContentWrapper>
  </Layout>
)

export const listQuery = graphql`
  query listQuery($skip: Int!, $limit: Int!){
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC}
      skip: $skip
      limit: $limit
    ) {
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
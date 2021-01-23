import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import BlogContent from "../components/blog/BlogContent"
import styled from "styled-components"
import ContentWrapper from "../components/contentWrapper"

export default ({ data }) => (
  <Layout>
    <ContentWrapper>
      <Header />
      <BlogContent data={data} />
    </ContentWrapper>
  </Layout>
)

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

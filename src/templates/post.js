import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="post">
        <h1 className="post__title">{post.frontmatter.title}</h1>
        <div className="post__date">{post.frontmatter.date}</div>
        <div className="post__inner">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`

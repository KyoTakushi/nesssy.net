import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import Header from "../components/header.js"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Header />
      <div className="wrapper--post">
      <div className="content__title kaku">TECH BLOG</div>
        <div className="post">
          <h1 className="post__title">{post.frontmatter.title}</h1>
          <div className="post__date">{post.frontmatter.date}</div>
          <div className="post__inner">
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
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

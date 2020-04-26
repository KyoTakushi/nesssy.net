import React from "react"
import { graphql } from "gatsby"
import Layer from "../components/layer.js"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layer>
      <div className="content-wrapper">
        <h1 className="post__title">{post.frontmatter.title}</h1>
        <div className="post__date">{post.frontmatter.date}</div>
        <div className="post__inner">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layer>
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

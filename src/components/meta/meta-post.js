import React from "react"
import { Helmet } from "react-helmet"

export default ({ post }) => (
  <Helmet>  
    <meta charSet="utf-8" />
    <title>{post.frontmatter.title}</title>
    <meta property="og:title" content={post.frontmatter.title}/>
    <meta property="og:site_name" content="Neo Testament"/>
  </Helmet>
)


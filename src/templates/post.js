import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import Header from "../components/header.js"
import MetaPost from "../components/meta/meta-post.js"
import styled from "styled-components"
import ContentWrapper from "../components/contentWrapper"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <ContentWrapper>
        <MetaPost post={post}/>
        <Header 
          previous="blog"
        />
        <PostWrapper>
          <Post>
            <PostTitle>{post.frontmatter.title}</PostTitle>
            <PostDate>{post.frontmatter.date}</PostDate>
            <PostContent>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </PostContent>
          </Post>
        </PostWrapper>
      </ContentWrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
    ) {
      html
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
      }
    }
  }
`

const PostWrapper = styled.div`
  padding: 5px 40px; 
`

const Post = styled.div`
  max-width: 900px;
  margin: 5px auto;
  padding: 30px;
  border: 1px solid;
  background: #efefef;
`

const PostTitle = styled.h1`
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 10px;
`

const PostDate = styled.div`
  font-size: 15px;
`

const PostContent = styled.div`
  padding-top: 60px;
  border-top: 1px solid;
  margin-top: 15px;

  h1, h2 {
    margin: 50px 0 10px;
    font-weight: bold;
  }
  h1 {
    font-size: 18px; 
  }
  h2 {
    font-size: 15px;
  }

  h3 {
    font-size: 15px;
    font-weight: bold;
    margin: 15px 0;
  }
  p {
    padding: 3px 0;
    font-size: 14px;
    line-height: 25px;
  }
  strong {
    font-weight: bold;
  }
  a {
    color: #658ba7; 
    border-bottom: 1px solid #658ba7;
  }
`
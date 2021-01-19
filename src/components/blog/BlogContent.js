import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

export default ({ data }) => {
  return (
    <ContentWrapper>
      <ContentTitle>TECH BLOG</ContentTitle>
      <ContentList>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <ContentListItem key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            <span>{node.frontmatter.date}</span>
          </ContentListItem>
        ))}
      </ContentList>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  position: relative;
  overflow: auto;
`

const ContentTitle = styled.div`
  text-align: center;
  font-size: 16px;
  color: #fff;
`

const ContentList = styled.div`
  margin: 50px auto;
  text-align: left;
  padding: 20px;
  max-width: 950px;
`

const ContentListItem = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin: 30px 10px;
  display: flex;
  justify-content: space-between;

  a {
    max-width: 80%;
    line-height: 1.7;
  }

  span {
    font-size: 13px;
    margin-left: 50px;
  }

  &:hover {
    opacity: 0.7;
  }
`
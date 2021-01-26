import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default ({ data }) => {
  return (
    <ContentWrapper>
      <ContentList>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <ContentListItem key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            <span>{node.frontmatter.date}</span>
          </ContentListItem>
        ))}
      </ContentList>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
  position: relative;
  overflow: auto;
`

// const ContentTitle = styled.div`
//   text-align: center;
//   font-size: 16px;
//   color: #fff;
// `

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
  position: relative;

  a {
    max-width: 80%;
    line-height: 1.7;
  }

  span {
    font-size: 13px;
    margin-left: 50px;
  }

  &::before {
    content: "";
    display: inline-block;
    width: 0px;
    height: 2px;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%);
    position: absolute;
    bottom: 0;
    left: 0;
    //transition: 0.5s;
  }

  &:hover {
    opacity: 0.9;
    &::before {
      width: 100%;
      transition: width 0.5s;
    }
  }
`
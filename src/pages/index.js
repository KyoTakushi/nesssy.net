import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import MainPortal from "../components/MainPortal"
import SocialLinks from "../components/SocialLinks"
import MetaIndex from "../components/meta/meta-index"

//kyotakushi
import k from "../images/k.png";
import y from "../images/y.png";
import o from "../images/o.png";
import t from "../images/t.png";
import a from "../images/a.png";
import u from "../images/u.png";
import s from "../images/s.png";
import h from "../images/h.png";
import i from "../images/i.png";

const alphabetArray = [k, y, o, t, a, k, u, s, h, i];

//TODO metaをページごとに自由に変えられるようにする
export default () => (
  
  <Layout>
    <MetaIndex />
    <Wrapper>
      <Title name={alphabetArray} />
      <Title name={alphabetArray} />
      <MainPortal />
      <SocialLinks />
    </Wrapper>
  </Layout>
)

const Title = ({ name }) => {

  return (
    <TitleRow>
      {name.map((n, key) => (
        <TitleItem image={n} key={key} />
      ))}
    </TitleRow>
  );
}

const Wrapper = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
`;

const TitleRow = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  &:nth-child(1) {
    top: 13vh;
    span {
      transform: scale(-0.5);
    }
  }
  &:nth-child(2) {
    bottom: 13vh;
    span {
      transform: scale(0.5);
    }
  }
`

const TitleItem = styled.span`
  width: 50px;
  height: 50px;
  background: center / contain url(${props => props.image}) no-repeat;
`

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

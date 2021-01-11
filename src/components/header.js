import React from "react";
//import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styled from "styled-components";

export default () => (
  <HeaderContainer>
    <AniLink swipe direction="right" to="/">
      <HeaderItem className="fixed-header__text">←  home</HeaderItem>
    </AniLink>
  </HeaderContainer>
)

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
`

const HeaderItem = styled.div`
  font-size: 17px;
  letter-spacing: 1.3px;
  color: #fff;
  &:hover {
    opacity: 0.7;
  }
`
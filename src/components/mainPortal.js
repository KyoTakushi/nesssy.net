import React, { useState, useEffect, useRef } from "react";
//import { Link } from "gatsby";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import me from "../images/me.png";

 export default () => (
   <CenterImageContainer>
     <SelfPortrait src={me} />
     <PortalLink content="portfolio">
       <AniLink swipe direction="left" to="portfolio">
         portfolio<span>ポートフォリオ</span>
       </AniLink>
     </PortalLink>
     <PortalLink content="blog">
       <AniLink swipe direction="left" to="blog">
         blog<span>ブログ</span>
       </AniLink>
     </PortalLink>
     <PortalLink content="about">
       <AniLink to="blog">
         about<span>自己紹介</span>
       </AniLink>
     </PortalLink>
   </CenterImageContainer>
 )

const CenterImageContainer = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 400px;
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 19px;
`

const SelfPortrait = styled.img`
  width: 40%;
  margin: auto;
  opacity: 0.9;
`

const PortalLink = styled.div`
  position: absolute;
  cursor: pointer;
  a {
    font-size: 16px;
    letter-spacing: 2px;
    color: #fff;
  }
  a span {
    font-size: 11px;
    margin-left: 5px;
  }
  ${props => props.content == 'portfolio' && `
    top: 205px;
    right: -80px;
  `}
  ${props => props.content == 'blog' && `
    top: 140px;
    left: 0;
  `}
  ${props => props.content == 'about' && `
    top: 275px;
    left: -20px;
  `}
  &::before {
    content: "";
    display: inline-block;
    width: 0;
    height: 1px;
    background: #fff;
    position: absolute;
    bottom: -7px;
    left: 0;
    transition: width 0.5s;
  }
  &:hover::before {
    width: 100%;
    transition: width 0.5s;
  }
`
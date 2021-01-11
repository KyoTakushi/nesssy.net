import React from "react";
import styled from "styled-components";

import github from "../images/icon/GitHub-Mark-Light-64px.png";

const socials = {
  github: {
    icon: github,
    link: 'https://github.com/KyoTakushi'
  }
}

const SocialLinks = () => {
  return (
    <IconContainer>
      <IconItem src={socials.github.icon}>
        <a href={socials.github.link} target="_blank" title="github" />
      </IconItem>
    </IconContainer>
  );
}

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 30px;
  left: 50%; 
  transform: translate(-50%, 0);
`

const IconItem = styled.div`
  width: 25px;
  height: 25px;
  background: center / cover url(${props => props.src}) no-repeat;
  &:hover {
    opacity: 0.7;
  }
  a {
    display: block;
    height: 100%;
  }
`

export default SocialLinks;
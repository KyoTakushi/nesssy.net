import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "../images/me.png";

export default ({ previous }) => (
  <HeaderContainer>
    <HeaderItem className="fixed-header__text">
      <Link to="/">
        <HeaderLogo src={Logo} title="Home" alt="Home" />
      </Link>
    </HeaderItem>
    {previous &&
      <HeaderItem className="fixed-header__text">
        <Link to={`/${previous}`}>← to {previous}</Link>
      </HeaderItem>
    }
  </HeaderContainer>
)

const HeaderContainer = styled.div`
  max-width: 115px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`

const HeaderItem = styled.div`
  margin: 10px 0;
  color: #fff;
  &:hover {
    opacity: 0.7;
  }
`

const HeaderLogo = styled.img`
  width: 30px;
`
import React from "react"
import styled from "styled-components"
import MainPortal from "../components/mainPortal"
import SocialLinks from "../components/socialLinks"

// Hello, my name is kyotakushi!
import k from "../images/k.png"
import y from "../images/y.png"
import o from "../images/o.png"
import t from "../images/t.png"
import a from "../images/a.png"
import u from "../images/u.png"
import s from "../images/s.png"
import h from "../images/h.png"
import i from "../images/i.png"

const alphabetArray = [k, y, o, t, a, k, u, s, h, i]

export default () => (
  <Wrapper>
    <Title name={alphabetArray} />
    <Title name={alphabetArray} />
    <MainPortal />
    <SocialLinks />
  </Wrapper>
)

const Title = ({ name }) => {

  return (
    <TitleRow>
      {name.map((n, key) => (
        <TitleItem image={n} key={key} />
      ))}
    </TitleRow>
  )
}

const Wrapper = styled.div`
  text-align: center;
  height: 100vh;
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
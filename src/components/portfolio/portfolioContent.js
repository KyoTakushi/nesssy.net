import React from "react"
import styled from "styled-components"
import website from "../../images/ss_website.jpg"

export default () => (
  <WorkContainer>
    <PortfolioItem />
  </WorkContainer>
)

//仮で１つ入れている
const PortfolioItem = () => (
  <WorkSingleItem>
    <WorkSingleThumb src={website} />
    <WorkSingleTitle>website of KYOTAKUSHI (this website)</WorkSingleTitle>
    <WorkSingleDescription>Description</WorkSingleDescription>
  </WorkSingleItem>
)

const WorkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  grid-auto-rows: minmax(250px, auto);
  margin: 60px 120px;
`

const WorkSingleItem = styled.div`
  position: relative;
  overflow: hidden;
  //box-shadow: 8px 8px 8px #fff;
  border: 1px solid #fff;
`

const WorkSingleThumb = styled.img`
  //background: #fff;
  width: 100%;
  height: 100%;
  transform: scale(1.4);
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.0);
    transition: transform 0.5s;
  }
`

const WorkSingleTitle = styled.div`
  color: #000;
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 1.5px;
  background: #fff;
  padding: 10px;
`

const WorkSingleDescription = styled.div`

`
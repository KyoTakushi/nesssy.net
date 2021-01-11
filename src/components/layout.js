import React from "react"
import styled from "styled-components"
import Header from "./Header"

export default ({ children }) => (
  <GlobalWrapper>
    {children}
  </GlobalWrapper>
)

const GlobalWrapper = styled.div`
  height: 100vh;
  background: #1d1d1d;
  //font-family: 'VT323', monospace;
`

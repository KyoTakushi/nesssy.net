import React from "react"
import styled from "styled-components"

export default ({ children }) => (
  <GlobalWrapper>
    {children}
  </GlobalWrapper>
)

const GlobalWrapper = styled.div`
  min-height: 100vh;
  //background: #000;
  //font-family: 'VT323', monospace;
`

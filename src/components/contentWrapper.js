import React from "react"
import styled from "styled-components"

export default ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

const Wrapper = styled.div`
  background: #000;
  min-height: 100vh;
`
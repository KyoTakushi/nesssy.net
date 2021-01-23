import React from "react"
import styled from "styled-components"

export default ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

const Wrapper = styled.div`
  background: rgba(0,0,0,1);
  min-height: 100vh;
  animation: fadeIn 1s;
  opacity: 1;

  @keyframes fadeIn {
    0% {
      opacity: 0.5;
    }
  }
`
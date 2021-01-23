import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Header from "../components/header"
import MetaIndex from "../components/meta/meta-index"
import PortfolioContent from "../components/portfolio/PortfolioContent"
import ContentWrapper from "../components/contentWrapper"

export default () => {
  return (
    <Layout>
      <ContentWrapper>
        <Header />
        <MetaIndex />
        <PortfolioContent />
      </ContentWrapper>
    </Layout>
  )
}


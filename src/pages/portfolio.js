import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import MetaIndex from "../components/meta/meta-index"
import PortfolioContent from "../components/portfolio/portfolioContent"
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


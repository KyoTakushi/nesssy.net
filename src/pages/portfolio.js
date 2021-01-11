import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Header from "../components/Header"
import MetaIndex from "../components/meta/meta-index"
import PortfolioContent from "../components/portfolio/PortfolioContent"

export default () => {
  return (
    <Layout>
      <Header />
      <MetaIndex />
      <PortfolioContent />
    </Layout>
  )
}


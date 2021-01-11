import React from "react"
import styled from "styled-components"

const GalleryWrapper = styled.div`
  margin: 30px auto;
`

const GalleryGridList = styled.div`
  max-width: 900px;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 1fr 3fr 1fr 2fr 1fr 3fr 1fr 2fr;;
  grid-template-rows: 1fr 1.5fr 1fr;;
`

const GalleryItem = styled.div`
  img {
    width: 100%;
    height: auto;
  }
  &:nth-child(1) {
    grid-column: 1/2;
    grid-row: 1/1;
  }
  &:nth-child(2) {
    grid-column: 3/8;
    grid-row: 1/3;
  }
  &:nth-child(3) {
    grid-column: 8/10;
    grid-row: 2/3;
  }
`

export default () => {
  return (
    <GalleryWrapper>
      <GalleryGridList>
        <GalleryItem><img src="/static/images/collage1.jpg" /></GalleryItem>
        <GalleryItem><img src="/static/images/encounter1.jpg" /></GalleryItem>
        <GalleryItem><img src="/static/images/entry_realm.jpg" /></GalleryItem>
      </GalleryGridList>
    </GalleryWrapper>
  )
}

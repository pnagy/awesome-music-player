import React from "react"
import styled from "styled-components"
import { Card, CardMedia, CardTitle } from "material-ui/Card"

const Container = styled(Card)`
  width: 300px;
  height: 300px;
`

const Album = ({ artist, title, image }) => (
  <Container>
    <CardMedia overlay={<CardTitle title={title} subtitle={artist} />}>
      <img src={image} alt="" />
    </CardMedia>
  </Container>
)

export default Album

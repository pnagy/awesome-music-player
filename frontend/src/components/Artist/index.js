import React from "react"
import styled from "styled-components"
import { Card, CardMedia, CardTitle } from "material-ui/Card"

const Container = styled(CardMedia)`
  width: 300px;
  height: 300px;
  border-radius: 30px;
`

const Artist = ({ artist, image }) => (
  <Container overlay={<CardTitle title={artist} />}>
    <img src={image} alt="" />
  </Container>
)

export default Artist

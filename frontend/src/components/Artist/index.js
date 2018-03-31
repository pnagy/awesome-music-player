import React from "react"
import styled from "styled-components"
import { CardMedia, CardTitle } from "material-ui/Card"

const Container = styled(CardMedia)`
  width: 300px;
  height: 300px;
  border-radius: 30px;
`

const Artist = ({ name, image, onClick }) => (
  <Container overlay={<CardTitle title={name} />} onClick={() => onClick(name)}>
    <img src={image} alt="" />
  </Container>
)

export default Artist

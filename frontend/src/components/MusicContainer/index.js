import React from "react"
import styled from "styled-components"
import Paper from "material-ui/Paper"

const Container = styled(Paper)`
  padding: 20px;
  margin: 20px;
`
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
    margin: 0px 30px 30px 0px;
  }
`

const Header = styled.h1``

const MusicContainer = ({ title, children, onBack }) => {
  return (
    <Container>
      <Header>{title}</Header>
      <Content>{children}</Content>
    </Container>
  )
}

export default MusicContainer

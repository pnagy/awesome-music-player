import React from "react"
import styled from "styled-components"
import Paper from "material-ui/Paper"
import Progress from "../Progress"

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

const BackNavigation = styled.div`
  font-size: 12px;
  cursor: pointer;
  font-weight: bold;
`

const Header = styled.h1``

const MusicContainer = ({ title, children, isLoading, onBackClick, backLabel }) => {
  return (
    <Container>
      {backLabel ? (
        <BackNavigation onClick={onBackClick}>{`<<<  ${backLabel}`}</BackNavigation>
      ) : null}
      <Header>{title}</Header>
      {isLoading ? <Progress /> : <Content>{children}</Content>}
    </Container>
  )
}

export default MusicContainer

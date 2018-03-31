import React from "react"
import CircularProgress from "material-ui/CircularProgress"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Progress = () => (
  <Container>
    <CircularProgress mode="indeterminate" size={200} thickness={4} />
  </Container>
)

export default Progress

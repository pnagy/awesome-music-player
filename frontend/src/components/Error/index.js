import React from "react"
import styled from "styled-components"

const StyledError = styled.div``

const Error = ({ error }) => {
  return <StyledError>{`Disgusting error happened: ${JSON.stringify(error)}`}</StyledError>
}

export default Error

import React from "react"
import styled from "styled-components"
import Paper from "material-ui/Paper"

const StyledError = styled(Paper)`
  margin: 45px;
  padding: 25px;
`
const ErrorTitle = styled.h1``
const ErrorSubtitle = styled.h2`
  font-size: 20px;
`

const ErrorText = styled.pre`
  background-color: #eee;
  padding: 15px;
`

const Error = ({ error }) => {
  return (
    <StyledError>
      <ErrorTitle>{`I'm so sorry! 😥`}</ErrorTitle>
      <ErrorSubtitle
      >{`It seems something is broken, try again and let's hope the best!`}</ErrorSubtitle>
      <ErrorText>{JSON.stringify(error)}</ErrorText>
    </StyledError>
  )
}

export default Error

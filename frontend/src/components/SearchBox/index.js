import React from "react"
import styled from "styled-components"
import TextField from "material-ui/TextField"
import Paper from "material-ui/Paper"
import IconElement from "material-ui/svg-icons/action/search"

const StyledIcon = styled(IconElement)`
  padding: 5px;
  margin: 5px;
`

const Container = styled(Paper)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
`

const StyledTextField = styled(TextField)``

const Search = ({ onSearch }) => {
  return (
    <Container>
      <StyledIcon />
      <StyledTextField hintText="Search..." onChange={(event, value) => onSearch(value)} />
    </Container>
  )
}

export default Search

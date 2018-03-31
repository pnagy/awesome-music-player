import React from "react"
import MaterialAppBar from "material-ui/AppBar"
import SearchBox from "../SearchBox"

const AppBar = ({ onSearch }) => {
  return (
    <MaterialAppBar
      title="Peter's Awesome Music Player"
      showMenuIconButton={false}
      iconElementRight={<SearchBox onSearch={onSearch} />}
    />
  )
}

export default AppBar

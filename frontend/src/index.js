import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import getMuiTheme from "material-ui/styles/getMuiTheme"

import "./index.css"

import App from "./App"
import store from "./store"

import "./index.css"

import registerServiceWorker from "./registerServiceWorker"

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
)
registerServiceWorker()

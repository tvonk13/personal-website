import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseLine from "@material-ui/core/CssBaseline";

import "./index.css";

import Main from "./Main";

const theme = createMuiTheme({ 
  palette: {
    primary: { main: "#37374A" },
    secondary: { main: "#E6E3E6" },
    background: "#BFA6BC"
  },
  typography: {
    fontFamily: 'Open Sans'
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseLine />
    <Main/>
  </ThemeProvider>,
  document.getElementById("root"),
);
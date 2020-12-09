import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import CssBaseLine from "@material-ui/core/CssBaseline";

import Main from "./Main";

const theme = createMuiTheme({ 
  palette: {
    primary: { main: "#37374A" },
    secondary: { main: "#E5E5E5" },
    background: "#BFA6BC"
  },
  typography: {
      fontFamily: 'Open Sans',
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseLine />
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root"),
);
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import CssBaseLine from "@material-ui/core/CssBaseline";
import { PrismicProvider } from '@prismicio/react'
import { client } from './prismic'

import Main from "./Main";

const theme = createTheme({
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
    <PrismicProvider client={client}>
        <ThemeProvider theme={theme}>
            <CssBaseLine />
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        </ThemeProvider>
    </PrismicProvider>,
  document.getElementById("root"),
);
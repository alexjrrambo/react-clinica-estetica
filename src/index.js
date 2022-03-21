/* eslint-disable no-restricted-globals */
import React from 'react';
import { hydrate, render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import App from './App';

let previousUrl = '';
const observer = new MutationObserver(() => {
  if (location.href !== previousUrl) {
    previousUrl = location.href;
    window.scrollTo(0, 0);
  }
});
const config = { subtree: true, childList: true };
observer.observe(document, config);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#59593D',
    },
  },
});

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, rootElement);
} else {
  render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, rootElement);
}

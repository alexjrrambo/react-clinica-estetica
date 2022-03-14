/* eslint-disable no-restricted-globals */
import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import App from './App';

window.addEventListener('locationchange', () => {

});

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

ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));

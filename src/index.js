import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#59593D',
    },
  },
});

ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));

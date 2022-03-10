import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/reactotron';

import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';

import { PublicRoutes, history } from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <GlobalStyle />
      <ToastContainer />
      <PublicRoutes />
    </Router>
  </Provider>
);

export default App;

import React from 'react';
import { Router } from 'react-router-dom';
import './config/reactotron';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';
import { PublicRoutes, history } from './routes';
import Header from './components/Site/Header';
import Footer from './components/Site/Footer';

const App = () => (
  <Router history={history}>
    <GlobalStyle />
    <ToastContainer />
    <Header />
    <PublicRoutes />
    <Footer />
  </Router>
);

export default App;

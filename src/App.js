import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';
import { PublicRoutes, history } from './routes';
import Header from './components/Site/Header';
import Footer from './components/Site/Footer';
import WhatsApp from './components/Site/WhatsApp';

const App = () => (
  <Router history={history}>
    <GlobalStyle />
    <ToastContainer />
    <WhatsApp />
    <Header />
    <PublicRoutes />
    <Footer />
  </Router>
);

export default App;

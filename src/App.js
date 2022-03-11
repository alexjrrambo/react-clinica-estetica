import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './config/reactotron';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import { PublicRoutes, history } from './routes';
import store from './store';
import Header from './components/Site/Header';
import Footer from './components/Site/Footer';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <GlobalStyle />
      <ToastContainer />
      <Header />
      <PublicRoutes />
      <Footer />
    </Router>
  </Provider>
);

export default App;

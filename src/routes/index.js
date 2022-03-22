import React from 'react';
import { Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from '../pages/Home';
import About from '../pages/About';
import Clinic from '../pages/Clinic';
import Treatments from '../pages/Treatments';
import Contact from '../pages/Contact';
import { CustomRoute } from './CustomRoute';

export const history = createBrowserHistory();

export const PublicRoutes = () => (
  <Switch>
    <CustomRoute
      exact
      path="/home"
      render={Home}
      title="Francini Pereira - Biomedicina Estética"
      content="Desrição da Home"
    />
    <CustomRoute
      exact
      path="/sobre"
      render={About}
      title="Sobre a Dra Francini Pereira"
      content="Desrição Sobre"
    />
    <CustomRoute
      exact
      path="/clinica"
      render={Clinic}
      title="Sobre a Clínica"
      content="Desrição da Clinica"
    />
    <CustomRoute
      exact
      path="/tratamentos/:treatment"
      render={props => <Treatments {...props} />}
      title="Tratamentos"
      content="Desrição da Tratamentos"
    />
    <CustomRoute
      exact
      path="/contato"
      render={props => <Contact {...props} />}
      title="Contato"
      content="Desrição da Contato"
    />
    <CustomRoute
      path="/"
      component={Home}
      title="Francini Pereira - Biomedicina Estética"
      content="Teste para SEO"
    />
  </Switch>
);

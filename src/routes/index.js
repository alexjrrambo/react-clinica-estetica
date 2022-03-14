import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from '../pages/Home';
import About from '../pages/About';
import Clinic from '../pages/Clinic';
import Treatments from '../pages/Treatments';
import Contact from '../pages/Contact';

export const history = createBrowserHistory();

export const PublicRoutes = () => (
  <Switch>
    <Route
      exact
      path="/home"
      render={Home}
    />
    <Route
      exact
      path="/sobre"
      render={About}
    />
    <Route
      exact
      path="/clinica"
      render={Clinic}
    />
    <Route
      exact
      path="/tratamentos/:treatment"
      render={props => <Treatments {...props} />}
    />
    <Route
      exact
      path="/contato"
      render={props => <Contact {...props} />}
    />
    <Route path="/" component={Home} />
  </Switch>
);

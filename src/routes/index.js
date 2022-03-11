import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';
import Home from '../pages/Home';
import About from '../pages/About';

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
    <Route path="/" component={Home} />
  </Switch>
);

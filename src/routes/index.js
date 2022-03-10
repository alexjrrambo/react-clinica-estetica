import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';
import HomeSite from '../pages/Site/Home';

export const history = createBrowserHistory();

export const PublicRoutes = () => (
  <Switch>
    <Route
      exact
      path="/home"
      render={HomeSite}
    />
    <Route path="/" component={HomeSite} />
  </Switch>
);

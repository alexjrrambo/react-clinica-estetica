import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = props => (localStorage.getItem('user') ? (
  <Route {...props} />
) : (
  <Redirect to="/login" />
));

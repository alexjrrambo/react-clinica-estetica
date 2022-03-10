import React from 'react';
import PropTypes from 'prop-types';

import { LinkRedirect, NavLinkConent } from './styles';

const NavLink = ({ redirect, label }) => (
  <NavLinkConent>
    <LinkRedirect to={redirect}>{label}</LinkRedirect>
  </NavLinkConent>
);

NavLink.propTypes = {
  redirect: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavLink;

import React from 'react';
import PropTypes from 'prop-types';

import { Title } from './styles';

const NavTitle = ({ title, Icon }) => (
  <Title>
    <Icon size={2} />
    <span>{title}</span>
  </Title>
);

NavTitle.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
};

export default NavTitle;

import React from 'react';
import PropTypes from 'prop-types';

import { IconContent } from './styles';

const MaterialIcon = ({ Icon, hexColor, ...props }) => (
  <IconContent hexColor={hexColor}>
    <Icon {...props} />
  </IconContent>
);

MaterialIcon.propTypes = {
  Icon: PropTypes.instanceOf(Object).isRequired,
  hexColor: PropTypes.string.isRequired,
};

export default MaterialIcon;

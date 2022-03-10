import React from 'react';
import PropTypes from 'prop-types';

import { LabelContent } from './styles';

const Label = ({ label, text }) => (
  <LabelContent>
    <label>{label}</label>
    <span>{text}</span>
  </LabelContent>
);

Label.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Label;

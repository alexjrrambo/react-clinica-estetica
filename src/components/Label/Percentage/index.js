import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

export function PercentageLabel(props) {
  const { value, ...other } = props;

  return (
    <NumberFormat
      {...other}
      value={value}
      displayType="text"
      decimalSeparator=","
      decimalScale={2}
      fixedDecimalScale
      isNumericString
      suffix="%"
    />
  );
}

PercentageLabel.propTypes = {
  value: PropTypes.string.isRequired,
};

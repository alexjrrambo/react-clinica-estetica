import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';

export function CurrencyLabel(props) {
  const { currencyType } = useSelector(state => state.user.data);
  const { value, ...other } = props;

  return (
    <NumberFormat
      {...other}
      value={value}
      displayType="text"
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={2}
      fixedDecimalScale
      isNumericString
      prefix={currencyType}
    />
  );
}

CurrencyLabel.propTypes = {
  value: PropTypes.string.isRequired,
};

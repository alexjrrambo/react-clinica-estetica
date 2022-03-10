import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';

export function CurrencyMask(props) {
  const { currencyType } = useSelector(state => state.user.data);
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.value || 0,
          },
        });
      }}
      thousandSeparator="."
      decimalSeparator=","
      isNumericString
      prefix={currencyType}
      defaultValue="0"
      onClick={event => event.target.select()}
    />
  );
}

CurrencyMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

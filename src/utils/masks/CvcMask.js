import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

export function CvcMask(props) {
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
      isNumericString
      format="###"
    />
  );
}

CvcMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

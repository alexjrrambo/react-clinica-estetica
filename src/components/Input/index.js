import React from 'react';
import PropTypes from 'prop-types';
import 'flatpickr/dist/themes/light.css';
import { Portuguese } from 'flatpickr/dist/l10n/pt';

import { Content, Input, InputDate } from './styles';

export const InputText = ({ label, ...props }) => (
  <Content>
    {label && <span>{label}</span>}
    <Input {...props} />
  </Content>
);

InputText.propTypes = {
  label: PropTypes.string,
};

InputText.defaultProps = {
  label: undefined,
};

export const InputDatePicker = ({ label, ...props }) => (
  <Content>
    {label && <span>{label}</span>}
    <InputDate
      options={{
        dateFormat: 'd/m/Y',
        locale: Portuguese,
      }}
      {...props}
    />
  </Content>
);

InputDatePicker.propTypes = {
  label: PropTypes.string,
};

InputDatePicker.defaultProps = {
  label: undefined,
};

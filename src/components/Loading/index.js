import React from 'react';
import PropTypes from 'prop-types';

import LoadingIcon from '../../assets/loading.svg';
import { SpinnerIcon } from '../Icons/FontAwsome';
import { Spinner } from './styles';

const defaultSize = 1;

const Loading = ({ size }) => (
  <Spinner src={LoadingIcon} alt="Carregando">
    <SpinnerIcon size={size || defaultSize} />
  </Spinner>
);

Loading.propTypes = {
  size: PropTypes.number.isRequired,
};

export default Loading;

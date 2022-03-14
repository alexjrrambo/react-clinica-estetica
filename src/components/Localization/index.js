import { Tooltip } from '@material-ui/core';
import React from 'react';

import LocalizationImage from '../../assets/localization.png';
import {
  LocalizationContainer,
  LocalizationContent,
} from './styles';

const Localization = () => {
  console.log('Localization');

  return (
    <LocalizationContainer>
      <LocalizationContent>
        <h4>Localização</h4>
        <span>Rua Sete de Setembro, nº 434, Centro, Sapiranga - RS <br />Centro Comercial e Residencial Vitale</span>
        <Tooltip title="Abrir no Google Maps">
          <button type="button" onClick={() => window.open('https://www.google.com.br/maps/place/R.+Sete+de+Setembro,+434+-+Centro,+Sapiranga+-+RS,+93800-244/@-29.6402445,-51.0081269,17.25z/data=!4m5!3m4!1s0x95193f65285678ff:0x8d92f69d63b0823b!8m2!3d-29.6403202!4d-51.0062202', '_blank')}>
            <img src={LocalizationImage} alt="" />
          </button>
        </Tooltip>
      </LocalizationContent>
    </LocalizationContainer>
  );
};

export default Localization;

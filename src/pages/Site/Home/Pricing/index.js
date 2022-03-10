import { Button } from '@material-ui/core';
import React from 'react';

import PriceModal from '../../../../components/Modal/PriceModal';
import {
  PricingConatiner,
  PricingContent,
} from './styles';

const Pricing = () => (
  <PricingConatiner id="pricing">
    <h2>Preços</h2>
    <PricingContent>
      <div>
        <span>Preço da assinatura</span>
        <label>R$ 5,99/mês</label>
        <p>ou</p>
        <label>R$ 60,00/ano</label>
        <p>Com todas as funcionalidades inclusas</p>
        <PriceModal />
      </div>
      <div>
        <span>Conta de demonstração</span>
        <p>Acesse nossa conta de demonstração, nela você pode navegar nossa plataforma e visualizar todas as funcionalidades.</p>
        <Button variant="contained" color="primary">
          Acessar conta demo
        </Button>
      </div>
    </PricingContent>
  </PricingConatiner>
);

export default Pricing;

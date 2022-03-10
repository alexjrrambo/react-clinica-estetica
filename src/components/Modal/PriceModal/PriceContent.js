import React from 'react';
// import PropTypes from 'prop-types';
import {
  Button,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';
import { Content } from './styles';

export default function PriceContent() {
  return (
    <DialogContent>
      <DialogContentText>
        Escolha como você deseja realizar o pagamento da sua assinatura (válida por 12 meses).
      </DialogContentText>
      <Content>
        <Button
          variant="contained"
          size="large"
          color="primary"
        >
          Clique aqui para assinar por 5,99/mês
        </Button>
        ou
        <Button
          variant="contained"
          size="large"
          color="primary"
        >
          Clique aqui para assinar por 60,00/ano
        </Button>
      </Content>
    </DialogContent>
  );
}

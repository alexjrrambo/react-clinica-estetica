import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';

import logoBlack from '../../../assets/logoBlack.png';
import CreditCard from './CreditCard';
import {
  AnualPlan,
  CheckoutContent,
  Container,
  Content,
  Info,
  PriceInfo,
  PriceInfosContent,
  Product,
} from './styles';

export default function PaymentModal() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth
      >
        <DialogTitle id="form-dialog-title">Assinatura anual do GERENCIFY</DialogTitle>
        <DialogContent>
          <Container>
            <Content>
              <Product>
                <img src={logoBlack} alt="Logo Gerencify" />
                <span>Plano anual para acesso a plataforma</span>
              </Product>
              <Info>
                <DialogContentText>
                  Cansado de usar planilhas excel para gerenciar seu operacional?
                  Aqui você centraliza suas operacoes em um único lugar, podendo acessá-las de qualquer lugar.
                  Realize seu gerenciamento de risco, acesse totalizadores gráficos referentes aos seus lucros,
                  estratégias e muito mais.
                </DialogContentText>
              </Info>
              <AnualPlan>
                Contrate o plano anual
                <DialogContentText>
                  Em até 12x de R$ 5,99 ou R$ 60,00 à vista (com desconto)
                </DialogContentText>
              </AnualPlan>
              <PriceInfosContent>
                <span>Resumo da compra</span>
                <PriceInfo>
                  <label>Plano anual - GERENCIFY</label>
                  <span>R$ 5,99/mês ou R$ 60,00/ano</span>
                </PriceInfo>
                <PriceInfo>
                  <label>(-) Descontos</label>
                  <span>R$ 0,00</span>
                </PriceInfo>
                <PriceInfo>
                  <TextField
                    name="cupom"
                    label="Cupom de desconto"
                    fullWidth
                  />
                  <Button
                    variant="contained"
                    color="primary"
                  >
                    Aplicar
                  </Button>
                </PriceInfo>
              </PriceInfosContent>
            </Content>
            <Content>
              <CheckoutContent>
                <CreditCard />
              </CheckoutContent>
            </Content>
          </Container>
        </DialogContent>
      </Dialog>
    </>
  );
}

import React from 'react';

import { Container } from './styles';

export const IconButton = ({ Icon, text, onClick }) => (
  <Container onClick={onClick}>
    <Icon />
    <span>{text}</span>
  </Container>
);

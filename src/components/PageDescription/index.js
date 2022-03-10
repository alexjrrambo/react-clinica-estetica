import React from 'react';
import { DialogContentText, Typography } from '@material-ui/core';

import { Container } from './styles';

const PageDescription = ({ title, description }) => (
  <Container>
    <Typography component="h1">{title}</Typography>
    <DialogContentText>
      {description}
    </DialogContentText>
  </Container>
);

export default PageDescription;

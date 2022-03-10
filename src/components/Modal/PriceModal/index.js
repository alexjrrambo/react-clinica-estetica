import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
} from '@material-ui/core';
import PriceContent from './PriceContent';

export default function PriceModal() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        color="primary"
      >
        Assinar
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Pagamento de assinatura</DialogTitle>
        <PriceContent />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

// PriceModal.propTypes = {
//   capitalData: PropTypes.shape({
//     capitalDate: PropTypes.any,
//   }).isRequired,
//   reloadCallback: PropTypes.func.isRequired,
// };

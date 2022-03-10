import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { createCapital, updateCapital } from '../../../services/capital';
import { CurrencyMask } from '../../../utils/masks/CurrencyMask';
import { NumberMask } from '../../../utils/masks/NumberMask';
import { IconButton } from '../../Button/IconButton';

const initialCapitalForm = {
  capitalDate: null,
  investmentOperation: '',
  initialBank: '',
  goal: '',
  stopLoss: '',
};

export default function CapitalModal({ capitalData, reloadCallback }) {
  const [open, setOpen] = useState(false);
  const [capitalForm, setCapitalForm] = useState(initialCapitalForm);

  useEffect(() => {
    setCapitalForm(capitalData);
  }, [capitalData, open]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setCapitalForm(initialCapitalForm);
    setOpen(false);
  };

  const handleCapitalFormState = (fieldName, value) => {
    const newCapitalForm = { ...capitalForm, [fieldName]: value };
    setCapitalForm(newCapitalForm);
  };

  const handleSubmit = async () => {
    const capitalObject = {
      ...capitalForm,
      capitalDate: capitalData.capitalDate,
    };

    try {
      const saveCapital = capitalForm._id ? updateCapital : createCapital;

      await saveCapital(capitalObject);
    } catch (error) {
      setOpen(false);
    }

    reloadCallback();
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        Icon={Edit}
        onClick={handleClickOpen}
        text="Editar operacional"
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Gestão de capital e operacional</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Informe os detalhes de qual será seu gerenciamento de risco,
            valor das suas entradas, meta, stop loss e também qual sua banca inicial no mês em questão.
            A sua banca final será atualizada automaticamente de acordo com suas operações.
          </DialogContentText>
          <TextField
            value={capitalForm.investmentOperation}
            onChange={e => handleCapitalFormState('investmentOperation', e.target.value)}
            autoFocus
            margin="dense"
            id="entrada"
            name="entrada"
            label="Valor entradas"
            fullWidth
            InputProps={{
              inputComponent: CurrencyMask,
            }}
          />
          <TextField
            value={capitalForm.initialBank}
            onChange={e => handleCapitalFormState('initialBank', e.target.value)}
            margin="dense"
            id="banca-incial"
            name="banca-incial"
            label="Banca incial"
            fullWidth
            InputProps={{
              inputComponent: CurrencyMask,
            }}
          />
          <TextField
            value={capitalForm.goal}
            onChange={e => handleCapitalFormState('goal', e.target.value)}
            margin="dense"
            id="meta"
            name="meta"
            label="Meta (%)"
            fullWidth
            InputProps={{
              inputComponent: NumberMask,
            }}
          />
          <TextField
            value={capitalForm.stopLoss}
            onChange={e => handleCapitalFormState('stopLoss', e.target.value)}
            margin="dense"
            id="stop-loss"
            name="stop-loss"
            label="Stop loss (%)"
            fullWidth
            InputProps={{
              inputComponent: NumberMask,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

CapitalModal.propTypes = {
  capitalData: PropTypes.shape({
    capitalDate: PropTypes.any,
  }).isRequired,
  reloadCallback: PropTypes.func.isRequired,
};

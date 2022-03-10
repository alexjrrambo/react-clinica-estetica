import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tab,
  Tabs,
  TextField,
} from '@material-ui/core';
import {
  AddCircleOutline, Cancel, CheckCircle, Delete, Edit,
} from '@material-ui/icons';
import { Autocomplete } from '@material-ui/lab';
import { CurrencyMask } from '../../../utils/masks/CurrencyMask';
import { NumberMask } from '../../../utils/masks/NumberMask';
import { createOperation, deleteDetailedOperation, updateOperation } from '../../../services/operation';
import MaterialIcon from '../../MaterialIcon';
import {
  AddContent,
  AddedDetailedOperation,
  Container,
  DetailedOperationsCard,
  NewDetailedOperation,
  TextFieldOperation,
} from './styles';
import Label from '../../Label';
import TabPanel from '../../TabPanel';
import assets from './assets';
import { IconButton } from '../../Button/IconButton';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const initialOperationForm = {
  operationDate: null,
  operational: 0,
  wins: 0,
  losses: 0,
  profit: 0,
  detailedOperations: [],
};

const initialDetailedOperationForm = {
  asset: '',
  detailedProfit: '',
  detailedOperational: '',
};

export default function OperationModal({ operationData, reloadCallback }) {
  const [open, setOpen] = useState(false);
  const [operationForm, setOperationForm] = useState(initialOperationForm);
  const [detailedOperationForm, setDetailedOperationForm] = useState(initialDetailedOperationForm);
  const [tabValue, setTabValue] = useState(0);
  const [newOperation, setNewOperation] = useState(false);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
    setNewOperation(false);
  };

  useEffect(() => {
    setOperationForm(operationData);
    setTabValue(operationForm.detailedOperations?.length > 0 ? 0 : 1);
  }, [operationData, open]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOperationForm(initialOperationForm);
    setDetailedOperationForm(initialDetailedOperationForm);
    setOpen(false);
    reloadCallback();
  };

  const handleOpenNewOperation = () => {
    setNewOperation(true);
  };

  const handleCloseNewOperation = () => {
    setNewOperation(false);
  };

  const handleOperationFormState = (fieldName, value) => {
    const newOperationForm = { ...operationForm, [fieldName]: value };
    setOperationForm(newOperationForm);
  };

  const handleDetailedOperationFormState = (fieldName, value) => {
    const newOperationForm = { ...detailedOperationForm, [fieldName]: value };
    setDetailedOperationForm(newOperationForm);
  };

  const saveOperationForm = async newOperationFormState => {
    try {
      const saveOperation = operationForm._id ? updateOperation : createOperation;

      const responseUpdate = await saveOperation(newOperationFormState);

      setOperationForm(responseUpdate);
    } catch (error) {
      console.log('errooooooo');
    }
  };

  const handleSubmit = async () => {
    const operationObject = {
      ...operationForm,
      operationDate: operationData.operationDate,
    };

    await saveOperationForm(operationObject);

    reloadCallback();
    setOpen(false);
  };

  const sumProfit = useMemo(() => (operationForm.detailedOperations
    ? operationForm.detailedOperations
      .map(operation => operation.detailedProfit || 0)
      .reduce((prev, curr) => parseFloat(prev) + parseFloat(curr), 0)
    : 0), [operationForm]);

  const sumWins = useMemo(() => (operationForm.detailedOperations
    ? operationForm.detailedOperations
      .map(operation => ((operation.detailedProfit || 0) > 0 ? 1 : 0))
      .reduce((prev, curr) => prev + curr, 0)
    : 0), [operationForm]);

  const sumLosses = useMemo(() => (operationForm.detailedOperations
    ? operationForm.detailedOperations
      .map(operation => ((operation.detailedProfit || 0) > 0 ? 0 : 1))
      .reduce((prev, curr) => prev + curr, 0)
    : 0), [operationForm]);

  const handleDetailedOperationDelete = async ({ _id: deletedId, detailedProfit }) => {
    let { detailedOperations = [] } = operationForm;

    try {
      await deleteDetailedOperation(operationForm._id, deletedId);

      // removendo operacao do array
      detailedOperations = detailedOperations
        .filter(operation => operation._id !== deletedId);

      const newOperationForm = {
        ...operationForm,
        operational: '',
        wins: sumWins - (detailedProfit > 0 ? 1 : 0),
        losses: sumLosses - (detailedProfit > 0 ? 0 : 1),
        profit: parseFloat(sumProfit) - parseFloat(detailedProfit),
        operationDate: operationData.operationDate,
        detailedOperations,
      };

      await saveOperationForm(newOperationForm);
    } catch (error) {
      console.log('errro maldito');
    }
  };

  const handleDetailedOperationSubmit = async () => {
    const { detailedOperations = [] } = operationForm;
    const { asset, detailedProfit, detailedOperational } = detailedOperationForm;

    const newOperationFormState = {
      ...operationForm,
      operational: '',
      wins: sumWins + (detailedProfit > 0 ? 1 : 0),
      losses: sumLosses + (detailedProfit > 0 ? 0 : 1),
      profit: parseFloat(sumProfit) + parseFloat(detailedProfit),
      operationDate: operationData.operationDate,
      detailedOperations: [
        ...detailedOperations,
        {
          asset,
          detailedProfit,
          detailedOperational,
        },
      ],
    };

    await saveOperationForm(newOperationFormState);
    setDetailedOperationForm(initialDetailedOperationForm);
  };

  const ModalIcon = operationForm._id ? Edit : AddCircleOutline;
  const detailedOperationalString = () => {
    let operationalArray = operationForm.detailedOperations.map(operation => operation.detailedOperational);
    operationalArray = [...new Set(operationalArray)];

    return operationalArray.join(', ');
  };

  return (
    <Container>
      <IconButton
        Icon={ModalIcon}
        onClick={handleClickOpen}
        text={operationForm._id ? 'Editar operações' : 'Adicionar operações'}
      />
      <Dialog
        open={open} onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {`${operationForm._id ? 'Editar' : 'Adicionar'} operações`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Informe os detalhes de suas operações diárias, em caso de perda insira um menos (-) no campo Lucro.
            Sua banca será atualizada automaticamente.
          </DialogContentText>
          <AppBar position="static">
            <Tabs
              value={tabValue} onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Detalhada" {...a11yProps(0)} />
              <Tab label="Resumida" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={tabValue} index={0}>
            {newOperation ? (
              <NewDetailedOperation>
                <Autocomplete
                  id="asset"
                  onInputChange={(event, newInputValue) => {
                    handleDetailedOperationFormState('asset', newInputValue);
                  }}
                  inputValue={detailedOperationForm.asset}
                  freeSolo
                  options={assets.map(option => option)}
                  style={{ width: 250 }}
                  renderInput={params => (
                    <TextFieldOperation
                      {...params}
                      required
                      name="asset"
                      label="Ativo"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
                <TextFieldOperation
                  value={detailedOperationForm.detailedOperational}
                  onChange={e => handleDetailedOperationFormState('detailedOperational', e.target.value)}
                  required
                  id="detailedOperational"
                  name="detailedOperational"
                  label="Estratégia"
                  variant="outlined"
                  size="small"
                />
                <TextFieldOperation
                  value={detailedOperationForm.detailedProfit}
                  onChange={e => handleDetailedOperationFormState('detailedProfit', e.target.value)}
                  required
                  id="detailedProfit"
                  name="detailedProfit"
                  label="Lucro"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    inputComponent: CurrencyMask,
                  }}
                />
                <div>
                  <MaterialIcon
                    onClick={handleCloseNewOperation}
                    Icon={Cancel}
                    hexColor="#DB4931"
                  />
                  <MaterialIcon
                    onClick={handleDetailedOperationSubmit}
                    Icon={CheckCircle}
                    hexColor="#2CAC40"
                  />
                </div>
              </NewDetailedOperation>
            ) : (
              <DetailedOperationsCard>
                <AddContent>
                  <AddCircleOutline onClick={handleOpenNewOperation} />
                </AddContent>
              </DetailedOperationsCard>
            ) }
            {operationForm.detailedOperations?.map((operation, index) => (
              <AddedDetailedOperation key={index}>
                <Label label="Ativo" text={operation.asset} />
                <Label label="Estratégia" text={operation.detailedOperational} />
                <Label label="Lucro" text={operation.detailedProfit} />
                <MaterialIcon
                  onClick={() => handleDetailedOperationDelete(operation)}
                  Icon={Delete}
                  hexColor="#0077cc"
                />
              </AddedDetailedOperation>
            ))}

          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <TextField
              value={operationForm.detailedOperations?.length > 0 ? detailedOperationalString() : operationForm.operational}
              onChange={e => handleOperationFormState('operational', e.target.value)}
              autoFocus
              margin="dense"
              id="operacional"
              label="Estratégia"
              fullWidth
              disabled={operationForm.detailedOperations?.length > 0}
            />
            <TextField
              value={operationForm.wins}
              onChange={e => handleOperationFormState('wins', e.target.value)}
              margin="dense"
              id="wins"
              name="wins"
              label="Vitórias"
              fullWidth
              disabled={operationForm.detailedOperations?.length > 0}
              InputProps={{
                inputComponent: NumberMask,
              }}
            />
            <TextField
              value={operationForm.losses}
              onChange={e => handleOperationFormState('losses', e.target.value)}
              margin="dense"
              id="losses"
              name="losses"
              label="Derrotas"
              fullWidth
              disabled={operationForm.detailedOperations?.length > 0}
              InputProps={{
                inputComponent: NumberMask,
              }}
            />
            <TextField
              value={operationForm.profit}
              onChange={e => handleOperationFormState('profit', e.target.value)}
              margin="dense"
              id="lucro"
              name="lucro"
              label="Lucro"
              fullWidth
              disabled={operationForm.detailedOperations?.length > 0}
              InputProps={{
                inputComponent: CurrencyMask,
              }}
            />
          </TabPanel>
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
    </Container>
  );
}

OperationModal.propTypes = {
  operationData: PropTypes.shape({
    operationDate: PropTypes.instanceOf(Date),
  }).isRequired,
  reloadCallback: PropTypes.func.isRequired,
};

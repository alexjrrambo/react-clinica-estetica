import {
  Button,
  Chip,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showToast } from '../../../Toast';
import { createUser } from '../../../../services/user';
import { Actions as SessionActions } from '../../../../store/actions/session';

const interestsArray = [
  'Forex',
  'Day trade',
  'Opcoes binárias',
  'Robôs',
];

const defaultFormState = {
  name: '',
  interests: [],
  email: '',
  currencyType: '',
  password: '',
};

const RegisterForm = ({ callback }) => {
  const dispatch = useDispatch();
  const [userForm, setUserForm] = useState(defaultFormState);

  const handleChange = event => {
    setUserForm({ ...userForm, interests: event.target.value });
  };

  const handleCapitalFormState = (fieldName, value) => {
    const newUser = { ...userForm, [fieldName]: value };
    setUserForm(newUser);
  };

  const handleSubmit = async () => {
    if (!userForm.name || !userForm.email || !userForm.password) {
      showToast('Campos obritatórios devem ser preenchidos', 'error', true);
      return;
    }
    try {
      await createUser(userForm);
      callback();
      dispatch(SessionActions.loginUserRequest(userForm.email, userForm.password, false));
      showToast('Cadastro atualizado com sucesso', 'success', true);
    } catch (error) {
      showToast('Ocorreu algum erro, por favor, tente novamente', 'error', true);
    }
  };

  return (
    <>
      <TextField
        value={userForm.name}
        onChange={e => handleCapitalFormState('name', e.target.value)}
        autoFocus
        margin="dense"
        id="name"
        name="name"
        label="Nome completo"
        fullWidth
        helperText="Campo obrigatório"
      />
      <TextField
        value={userForm.email}
        onChange={e => handleCapitalFormState('email', e.target.value)}
        margin="dense"
        type="email"
        id="email"
        name="email"
        label="E-mail"
        fullWidth
        helperText="Campo obrigatório"
      />
      <TextField
        value={userForm.password}
        onChange={e => handleCapitalFormState('password', e.target.value)}
        margin="dense"
        type="password"
        id="password"
        name="password"
        label="Senha"
        fullWidth
        helperText="Campo obrigatório"
      />
      <InputLabel id="mutiple-label">Moeda das suas operações</InputLabel>
      <Select
        value={userForm.currencyType}
        onChange={e => handleCapitalFormState('currencyType', e.target.value)}
      >
        <MenuItem value="R$">Real (R$)</MenuItem>
        <MenuItem value="$">Dólar ($)</MenuItem>
      </Select>

      <InputLabel id="mutiple-label">Seus interesses</InputLabel>
      <Select
        labelId="mutiple-label"
        id="mutiple-chip"
        multiple
        value={userForm.interests}
        onChange={handleChange}
        input={<Input id="select-multiple" />}
        renderValue={selected => (
          <div>
            {selected.map(value => (
              <Chip
                key={value}
                label={value}
              />
            ))}
          </div>
        )}
      >
        {interestsArray.map(name => (
          <MenuItem
            key={name} value={name}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Criar Conta
        </Button>
      </div>
    </>
  );
};

export default RegisterForm;

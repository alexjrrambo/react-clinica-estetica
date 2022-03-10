/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import {
  Button, FormControl, InputLabel, MenuItem, Select, TextField,
} from '@material-ui/core';
import React, { useMemo, useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Container, ReducedCreditCard } from './styles';
import MaterialIcon from '../../../MaterialIcon';
import states from '../../../../assets/json/estados.json';
import { getCepAddress } from '../../../../services/api';
import { CreditCardMask } from '../../../../utils/masks/CreditCardMask';
import { ExpDateMask } from '../../../../utils/masks/ExpDateMask';
import { CvcMask } from '../../../../utils/masks/CvcMask';
import { CpfMask } from '../../../../utils/masks/CpfMask';
import { DateMask } from '../../../../utils/masks/DateMask';
import { CepMask } from '../../../../utils/masks/CepMask';
import { NumberMask } from '../../../../utils/masks/NumberMask';

const PaymentForm = () => {
  const [state, setState] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
    birthDate: '',
    cpf: '',
    street: '',
    streetNumber: '',
    district: '',
    city: '',
    state: '',
    cep: '',
  });
  const [creditCardAdded, setCreditCardAdded] = useState(false);
  // const [encryptedCard, setEncryptedCard] = useState('');

  const handleInputFocus = e => {
    setState({ ...state, focus: e.target.name });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleAddCreditCard = () => {
    setCreditCardAdded(true);
  };

  const handleCepAddress = async () => {
    if (state.cep) {
      const {
        logradouro, bairro, localidade, uf,
      } = await getCepAddress(state.cep.replace('-', ''));

      const newAdrress = {
        ...state,
        street: logradouro,
        district: bairro,
        city: localidade,
        state: uf,
      };

      setState({ ...newAdrress });
    }
  };

  const arrayCity = useMemo(() => {
    if (state.state) {
      return require(`../../../../assets/json/cidades/${state.state}.json`);
    }

    return null;
  }, [state.state]);

  // const handleEncryptCard = () => {
  //   const { number, cvc, expiry } = state;

  //   // eslint-disable-next-line no-undef
  //   const cc = new Moip.CreditCard({
  //     number,
  //     cvc,
  //     expMonth: expiry,
  //     expYear: expiry,
  //     pubKey: 'sdsfdsf',
  //   });
  //   console.log(cc);
  //   if (cc.isValid()) {
  //     setEncryptedCard(cc.hash());
  //   } else {
  //     setEncryptedCard('');
  //     alert('Invalid credit card. Verify parameters: number, cvc, expiration Month, expiration Year');
  //   }
  // };

  return (
    <Container id="PaymentForm">
      {/* <script type="text/javascript" src="//assets.moip.com.br/v2/moip.min.js" /> */}
      {creditCardAdded ? (
        <>
          <ReducedCreditCard onClick={() => setCreditCardAdded(false)}>
            <span>Cartão **** **** **** 4543</span>
            <MaterialIcon
              Icon={CheckCircleIcon}
              hexColor="#2CAC40"
            />
          </ReducedCreditCard>
          <form>
            <h2>Informacoes para cobranca</h2>
            <div>
              <TextField
                onChange={handleInputChange}
                margin="dense"
                name="birthDate"
                label="Data de nascimento"
                fullWidth
                InputProps={{
                  inputComponent: DateMask,
                }}
              />
              <TextField
                onChange={handleInputChange}
                margin="dense"
                name="cpf"
                label="CPF"
                fullWidth
                InputProps={{
                  inputComponent: CpfMask,
                }}
              />
            </div>
            <div>
              <TextField
                onChange={handleInputChange}
                margin="dense"
                name="cep"
                label="CEP"
                fullWidth
                onBlur={handleCepAddress}
                InputProps={{
                  inputComponent: CepMask,
                }}
              />
              <FormControl
                margin="dense"
                fullWidth
              >
                <InputLabel id="state">Estado</InputLabel>
                <Select
                  labelId="state"
                  id="state-select"
                  value={state.state}
                  name="state"
                  onChange={handleInputChange}
                >
                  {states.estados.map(stateItem => <MenuItem key={stateItem.id} value={stateItem.id}>{stateItem.estado}</MenuItem>)}
                </Select>
              </FormControl>
              <FormControl
                margin="dense"
                fullWidth
              >
                <InputLabel id="city">Cidade</InputLabel>
                <Select
                  labelId="city"
                  id="city-select"
                  value={state.city}
                  name="city"
                  onChange={handleInputChange}
                >
                  {arrayCity?.cidades.map(cityItem => <MenuItem key={cityItem.cidade} value={cityItem.cidade}>{cityItem.cidade}</MenuItem>)}
                </Select>
              </FormControl>
            </div>
            <div>
              <TextField
                value={state.street}
                onChange={handleInputChange}
                margin="dense"
                name="street"
                label="Rua"
                fullWidth
              />
              <TextField
                value={state.streetNumber}
                onChange={handleInputChange}
                margin="dense"
                name="streetNumber"
                label="Número"
                fullWidth
                InputProps={{
                  inputComponent: NumberMask,
                }}
              />
              <TextField
                value={state.district}
                onChange={handleInputChange}
                margin="dense"
                name="district"
                label="Bairro"
                fullWidth
              />
            </div>
          </form>
          <h2>Forma de pagamento</h2>
          <TextField
            onChange={handleInputChange}
            margin="dense"
            name="district"
            label="Forma de pagamento"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
          >
            Finalizar compra
          </Button>
        </>
      ) : (
        <>
          <Cards
            cvc={state.cvc}
            expiry={state.expiry}
            focused={state.focus}
            name={state.name}
            number={state.number}
          />
          <form>
            <TextField
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              margin="dense"
              name="number"
              label="Número do cartão"
              fullWidth
              autoComplete="off"
              InputProps={{
                inputComponent: CreditCardMask,
              }}
            />
            <TextField
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              margin="dense"
              name="name"
              label="Nome completo"
              fullWidth
            />
            <div>
              <TextField
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                margin="dense"
                name="expiry"
                label="Data de expiração"
                fullWidth
                InputProps={{
                  inputComponent: ExpDateMask,
                }}
              />
              <TextField
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                margin="dense"
                name="cvc"
                label="Código de segurança"
                fullWidth
                InputProps={{
                  inputComponent: CvcMask,
                }}
              />
            </div>
          </form>
          <Button
            onClick={handleAddCreditCard}
            variant="contained"
            color="primary"
          >
            Adicionar
          </Button>
        </>
      )}
    </Container>
  );
};

export default PaymentForm;

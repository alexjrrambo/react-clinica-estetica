/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Content, RegisterText } from './styles';
import Loading from '../../Loading';
import { Actions as SessionActions } from '../../../store/actions/session';
import RegisterModal from '../RegisterModal';

export default function LoginModal({ Component }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { loading } = useSelector(state => state.session);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    dispatch(SessionActions.loginUserRequest(email, password));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div onClick={handleClickOpen}>
        {Component}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Entrar no GERENCIFY</DialogTitle>
        <DialogContent>
          <Content>
            <TextField
              value={email}
              onChange={e => setEmail(e.target.value)}
              margin="dense"
              type="email"
              id="email"
              name="email"
              label="E-mail"
              fullWidth
            />
            <TextField
              value={password}
              onChange={e => setPassword(e.target.value)}
              margin="dense"
              type="password"
              id="password"
              name="password"
              label="Senha"
              fullWidth
            />
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                {loading ? <Loading /> : 'Entrar'}
              </Button>
            </div>
            <RegisterModal
              Component={(
                <RegisterText>
                  Você ainda não tem uma conta?
                  {' '}
                  <b>Cadastre-se</b>
                </RegisterText>
              )}
            />

          </Content>
        </DialogContent>
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

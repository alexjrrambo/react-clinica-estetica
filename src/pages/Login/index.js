import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Actions as SessionActions } from '../../store/actions/session';
import {
  Body, Container, Content, Footer, Header, Logo,
} from './styles';
import { ButtonFilled } from '../../components/Button';
import Loading from '../../components/Loading';
import { InputText } from '../../components/Input';

const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.session);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    dispatch(SessionActions.loginUserRequest(email, password));
  };

  return (
    <Container>
      <Logo>LOGO</Logo>
      <Content>
        <Header>
          <h2>Acessar painel</h2>
        </Header>
        <Body>
          <InputText
            placeholder="Digite seu e-mail"
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <InputText
            placeholder="Digite sua senha"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Body>
        <Footer>
          <ButtonFilled onClick={handleSubmit}>
            {loading ? <Loading /> : 'Entrar'}
          </ButtonFilled>
        </Footer>
      </Content>
    </Container>
  );
};

export default Login;

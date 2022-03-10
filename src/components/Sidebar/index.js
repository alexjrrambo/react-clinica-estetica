import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content, Nav } from './styles';
import NavTitle from './NavTitle';
import NavLink from './NavLink';
import { HomeIcon, OperationsIcon, PlotsIcon } from '../Icons/FontAwsome';

const Sidebar = ({ isExpanded, setIsExpanded }) => (
  <Container isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)}>
    <Content>
      <Nav>
        <NavTitle title="Navegação" Icon={HomeIcon} />
        <NavLink redirect="/dashboard/home" label="Página Inicial" />
        <NavLink redirect="/dashboard/my-account" label="Minha Conta" />
      </Nav>

      <Nav>
        <NavTitle title="Operações" Icon={OperationsIcon} />
        <NavLink redirect="/dashboard/risk-management" label="Gerenciar Operações" />
      </Nav>

      <Nav>
        <NavTitle title="Indicadores" Icon={PlotsIcon} />
        <NavLink redirect="/dashboard/charts" label="Gráficos" />
      </Nav>
    </Content>
  </Container>
);

Sidebar.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  setIsExpanded: PropTypes.func.isRequired,
};

export default Sidebar;

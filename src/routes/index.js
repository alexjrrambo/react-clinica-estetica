import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from '../pages/Home';
import About from '../pages/About';
import Clinic from '../pages/Clinic';
import Treatments from '../pages/Treatments';
import Contact from '../pages/Contact';
import { CustomRoute } from './CustomRoute';

export const history = createBrowserHistory();

export const PublicRoutes = () => (
  <Switch>
    <CustomRoute
      exact
      path="/home"
      render={Home}
      title="Francini Pereira - Biomedicina Estética"
      content="Clinica de estética avançada localizada em Sapiranga, especializada em procedimentos de harmonização facial e corporal, como toxina botulínica, preenchimentos e muito mais."
    />
    <CustomRoute
      exact
      path="/sobre"
      render={About}
      title="Sobre a Dra Francini Pereira"
      content="Biomédica com ênfase em Patologia Clínica, formada pela Universidade Feevale, Especialista em Biomedicina Estética pela ISEEC e Mestre em Virologia pela Universidade Feevale."
    />
    <CustomRoute
      exact
      path="/clinica"
      render={Clinic}
      title="Sobre a Clínica"
      content="Temos como missão realçar e evidenciar a beleza de cada paciente através de tratamentos eficazes realizados por profissionais éticos e altamente qualificados, com objetivo de promover a qualidade de vida, saúde e bem-estar de cada indivíduo."
    />
    <Route
      exact
      path="/tratamentos/:treatment"
      render={props => <Treatments {...props} />}
    />
    <CustomRoute
      exact
      path="/contato"
      render={props => <Contact {...props} />}
      title="Contato"
      content="Contatos e redes sociais"
    />
    <CustomRoute
      path="/"
      component={Home}
      title="Francini Pereira - Biomedicina Estética"
      content="Clinica de estética avançada localizada em Sapiranga, especializada em procedimentos de harmonização facial e corporal, como toxina botulínica, preenchimentos e muito mais."
    />
  </Switch>
);

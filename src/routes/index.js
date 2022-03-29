import React from 'react';
import { Switch } from 'react-router-dom';
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
      content="Nos dedicamos em prevenir e tratar as alterações estéticas do maior órgão do corpo humano, a pele, buscando amenizar e prevenir os sinais do tempo, além de transformar seu sonho em realidade."
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
    <CustomRoute
      exact
      path="/tratamentos/:treatment"
      render={props => <Treatments {...props} />}
      title="Tratamentos"
      content="Toxina botulínica, Melasmas e manchas, Flacidez, Rinomodelação, Preenchimento facial, Skinbooster, Celulites e estrias, Gordura localizada, Microvasos, Peeling químico, Lipo enzimática de papada, Rejuvenescimento de colo, Rejuvenescimento das mãos, Tratamento capilar"
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
      content="Nos dedicamos em prevenir e tratar as alterações estéticas do maior órgão do corpo humano, a pele, buscando amenizar e prevenir os sinais do tempo, além de transformar seu sonho em realidade."
    />
  </Switch>
);

import { Card } from '@material-ui/core';
import React from 'react';

import Gallery from '../../components/Gallery';
import ImagesArray from '../../utils/ImagesArray';
import {
  CardContentStyled,
  Container,
  Content,
  InstitutionalContent,
} from './styles';

const Clinic = () => {
  return (
    <Container>
      <Content>
        <h1>
          Francini Pereira Biomedicina Estética
        </h1>
        <InstitutionalContent>
          <Card>
            <CardContentStyled>
              <h4>Missão</h4>
              <span>Realçar e evidenciar a beleza de cada paciente através de tratamentos eficazes realizados por profissionais éticos e altamente qualificados, com objetivo de promover a qualidade de vida, saúde e bem-estar de cada indivíduo.</span>
            </CardContentStyled>
          </Card>
          <Card>
            <CardContentStyled>
              <h4>Visão</h4>
              <span>Ser uma clínica de biomedicina estética reconhecida por atender pacientes altamente satisfeitos com os resultados alcançados e o atendimento oferecido.</span>
            </CardContentStyled>
          </Card>
          <Card>
            <CardContentStyled>
              <h4>Valores</h4>
              <span>
                - Ética no atendimento e serviços prestados<br />
                - Responsabilidade com a saúde humana <br />
                - Qualificação profissional <br />
                - Humanização nos relacionamentos <br />
              </span>
            </CardContentStyled>
          </Card>
        </InstitutionalContent>
      </Content>
      <Gallery imagesData={ImagesArray} title="Estrutura" />
    </Container>
  );
};

export default Clinic;

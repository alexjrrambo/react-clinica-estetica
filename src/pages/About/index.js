import React from 'react';

import FranciniImage from '../../assets/dra-francini.png';
import {
  Avatar,
  ContentLeft, ContentRight, MainContainer, MainContent,
} from './styles';

const About = () => {
  return (
    <MainContainer>
      <MainContent>
        <ContentLeft>
          <Avatar src={FranciniImage} alt="" />
          <h1>Sobre a Dra Francini Pereira</h1>
          <h2>Formação</h2>
          <span>
            Bacharelado em Biomedicina - Patologia Clínica <br />
            Especialização em Biomedicina Estética <br />
            Mestrado em Virologia <br />
            Professora na área de saúde
          </span>
        </ContentLeft>
        <ContentRight>
          <h1>Experiência</h1>
          <p>
            Biomédica com ênfase em Patologia Clínica, formada pela Universidade Feevale, Especialista em Biomedicina Estética pela ISEEC e Mestre em Virologia pela
            Universidade Feevale, possui anos de experiência com estudos e pesquisa de doenças que afetam os seres humanos e os melhores métodos para resolução destas patologias. Além das titulações acadêmicas, a Dra Francini é a diretora executiva da Clínica de Biomedicina Estética Francini Pereira, onde atende seus pacientes empregando todo conhecimento adquirido, ouvindo com empatia suas queixas e realizando todos os tratamentos para alcançar os resultados tão esperados.
          </p>
        </ContentRight>
      </MainContent>
    </MainContainer>
  );
};

export default About;

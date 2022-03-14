import React from 'react';

import FranciniImage from '../../assets/dra-francini.png';
import { ContentLeft, ContentRight, MainContainer } from './styles';

const About = () => {
  console.log('Sobre');

  return (
    <MainContainer>
      <ContentLeft>
        <h1>Sobre a Dra Francini Pereira</h1>
        <span>
          Biomédica com ênfase em Patologia Clínica, formada pela Universidade Feevale, Especialista em Biomedicina Estética pela ISEEC e Mestre em Virologia pela
          Universidade Feevale, possui anos de experiência com estudos e pesquisa de doenças que afetam os seres humanos e os melhores métodos para resolução destas patologias. Além das titulações acadêmicas, a Dra Francini é a diretora executiva da Clínica de Biomedicina Estética Francini Pereira, onde atende seus pacientes empregando todo conhecimento adquirido, ouvindo com empatia suas queixas e realizando todos os tratamentos para alcançar os resultados tão esperados.
        </span>
      </ContentLeft>
      <ContentRight>
        <div className="image-wrapper">
          <span className="cut left" />
          <img src={FranciniImage} alt="" />
        </div>
      </ContentRight>
    </MainContainer>
  );
};

export default About;

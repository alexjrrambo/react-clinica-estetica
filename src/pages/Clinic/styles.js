import { CardContent } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.section`
  background: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 11rem 7rem 0 7rem;

  @media (max-width: 1250px) {
    //flex-direction: column;
  }
`;

export const CardContentStyled = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 2rem;

  h4 {
    margin-top: 0;
  }
`;

export const InstitutionalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 7rem 2rem 7rem;

  > div {
    margin-bottom: 2rem;
    width: 40rem;
  }

  span {
    text-align: center;
    margin-top: 0.5rem;
  }

  @media (max-width: 1250px) {
    //flex-direction: column;
  }
`;

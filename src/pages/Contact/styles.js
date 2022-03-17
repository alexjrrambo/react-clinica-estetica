import { CardContent } from '@material-ui/core';
import styled from 'styled-components';

export const MainContainer = styled.section`
  //min-height: calc(100vh - 12rem);
  margin: 9rem 5rem 0 5rem;

  @media (max-width: 1024px) {
    margin: 4rem 0 1rem 0;
  }
`;

export const Content = styled.section`
  display: flex;
  // justify-content: flex-start;

  > div {
    margin: 2rem;

    @media (max-width: 1024px) {
      margin: 0 0 1rem 0;
    }
  }

  h4 {
    margin-bottom: 1rem;
    text-align: center;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContentLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

export const ContentRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const CardContentStyled = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 20rem;

  * {
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    }

  > div {
    margin-top: 0.7rem;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  span {
    margin-left: 0.2rem;
  }
`;

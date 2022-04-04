import { CardContent } from '@material-ui/core';
import styled from 'styled-components';

export const MainContainer = styled.section`
  //min-height: calc(100vh - 12rem);
  margin: 11rem 5rem 0 5rem;

  h1 {
    margin: 0;
    font-size: 1.5rem;
    position: relative;
    font-weight: 300;
    -webkit-transition: all 0.4s ease 0s;
    -o-transition: all 0.4s ease 0s;
    transition: all 0.4s ease 0s;
    text-align:center;

    :before {
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 80px;
      height: 2px;
      content: "";
      background-color: #59593D;
      left:50%;
      margin-left:-40px;
    }
  }

  @media (max-width: 1024px) {
    margin: 6rem 0 1rem 0;
  }
`;

export const Content = styled.section`
  display: flex;
  // justify-content: flex-start;

  > div {
    margin: 1rem;

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

  div {
    margin-top: 0.7rem;
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      height: 1rem;
    }

    :hover {
      opacity: 0.9;
    }
  }

  span {
    margin-left: 0.2rem;
  }
`;

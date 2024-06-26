import { CardContent } from '@material-ui/core';
import styled from 'styled-components';

export const MainContainer = styled.section`
  height: 33rem;
  display: flex;
  margin-top: 9rem;
  background-color: rgb(89, 89, 61);

  @media (max-width: 1200px) {
      height: 28rem;
    }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > div:first-child {
    flex: 3;
  }

  > div:last-child {
    flex: 1;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ContentLeft = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    :first-child {
      width: 30rem;
      font-style: italic;
    }

    :last-child {
      font-size: 0.8rem;
    }
  }
`;

export const InformationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h3 {
    margin: 2rem 0 1rem 0;
  }
`;

export const CardContentStyled = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ActionsContent = styled.div`
  display: flex;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    height: 9rem;
    width: 15rem;
    background-color: #fff;
    margin-right: 1rem;
  }

  button {
    margin-top: 1rem;
    text-transform: none;
    font-size: 0.75rem;
    font-weight: bold;
    width: 100%;
  }
`;

export const ContentRight = styled.div`
  flex: 1;
  height: 100%;

  .image-wrapper {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .image-wrapper > img {
    height: 52rem;

    @media (max-width: 1500px) {
      height: 42rem;
    }

    @media (max-width: 1350px) {
      height: 37rem;
    }

    @media (max-width: 1250px) {
      height: 33rem;
    }

    @media (max-width: 1200px) {
      height: 28rem;
    }
  }

  .cut {
    background: rgb(89, 89, 61); /* A cor dos elementos antes e depois */
    display: block;
    top: 0; bottom: 0;
    position: absolute;
    width: 600px
  }

  .left {
    -webkit-transform: skew(45deg) translateX(-335px);
        -ms-transform: skew(45deg) translateX(-335px);
            transform: skew(45deg) translateX(-335px);
    left: 0
  }
`;

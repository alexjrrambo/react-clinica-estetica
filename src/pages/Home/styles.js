import { CardContent } from '@material-ui/core';
import styled, { keyframes } from 'styled-components';

export const MainContainer = styled.section`
  height: 33rem;
  display: flex;
  margin-top: 9rem;
  background-color: #9C9F8C;

  @media (max-width: 1250px) {
    flex-direction: column;
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
    flex: 4;
  }

  @media (max-width: 1250px) {
    //margin: 2rem;
  }
`;

export const ContentLeft = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .image-wrapper > img {
    width: 100%;
    height: 100%;
  }

  .cut {
    background: #9C9F8C; /* A cor dos elementos antes e depois */
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

export const FeaturesConatiner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  margin: 5rem;
`;

export const FeaturesContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 1250px) {
    flex-direction: column;
  }
`;

export const Feature = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 3rem;
  margin-bottom: 3rem;

  > div {
    width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      font-size: 1.2rem;
      font-weight: bold;
      margin: 1rem 0;
    }

    span {
      text-align: center;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  max-width: 30rem;

  h1 {
    color: #fff;
    font-size: 2.2rem;
    font-weight: lighter;
    letter-spacing: 1px;

    @media (max-width: 1250px) {
      font-size: 1.5rem;
    }
  }
`;

export const CounterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  margin-bottom: 2rem;

  > label {
    font-size: 1.3rem;
  }

  div {
    display: flex;

    > span {
      font-size: 1.8rem;
    }
  }
`;

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const BgImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(-45deg, #7159c1, #7f69c7, #3c3848, #272334);
  background-size: 400% 400%;
  animation-name: ${gradient};
  animation-duration: 40s;
  animation-iteration-count: infinite;
  z-index: -1000;
`;

export const LocalizationContainer = styled.div`
  background: #E6E7E2;
  padding: 1rem 10rem;
`;

export const LocalizationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 35rem;

  > h4 {
    margin-bottom: 1rem;
  }

  > span {
    text-align: center;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  img {
    height: 25rem;

    :hover {
      opacity: 1.5;
      cursor: pointer;
    }
  }
`;

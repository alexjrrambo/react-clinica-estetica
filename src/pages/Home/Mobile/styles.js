import { CardContent } from '@material-ui/core';
import styled, { keyframes } from 'styled-components';

export const MainContainer = styled.section`
  display: flex;
  margin-top: 4rem;
  background-color: transparent;
  .HeroCarousel_wrapper__bnRvU {
    height: calc(100vh - 4rem);
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

const Bounce = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-20px);
  }
`;

export const ButtonMore = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  animation: ${Bounce} 0.75s infinite alternate;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  border: 2px solid white;
  border-radius: 10px;
  color: white;
  background-color: transparent;
  width: 1.5rem;
  height: 2.25rem;
  margin-bottom: -1rem;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 100%;
  background:rgba(0,0,0,0.65);
  padding: 2rem 4rem;

  > div {
    :first-child {
      width: 100%;
      font-style: italic;
      font-weight: 400;
      font-size: 1rem;
      letter-spacing: 2px;
    }
    :last-child {
      width: 100%;
      font-size: 0.8rem;
    }
  }
  @media (max-width: 1250px) {
    //margin: 2rem;
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
  width: 100%;
`;

export const ActionsContent = styled.div`
  display: flex;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    min-height: 7rem;
    width: 100%;
    background-color: #fff;
    margin-right: 1rem;
    @media (max-width: 1200px) {
      margin-bottom: 1rem;
    }
  }
  button {
    margin-top: 1rem;
    text-transform: none;
    font-size: 0.75rem;
    font-weight: bold;
    width: 100%;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

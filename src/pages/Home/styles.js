import { CardContent } from '@material-ui/core';
import styled, { keyframes } from 'styled-components';

export const MainContainer = styled.section`
  display: flex;
  margin-top: 9rem;
  background-color: transparent;

  .HeroCarousel_wrapper__bnRvU {
    height: calc(100vh - 9rem);
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
  justify-content: end;
  align-items: flex-start;
  color: #fff;
  height: 100%;
  background:rgba(0,0,0,0.65);
  padding: 2rem 4rem;

  > div {
    :first-child {
      width: 40rem;
      font-style: italic;
      font-weight: 400;
      font-size: 1.3rem;
      letter-spacing: 2px;

    }

    :last-child {
      font-size: 0.8rem;
    }
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

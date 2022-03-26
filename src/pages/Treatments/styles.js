import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainContainer = styled.section`
  min-height: calc(100vh - 12rem);
  display: flex;
  margin: 9rem 5rem 0 5rem;

  > div {
    margin: 2rem;
  }

  @media (max-width: 1024px) {
    margin: 4rem 0;
    flex-direction: column;
  }
`;

export const ContentLeft = styled.div`
  flex: 1;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ContentRight = styled.div`
  //height: 20rem;
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 2rem;
    height: 20rem;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const LinkStyled = styled(Link)`
  && {
    text-decoration: none;
    color: #999;
  }
`;

export const InformationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    line-height: 30px;
  }

  h1 {
    margin: 2rem 0 3rem 0;
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
`;

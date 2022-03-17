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
  height: 20rem;
  flex: 3;
  display: flex;

  img {
    height: 15rem;
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

  h4 {
    margin: 2rem 0 1rem 0;
  }
`;

import styled from 'styled-components';

export const MainContainer = styled.section`
  background: #E6E7E2;
  min-height: calc(100vh - 12rem);
`;

export const MainContent = styled.div`
  background: #E6E7E2;
  min-height: calc(100vh - 12rem);
  display: flex;
  margin: 9rem 14rem 0 14rem;

  h1 {
    margin-bottom: 2rem;
  }

  > div {
    margin: 2rem;

    @media (max-width: 1024px) {
    margin: 1rem 2rem;
  }
  }

  @media (max-width: 1250px) {
    margin: 9rem 7rem 0 7rem;
  }

  @media (max-width: 1024px) {
    margin: 4rem 0 0 0;
    flex-direction: column;
  }
`;

export const Avatar = styled.img`
    height: 250px;
    vertical-align: middle;
    border-radius: 50%;
`;

export const ContentLeft = styled.div`
  flex: 1;

  span {
    line-height: 25px;
  }

  img {
      @media (max-width: 1024px) {
      display: block;
      margin: 0 auto;
    }
  }
`;

export const ContentRight = styled.div`
  flex: 2;

  p {
    line-height: 25px;
    text-align: justify;
  }
`;

import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  background: #59593D;
  color: #fff;

  * {
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    }
`;

export const FooterContent = styled.div`
  display: flex;
  width: 100%;

  > * {
    flex: 1;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const FooterLeft = styled.div`
  margin: 2rem;

  div {
    margin-top: 0.7rem;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  span {
    margin-left: 0.2rem;
  }
`;

export const FooterCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    height: 10rem;
    margin-top: 2rem;

    @media (max-width: 1024px) {
      margin: 0;
      height: 10rem;
    }
  }
`;

export const FooterDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;

  div {
    padding: 0 1rem;
    border-right: 1px solid #ccc;

    &:last-child {
      border: 0;
    }

    @media (max-width: 1024px) {
      border: none;
    }
  }

  @media (max-width: 1024px) {
    height: auto;
    flex-direction: column;
    margin: 1rem;
  }
`;

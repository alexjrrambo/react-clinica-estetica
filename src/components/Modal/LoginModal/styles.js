import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  padding-bottom: 1rem;
  width: 20rem;

  > * {
    &:nth-last-child(+3) {
      margin-top: 1rem;
      display: flex;
    }

    &:nth-last-child(+5) {
      margin-top: 1rem;
      display: flex;
    }
  }

  button {
    &:first-child{
      margin: 1rem 0;
    }
  }

  @media (max-width: 500px) {
    width: 100%;
    padding: 0;
    max-width: none;
  }
`;

export const RegisterText = styled.span`
  font-size: 0.8rem;

  b {
    cursor: pointer;
  }
`;

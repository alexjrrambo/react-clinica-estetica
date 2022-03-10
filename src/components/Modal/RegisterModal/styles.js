import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
  padding-bottom: 1rem;
  width: 30rem;

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
      margin-top: 1rem;
    }
  }

  @media (max-width: 650px) {
    width: 100%;
    padding: 0;
    max-width: none;
  }
`;

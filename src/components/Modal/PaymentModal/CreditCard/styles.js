import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;
  justify-content: center;

  h2 {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 0;
  }

  button {
    margin-top: 2rem;
  }
`;

export const ReducedCreditCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #d4d7d9;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  span {
    font-size: 1rem;
  }

  > * {
    margin: 1rem;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  //height: 30rem;
  border: 1px solid #d4d7d9;
  border-radius: 5px;
  margin-bottom: 1rem;

  &:first-child {
    margin-right: 1.5rem;
  }

  @media (max-width: 650px) {
    width: 100%;
    padding: 0;
    max-width: none;
  }
`;

export const CheckoutContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;

  form {
    > div {
      display: flex;

      > * {
        margin-right: 2rem;

        &:last-child {
          margin-right: 0rem;
        }
      }
    }
  }
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem;

  img {
    height: 3rem;
  }

  span {
    margin-left: 2rem;
    font-size: 1.1rem;
  }
`;

export const Info = styled.div`
  margin: 0 2rem;
`;

export const AnualPlan = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5rem;
  padding: 1rem 1rem 0 1rem;
  border: 1px solid #d4d7d9;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  background: #F8FAFB;
`;

export const PriceInfosContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  font-size: 0.9rem;

  > span {
    font-weight: bold;
  }

  > * {
    margin-bottom: 1rem;
  }
`;

export const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    color: rgba(0, 0, 0, 0.54);
  }

  button {
    margin-left: 1rem;
  }

  > span {
    font-weight: bold;
  }
`;

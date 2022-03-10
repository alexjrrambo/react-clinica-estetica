import styled from 'styled-components';

export const PricingConatiner = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  background: #272334;

  h2 {
    font-size: 1.5rem;
    color: #fff;
    margin-top: 2rem;
  }
`;

export const PricingContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  height: auto;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20rem;
    max-width: 20rem;
    min-height: 13.5rem;
    margin: 2rem;
    padding: 3rem;
    background: #F8FAFB;
    border-radius: 3px;

    * {
      margin-bottom: 0.3rem;
    }

    label {
      font-size: 1.8rem;
      font-weight: bold;
    }

    > span {
      font-size: 1.5rem;
    }

    p {
      text-align: center;
    }

    button {
      width: 100%;
    }

    @media (max-width: 500px) {
      width: 100%;
      padding: 1rem 0;
      max-width: none;
    }
  }

  @media (max-width: 1250px) {
    flex-direction: column;
  }
`;

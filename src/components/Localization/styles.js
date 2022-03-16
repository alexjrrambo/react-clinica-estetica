import styled from 'styled-components';

export const LocalizationContainer = styled.div`
  background: #E6E7E2;
  padding: 0 10rem;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }
`;

export const LocalizationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 35rem;

  > h4 {
    margin-bottom: 1rem;
  }

  > span {
    text-align: center;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  img {
    height: 25rem;
    border-radius: 10px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);


    :hover {
      opacity: 0.8;
      cursor: pointer;
    }

    @media (max-width: 1024px) {
      height: 15rem;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 25rem;
  }
`;

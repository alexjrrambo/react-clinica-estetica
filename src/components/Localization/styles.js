import styled from 'styled-components';

export const LocalizationContainer = styled.div`
  background: #E6E7E2;
  padding: 0 10rem;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 0 1rem 0;
  }
`;

export const LocalizationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 35rem;

  h4 {
    margin: 2rem 0 0 0;
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

  > span {
    text-align: center;
    font-size: 0.8rem;
    margin: 1.5rem;
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
      min-height: 15rem;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 25rem;
  }
`;

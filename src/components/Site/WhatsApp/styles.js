import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1rem;

  img {
    border-radius: 10px;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    height: 3rem;
    width: 3rem;
    cursor: pointer;
    transition: transform .5s ease;

    :hover {
      opacity: 0.9;
      transform: scale(1.05);
    }
  }
`;

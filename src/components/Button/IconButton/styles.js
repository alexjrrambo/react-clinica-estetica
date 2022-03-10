import styled from 'styled-components';

export const Container = styled.button`
  cursor: pointer;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    fill: #0077cc;
  }

  span {
    font-size: 0.6rem;
    color: #0077cc !important;
  }

  &:hover{
    opacity: 0.7;
  }
`;

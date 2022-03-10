import styled from 'styled-components';

export const IconContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    cursor: pointer;
    fill: ${props => props.hexColor};

    &:hover{
      opacity: 0.7;
    }
  }
`;

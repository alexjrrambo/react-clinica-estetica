import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  font-size: 0.8rem;
  background: #272334;
  color: #fff;

  div {
    padding: 0 1rem;
    border-right: 1px solid #ccc;

    &:last-child {
      border: 0;
    }
  }
`;

export const FooterContent = styled(Toolbar)`

`;

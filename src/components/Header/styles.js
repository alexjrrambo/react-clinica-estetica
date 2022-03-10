import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export const HeaderContainer = styled(AppBar)`
  &&{
    position: fixed;
    background: #7159c1;
    color: #f4f4f4;
  }
`;

export const HeaderContent = styled(Toolbar)`
  &&{
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      height: 3rem;
    }
  }
`;

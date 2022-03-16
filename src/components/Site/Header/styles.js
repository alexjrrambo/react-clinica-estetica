import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Menu } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled(AppBar)`
  && {
    position: fixed;
    background: #fff;
    color: #999;
    // z-index: 99999;
    /* @media (max-width: 1250px) {
      display: none;
    } */

    * {
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    }

    @media (max-width: 1024px) {
      display: ${props => (props.mobile ? 'inital' : 'none')};
    }

    @media (min-width: 1024px) {
      display: ${props => (props.mobile ? 'none' : 'initial')};
    }
  }
`;

export const HeaderContent = styled(Toolbar)`
  && {
    height: ${props => (props.reducedSize ? '4rem' : '9rem')};
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.7rem;
    -webkit-transition: all 0.2s ease 0s;
    -o-transition: all 0.2s ease 0s;
    transition: all 0.2s ease 0s;

    img {
      height: ${props => (props.reducedSize ? '2rem' : '6rem')};
    }

    > div {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      :first-child {
        align-items: flex-start;
        justify-content: space-between;
      }

      :last-child {
        align-items: flex-end;
        justify-content: flex-end;
      }
    }
  }
`;

export const HeaderContactMenu = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    margin: 0.5rem 0rem;

    > svg {
      margin-right: 0.2rem;
    }

    :last-child {
      > a {
        margin-right: 0.5rem;
      }
    }
  }

  button {
    text-transform: none;
    font-size: 0.7rem;
  }

  svg {
    fill: #59593D;
  }

  /* @media (max-width: 1250px) {
    display: none;
  } */
`;

export const HeaderActionMenu = styled.div`
  display: flex;

  button {
    text-transform: none;
    font-size: 0.7rem;
  }

  /* @media (max-width: 1250px) {
    display: none;
  } */
`;

export const ContextualMenuContent = styled(Menu)`
  && {
    margin-top: 35px;

    .MuiMenuItem-root {
      font-size: 0.8rem;
      color: #999;
    }
  }
`;

export const LinkStyled = styled(Link)`
  && {
    text-decoration: none;
    color: #999;
  }
`;

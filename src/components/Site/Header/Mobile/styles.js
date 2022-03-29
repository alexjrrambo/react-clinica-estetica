import { Toolbar } from '@material-ui/core';
import styled from 'styled-components';

export const SidebarContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 4rem;
  background-color: #fff;
  height: calc(100vh - 4rem);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${props => (props.visible ? '20rem' : '0rem')};
  -webkit-transition: all 0.2s ease 0s;
  -o-transition: all 0.2s ease 0s;
  transition: all 0.2s ease 0s;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  overflow: scroll;

  > * {
    display: ${props => (props.visible ? 'initial' : 'none')};
  }

  &&&& {
  .side-navigation-panel-select-option-selected, .side-navigation-panel-select-inner-option-selected {
    border-color: #59593D;
  }
}

`;

export const ContactInformation = styled.div`
  margin: 0 3rem 3rem 2rem;

  > div {
    :last-child {
      display: flex;
      justify-content: center;
      margin-top: 2rem;

      svg {
        fill: #59593D;
        margin-right: 1rem;
      }
    }

    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 0.8rem;
  }
`;

export const HeaderContentMobile = styled(Toolbar)`
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
      height: ${props => (props.reducedSize ? '1.8rem' : '6rem')};
    }

    > div {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      :first-child {
        align-items: center;
        justify-content: space-between;

        svg {
          fill: #ccc;
        }
      }
    }
  }
`;

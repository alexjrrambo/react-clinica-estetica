import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  height: 100%;
  margin-top: 3.75rem;
  width: 4.25rem;
  max-width: 4.25rem;
  float: left;
  color: #fff;
  transition: 0.4s;
  z-index: 100;

  li,
  span {
    white-space: nowrap;
    ${props => (!props.isExpanded && ' width: inherit;')}
    ${props => (!props.isExpanded && ' margin-bottom: 2rem;')}

    &:not(:first-child) {
      display: none;
    }
  }

  ${props => (props.isExpanded
    ? `transition: 0.1s;
  width: 12.5rem;
  min-width: 12.5rem;

    li,
    span {
      &:not(:first-child) {
        display: flex;
      }
    }`
    : '')}

  @media (max-width: 1250px) {
    display: ${props => (props.isExpanded ? 'initial' : 'none')};
  }

  @media (max-width: 600px) {
    margin-top: 3.5rem;
  }
`;

export const Content = styled.div`
  height: inherit;
  width: inherit;
  position: fixed;
  background: #272334;
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 1.25rem;
`;

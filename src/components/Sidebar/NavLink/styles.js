import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLinkConent = styled.li`
  &:not(:first-child):hover {
    color: #fff;
    background: #3c3848;
    cursor: pointer;
  }
`;

export const LinkRedirect = styled(Link)`
  width: 100%;
  color: inherit;
  text-decoration: none;
  font-size: 0.75rem;
  line-height: 2rem;
  margin-left: 3rem;
`;

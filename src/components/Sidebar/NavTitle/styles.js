import styled from 'styled-components';

export const Title = styled.li`
  background: transparent;
  color: #f4f4f4;
  border: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 1.25rem;
  margin-bottom: 0.5rem;
  width: 12.5rem;

  span {
    margin-top: 0.25rem;
    padding: 0 0.5rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    line-height: 1.3rem;
    letter-spacing: 1.11px;
    font-weight: 320;
  }

  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;

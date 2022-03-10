import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  background: #7159c1;
`;

export const Content = styled.div`
  background: #fff;
  height: 16rem;
  width: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 1.25rem;
`;

export const Logo = styled.div`
  margin: 6.5rem;
  padding: 0.75rem;
`;

export const Header = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  display: flex;
  height: 8rem;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  height: 4rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

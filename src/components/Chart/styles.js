import styled, { keyframes } from 'styled-components';
import { InputDatePicker } from '../Input';
import { ButtonFilled } from '../Button';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  padding: 0.25rem 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
  height: 28.25rem;

  h2 {
    font-size: 1.2rem;
    margin-top: 0.5rem;
    font-weight: bold;
  }
`;
export const NotFountContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 19rem;
  span {
    margin: 0.75rem;
  }
`;

export const FiltroToolbar = styled.div`
  margin-top: 0.25rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  background: #fff;
  height: auto;
  width: 100%;
`;

const opacityKeyframes = keyframes`
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
`;

export const FiltroContent = styled.div`
  display: flex;
  position: absolute;
  margin-left: 5px;
  margin-left: 45px;
  flex-direction: column;
  animation-name: ${opacityKeyframes};
  animation-duration: 0.7s;
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
  z-index: 1;
  button {
    width: 100%;
  }
`;
export const FiltroRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FiltroInputDate = styled(InputDatePicker)`
  /* margin-right: 5px; */
`;

export const FiltroButton = styled(ButtonFilled)`
  width: 40px;
  svg {
    width: 40px;
  }
`;

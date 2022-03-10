import styled from 'styled-components';
import Flatpickr from 'react-flatpickr';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-right: 0.25rem;

  span {
    font-weight: 500;
    font-size: 0.9rem;
    letter-spacing: 1px;
    margin-bottom: 0.125rem;
  }

  input {
    height: 2.25rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 0 0.75rem;
    box-sizing: border-box;
    font-size: 0.75rem;

    &:focus {
      border-color: #7159c1;
      box-shadow: 0 0 2px #7159c1;
      outline: none;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 0.75rem;
`;

export const InputDate = styled(Flatpickr)`
  width: 100%;
  margin-bottom: 0.75rem;
`;

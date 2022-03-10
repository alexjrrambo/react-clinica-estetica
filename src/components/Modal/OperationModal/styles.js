import { Card, TextField } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  svg {
    fill: #0077cc;
    cursor: pointer;

    &:hover{
      opacity: 0.7;
    }
  }
`;

export const DetailedOperationsCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.5rem;
  margin-bottom: 0.5rem;
`;

export const AddContent = styled.div`
  svg {
    fill: #0077cc;
    cursor: pointer;

    &:hover{
      opacity: 0.7;
    }
  }
`;

export const TextFieldOperation = styled(TextField)`
  &&{
    margin-right: 0.5rem;
  }
`;

export const NewDetailedOperation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;

  svg {
    margin-left: 1rem;
  }

  > div {
    margin-right: 0.5rem;

    &:last-child{
      display: flex;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;

    > div {
      margin-top: 0.5rem;
    }
  }
`;

export const AddedDetailedOperation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  margin-bottom: 0.5rem;
  border-top: 1px solid #ccc;

  svg {
    margin-left: 1rem;
  }
`;

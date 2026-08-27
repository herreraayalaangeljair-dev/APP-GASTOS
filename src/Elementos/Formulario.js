import styled from 'styled-components';

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1.5rem;
`;

export const InputContenedor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
`;

export const Label = styled.label`
  color: #cbd5e1;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const FilaInputs = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;

  & > div {
    flex: 1;
  }
`;

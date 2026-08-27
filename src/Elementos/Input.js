import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  background: rgba(30, 41, 59, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 0.8rem 1rem;
  color: #ffffff;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.2s ease;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  &:focus {
    border-color: #a855f7;
    background: rgba(30, 41, 59, 0.55);
    box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.15);
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
    cursor: pointer;
    opacity: 0.65;
    transition: opacity 0.2s ease;
  }

  &::-webkit-calendar-picker-indicator:hover {
    opacity: 0.95;
  }
`;

export const Select = styled.select`
  width: 100%;
  background: rgba(30, 41, 59, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 0.8rem 1rem;
  color: #ffffff;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.2s ease;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  &:focus {
    border-color: #a855f7;
    background: rgba(30, 41, 59, 0.55);
    box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.15);
  }

  option {
    background: #1e293b;
    color: #ffffff;
  }
`;

export default Input;

import styled from 'styled-components';

const Boton = styled.button`
  background: ${props => props.primario ? 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)' : 'rgba(255, 255, 255, 0.03)'};
  color: ${props => props.primario ? '#ffffff' : '#3b82f6'};
  border: ${props => props.primario ? 'none' : '1px solid rgba(59, 130, 246, 0.3)'};
  border-radius: 9999px;
  padding: ${props => props.primario ? '0.85rem 1.5rem' : '0.8rem 1.5rem'};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.primario ? '0 4px 15px rgba(168, 85, 247, 0.25)' : 'none'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  margin-top: ${props => props.primario ? '0.5rem' : '1.25rem'};
  touch-action: manipulation;

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${props => props.primario ? '0 6px 18px rgba(168, 85, 247, 0.35)' : 'none'};
    background: ${props => props.primario ? 'linear-gradient(135deg, #b55fe6 0%, #4b92ff 100%)' : 'rgba(59, 130, 246, 0.08)'};
    border-color: ${props => props.primario ? 'none' : 'rgba(59, 130, 246, 0.5)'};
    color: ${props => props.primario ? '#60a5fa' : '#60a5fa'};
  }

  &:active {
    transform: translateY(1px) scale(0.98);
    box-shadow: ${props => props.primario ? '0 2px 8px rgba(168, 85, 247, 0.15)' : 'none'};
  }
`;

export default Boton;

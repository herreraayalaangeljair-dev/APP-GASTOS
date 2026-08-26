import styled from "styled-components";

export const Contenedor = styled.main`
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.6), 0 0 30px rgba(168, 85, 247, 0.06);
  padding: 1.25rem;
  width: calc(100% - 1.5rem);
  max-width: 550px;
  margin: 1rem auto;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    padding: 2rem;
    margin: 2rem auto;
    border-radius: 24px;
  }

  h1 {
    color: #f8fafc;
    background: linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.35rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    letter-spacing: -0.02em;

    @media (min-width: 640px) {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
    }
  }

  .listado-gastos {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

export default Contenedor;
import styled from "styled-components";

export const Contenedor = styled.main`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
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
    color: #0f172a;
    font-size: 1.35rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #f1f5f9;
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
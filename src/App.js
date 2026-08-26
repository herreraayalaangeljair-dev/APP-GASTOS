import Contenedor from "./Elementos/Contenedor";
import styled from "styled-components";
import { Routes, Route, NavLink } from "react-router";
import InicioSesion from "./Componentes/InicioSesion";
import Registro from "./Componentes/Registro";
import ListaGastos from "./Componentes/ListaGastos";
import EditarGasto from "./Componentes/EditarGasto";

const App = () => {
  return (
    <ContenedorGeneral>
      <Encabezado>
        <nav>
          <NavLink to="/">Lista de Gastos</NavLink>
          <NavLink to="/inicio-sesion">Iniciar Sesión</NavLink>
          <NavLink to="/registro">Registro</NavLink>
          <NavLink to="/editar">Editar Gasto</NavLink>
        </nav>
      </Encabezado>

      <Contenedor>
        <h1>Mis gastos</h1>
        <div className="listado-gastos">
          <Routes>
            <Route path="/" element={<ListaGastos />} />
            <Route path="/inicio-sesion" element={<InicioSesion />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/editar" element={<EditarGasto />} />
          </Routes>
        </div>
      </Contenedor>
    </ContenedorGeneral>
  );
};

const ContenedorGeneral = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
  overflow-x: hidden;
`;

const Encabezado = styled.header`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.8);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: max(0.6rem, env(safe-area-inset-top)) 0.75rem 0.6rem;

  nav {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    max-width: 550px;
    margin: 0 auto;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Chrome/Safari */
    }

    padding: 0.25rem 0.25rem;

    a {
      color: #64748b;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.875rem;
      padding: 0.5rem 0.875rem;
      border-radius: 9999px;
      white-space: nowrap;
      flex-shrink: 0;
      transition: all 0.2s ease;
      touch-action: manipulation;

      &:hover {
        color: #2563eb;
        background-color: #f1f5f9;
      }

      &.active {
        color: #2563eb;
        background-color: #eff6ff;
        font-weight: 600;
      }
    }
  }
`;

export default App;

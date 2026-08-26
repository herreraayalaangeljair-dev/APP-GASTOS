import Contenedor from "./Elementos/Contenedor";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Routes, Route, NavLink } from "react-router";
import InicioSesion from "./Componentes/InicioSesion";
import Registro from "./Componentes/Registro";
import ListaGastos from "./Componentes/ListaGastos";
import EditarGasto from "./Componentes/EditarGasto";
import Logo from "./Imagenes/icono.svg"

const App = () => {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={Logo} type="image/x-icon" />
      </Helmet>

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
          <div className="listado-gastos">
            <Routes>
              <Route path="/" element={<ListaGastos />} />
              <Route path="/inicio-sesion" element={<InicioSesion />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/editar/:id" element={<EditarGasto />} />
            </Routes>
          </div>
        </Contenedor>
      </ContenedorGeneral>
    </>
  );
};

const ContenedorGeneral = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  background: transparent;
  display: flex;
  flex-direction: column;
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
  overflow-x: hidden;
`;

const Encabezado = styled.header`
  background: rgba(9, 13, 22, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
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
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    padding: 0.25rem 0.25rem;

    a {
      color: #94a3b8;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.875rem;
      padding: 0.5rem 0.875rem;
      border-radius: 9999px;
      white-space: nowrap;
      flex-shrink: 0;
      transition: all 0.2s ease;
      touch-action: manipulation;
      border: 1px solid transparent;

      &:hover {
        color: #f8fafc;
        background-color: rgba(255, 255, 255, 0.06);
      }

      &.active {
        color: #e9d5ff;
        background-color: rgba(168, 85, 247, 0.18);
        border: 1px solid rgba(168, 85, 247, 0.35);
        font-weight: 600;
      }
    }
  }
`;

export default App;

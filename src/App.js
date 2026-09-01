import Contenedor from "./Elementos/Contenedor";
import { Helmet } from "react-helmet-async";
import { useState } from 'react'
import styled from "styled-components";
import { Routes, Route, NavLink } from "react-router";
import InicioSesion from "./Componentes/InicioSesion";
import Registro from "./Componentes/Registro";
import ListaGastos from "./Componentes/ListaGastos";
import EditarGasto from "./Componentes/EditarGasto";
import CategoriaGastos from "./Componentes/CategoriaGastos";
import Logo from "./Imagenes/icono.svg"
import SidebarMenu from "./Componentes/SideBarMenu";
//para sacar elementos de la base de datos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faBars } from "@fortawesome/free-solid-svg-icons";
import RutaProtegida from "./Componentes/RutaProtegida";
import { useAuth } from "./Contextos/Authcontext";


const App = () => {

  const [menuAbierto, setMenuAbierto] = useState(false);
  const { usuario } = useAuth();



  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={Logo} type="image/x-icon" />
      </Helmet>

      <ContenedorGeneral>
        <Encabezado>
          <ContenedorNav>

            <MenuHambirguesa
              aria-label="Menú"
              aria-expanded={menuAbierto}
              aria-controls="menu-principal"
              onClick={() => setMenuAbierto(!menuAbierto)}
            >
              <FontAwesomeIcon icon={faBars} />
            </MenuHambirguesa>



            <nav>
              <NavLink to="/inicio-sesion">
                {usuario
                  ? (
                    <p>
                      <FontAwesomeIcon icon={faCircleUser} />
                      {usuario.displayName}
                    </p>
                  )
                  : (
                    <NavLink to="/inicio-sesion">
                      <FontAwesomeIcon icon={faCircleUser} />
                      Iniciar Sesión
                    </NavLink>
                  )
                }
              </NavLink>
            </nav>

          </ContenedorNav>

        </Encabezado>

        {/*para mostrar el menu lateral*/}
        {menuAbierto && <SidebarMenu cerrarMenu={() => setMenuAbierto(false)} />}

        {/*Proteger rutas */}
        <Contenedor>
          <div className="listado-gastos">
            <Routes>

              <Route path="/" element={
                <RutaProtegida>
                  <ListaGastos />
                </RutaProtegida>
              } />

              <Route path="/inicio-sesion" element={<InicioSesion />} />
              <Route path="/registro" element={<Registro />} />

              <Route path="/editar/:id" element={
                <RutaProtegida>
                  <EditarGasto />
                </RutaProtegida>
              } />

              <Route path="/categoria" element={
                <RutaProtegida>
                  <CategoriaGastos />
                </RutaProtegida>
              } />

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
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(10, 10, 18, 0.95) 0%,
    rgba(10, 10, 18, 0.85) 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
  padding: 0.75rem clamp(1rem, 4vw, 2rem);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background 0.3s ease, box-shadow 0.3s ease;
`;

const ContenedorNav = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  nav {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    a {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      font-size: 0.875rem;
      font-weight: 500;
      padding: 0.45rem 0.85rem;
      display: flex;
      align-items: center;
      gap: 0.45rem;
      border-radius: 8px;
      border: 1px solid transparent;
      transition: all 0.2s ease;
      letter-spacing: 0.01em;

      &:hover {
        color: #ffffff;
        background-color: rgba(255, 255, 255, 0.07);
        border-color: rgba(255, 255, 255, 0.1);
      }

      &.active {
        color: #c4b5fd;
        background-color: rgba(139, 92, 246, 0.15);
        border-color: rgba(139, 92, 246, 0.3);
        font-weight: 600;
      }

      &:focus-visible {
        outline: 2px solid #8b5cf6;
        outline-offset: 2px;
      }

      p {
        margin: 0;
        display: flex;
        align-items: center;
        gap: 0.4rem;
      }

      svg {
        font-size: 1rem;
        opacity: 0.85;
      }
    }
  }
`;

const MenuHambirguesa = styled.div`
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.75);
  min-width: 40px;
  min-height: 40px;
  border-radius: 8px;
  transition: all 0.2s ease;
  margin-right: auto;
 
  &:hover {
    color: #ffffff;
    background-color: rgba(139, 92, 246, 0.15);
    border-color: rgba(139, 92, 246, 0.35);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus-visible {
    outline: 2px solid #8b5cf6;
    outline-offset: 2px;
  }

  svg {
    width: 1.4rem;   
    height: 1.4rem;
    display: block;
  }
`;


export default App;

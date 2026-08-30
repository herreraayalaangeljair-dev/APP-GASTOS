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
//para sacar elementos de la base de datos
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";
import { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const App = () => {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, 'usuarios'),
      (snapshot) => {

        const arreglo = snapshot.docs.map((usuario) => {
          return (
            { ...usuario.data(), id: usuario.id }
          );

        });
        setUsuarios(arreglo);

      })
  }, []);


  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={Logo} type="image/x-icon" />
      </Helmet>

      <ContenedorGeneral>
        <Encabezado>
          <nav>
            <NavLink to="/inicio-sesion">
              {
                usuarios.map((usuario) => (

                  <p key={usuario.id}><FontAwesomeIcon icon={faCircleUser} />{usuario.nombre}</p>
                ))
              }
            </NavLink>
          </nav>
        </Encabezado>

        <Contenedor>
          <div className="listado-gastos">
            <Routes>
              <Route path="/" element={<ListaGastos />} />
              <Route path="/inicio-sesion" element={<InicioSesion />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/editar/:id" element={<EditarGasto />} />
              <Route path="/categoria" element={<CategoriaGastos />} />
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
    justify-content: flex-end;
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
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;

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

      p {
        margin: 0;
        display: inline-flex;
        align-items: center;
        gap: 0.375rem;
      }
    }
  }
`;

export default App;

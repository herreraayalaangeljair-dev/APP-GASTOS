import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const SideBarMenu = ({ cerrarMenu }) => {
    return (
        <>

            <Overlay onClick={cerrarMenu} />

            <Contenedor>

                <BotonCerrar onClick={cerrarMenu}>
                    <FontAwesomeIcon icon={faXmark} />
                </BotonCerrar>

                <Titulo>Ir a</Titulo>
                <Opcion>Inicio</Opcion>
                <Opcion>Lista de gastos</Opcion>


                <Separador />

                <Titulo>Gastos por categoría</Titulo>
                <Opcion>Hogar</Opcion>
                <Opcion>Transporte</Opcion>
                <Opcion>Comida</Opcion>
                <Opcion>Servicios</Opcion>
                <Opcion>Ocio</Opcion>
                <Opcion>Otros</Opcion>

                <Separador />

                <Titulo>Ayuda y configuración</Titulo>
                <Opcion>Mi cuenta</Opcion>
                <Opcion>Cerrar sesión</Opcion>
            </Contenedor>
        </>
    );
};



const BotonCerrar = styled.div`
  position: absolute;
  top: 1rem;
  left: 100%;        
  margin-left: 1rem;  
  background: rgba(15, 15, 20, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.08);
  }
  &:active {
    transform: scale(0.95);
  }
`;

const Separador = styled.div`
border-top: 1px solid rgba(255, 255, 255, 0.08);
`;



const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4); 
  backdrop-filter: blur(2px);      
  z-index: 999;                   
`;


const Contenedor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100vh;
  height: 100dvh;
  background: rgba(15, 15, 20, 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  color: #ffffff;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: 10px 0 30px rgba(0, 0, 0, 0.6);
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 1000;

  /* Animación suave para entrar desde la izquierda */
  animation: slideIn 0.25s ease-out forwards;

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const Titulo = styled.h3`
  margin: 0 0 0.75rem 0;
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`;

const Opcion = styled.p`
  margin: 0;
  padding: 0.65rem 0.75rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: #ffffff;
  background: none;
  border: none;
  border-radius: 6px;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }
`;


export default SideBarMenu;
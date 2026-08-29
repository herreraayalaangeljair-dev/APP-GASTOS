import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Alertas = ({ tipo, mensaje, estadoAlerta, cambiarEstadoAlerta }) => {
    return (
        <> {estadoAlerta &&
            <ContenedorAlerta tipo={tipo}>
                <p>{mensaje}</p>
            </ContenedorAlerta>}
        </>
    );
}

// Animación de entrada 
const slideDown = keyframes`
    0% {
        transform: translateY(-30px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;
const ContenedorAlerta = styled.div`
    position: fixed;
    top: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    width: max-content;
    max-width: 90%;
    padding: 0.875rem 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
    animation: ${slideDown} 0.3s ease-out forwards;
    backdrop-filter: blur(8px);
    
    background-color: ${(props) =>
        props.tipo === "error"
            ? "rgba(220, 38, 38, 0.9)"
            : props.tipo === "exito"
                ? "rgba(22, 163, 74, 0.9)"
                : "rgba(30, 41, 59, 0.9)"};
    border: 1px solid ${(props) =>
        props.tipo === "error"
            ? "rgba(248, 113, 113, 0.4)"
            : props.tipo === "exito"
                ? "rgba(74, 222, 128, 0.4)"
                : "rgba(148, 163, 184, 0.4)"};
    p {
        color: #ffffff;
        margin: 0;
        font-weight: 500;
        font-size: 0.95rem;
        text-align: center;
    }
`;

export default Alertas;

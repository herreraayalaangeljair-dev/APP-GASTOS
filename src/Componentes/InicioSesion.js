import React from 'react';
import { useNavigate } from "react-router";
import Boton from '../Elementos/Boton';
import { Input } from '../Elementos/Input';
import { Formulario, InputContenedor, Label } from '../Elementos/Formulario';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const InicioSesion = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Inicio de sesión</h1>

            <Formulario onSubmit={(e) => e.preventDefault()}>
                <InputContenedor>
                    <Label htmlFor="nombre">Usuario: </Label>
                    <Input type="text" name="nombre" id="nombre" placeholder="Ej. Jair" />
                </InputContenedor>

                <InputContenedor>
                    <Label htmlFor="contrasena">Contraseña: </Label>
                    <Input type="password" name="contrasena" id="contrasena" placeholder="Contraseña" />
                </InputContenedor>

                <Boton primario type="submit">Iniciar Sesión</Boton>
            </Formulario>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <Boton onClick={() => navigate('/')} style={{ marginTop: '0' }}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} style={{ marginRight: '0.5rem', transform: 'rotate(180deg)' }} />
                    Volver
                </Boton>
                <Boton onClick={() => navigate('/registro')} style={{ marginTop: '0' }}>
                    Registrarse
                </Boton>
            </div>
        </div>
    );
}

export default InicioSesion;
import React from 'react';
import Alertas from './Alertas';
import { useNavigate } from "react-router";
import { useState, useEffect } from 'react';
import { db } from "../firebase/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import Boton from '../Elementos/Boton';
import { Input } from '../Elementos/Input';
import { Formulario, InputContenedor, Label } from '../Elementos/Formulario';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from 'react-helmet-async';

const InicioSesion = () => {
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({});


    //traer datos de usuarios de base de datos
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

    //funcion de inicio de sesion
    const handleLogin = (e) => {
        e.preventDefault();

        cambiarEstadoAlerta(false);
        cambiarAlerta({});

        if (nombre === '' || password === '') {
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo: "error",
                mensaje: "Todos los campos son obligatorios"
            });
            return;
        }



        const usuarioLogueado = usuarios.find((u) => u.nombre === nombre && u.password === password);

        if (usuarioLogueado) {
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo: "exito",
                mensaje: "Inicio de sesión exitoso"
            });

            //redireccion a la pagina principal
            setTimeout(() => {
                navigate('/');
            }, 1000);

            //limpiar los campos si hay inicio exitoso
            setNombre('');
            setPassword('');

        } else {
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo: "error",
                mensaje: "Usuario o contraseña incorrectos"
            });
        }//if else inicio sesion 

    }//fin de handlelogin 

    return (
        <>
            <Helmet>
                <title>Herrera App</title>
            </Helmet>
            <div>
                <h1>Inicio de sesión</h1>

                <Formulario onSubmit={handleLogin}>
                    <InputContenedor>
                        <Label htmlFor="nombre">Usuario: </Label>
                        <Input
                            type="text"
                            name="nombre"
                            id="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder="Ej. Jair" />
                    </InputContenedor>

                    <InputContenedor>
                        <Label htmlFor="contrasena">Contraseña: </Label>
                        <Input
                            type="password"
                            name="contrasena"
                            id="contrasena"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Contraseña" />
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

                <Alertas
                    tipo={alerta.tipo}
                    mensaje={alerta.mensaje}
                    estadoAlerta={estadoAlerta}
                    cambiarEstadoAlerta={cambiarEstadoAlerta}
                />
            </div>
        </>
    );
}

export default InicioSesion;
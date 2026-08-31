import { auth } from '../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Alertas from './Alertas';
import { useNavigate } from "react-router";
import { useState } from 'react';
import Boton from '../Elementos/Boton';
import { Input } from '../Elementos/Input';
import { Formulario, InputContenedor, Label } from '../Elementos/Formulario';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from 'react-helmet-async';

const InicioSesion = () => {
    const navigate = useNavigate();
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({});

    //funcion de inicio de sesion
    const handleLogin = async (e) => {
        e.preventDefault();
        cambiarEstadoAlerta(false);
        cambiarAlerta({});

        if (correo === '' || password === '') {
            cambiarEstadoAlerta(true);
            cambiarAlerta({ tipo: "error", mensaje: "Todos los campos son obligatorios" });
            return;
        }

        //comprobar correo valido
        const expresionRegular = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        const correoLimpio = correo.trim().toLowerCase();
        if (!expresionRegular.test(correoLimpio)) {
            cambiarEstadoAlerta(true);
            cambiarAlerta({ tipo: "error", mensaje: "Correo electronico no valido" });
            return;
        }

        //validar contraseña 
        if (password.length < 6) {
            cambiarEstadoAlerta(true);
            cambiarAlerta({ tipo: "error", mensaje: "La contraseña debe tener al menos 6 caracteres" });
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, correo, password);
            cambiarEstadoAlerta(true);
            cambiarAlerta({ tipo: "exito", mensaje: "Inicio de sesión exitoso" });

            setCorreo('');
            setPassword('');

            setTimeout(() => {
                navigate('/');
            }, 1500);

        } catch (error) {
            cambiarEstadoAlerta(true);

            if (error.code === 'auth/too-many-requests') {
                cambiarAlerta({ tipo: "error", mensaje: "Demasiados intentos fallidos. Intenta más tarde." });
            } else if (error.code === 'auth/user-disabled') {
                cambiarAlerta({ tipo: "error", mensaje: "Esta cuenta ha sido deshabilitada." });
            } else if (error.code === 'auth/network-request-failed') {
                cambiarAlerta({ tipo: "error", mensaje: "Error de conexión. Verifica tu internet." });
            } else {
                cambiarAlerta({ tipo: "error", mensaje: "Usuario o contraseña incorrectos" });
            }
        }

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
                        <Label htmlFor="correo">Correo: </Label>
                        <Input
                            type="email"
                            name="correo"
                            id="correo"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            placeholder="Ej. ejemplo@gmail.com" />
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
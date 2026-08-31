import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, query, getDocs } from "firebase/firestore";
import Boton from '../Elementos/Boton';
import { Input } from '../Elementos/Input';
import { Formulario, InputContenedor, Label } from '../Elementos/Formulario';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from 'react-helmet-async';
import { auth } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import Alertas from './Alertas';


const Registro = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({});


    //functions de envio de formulario
    const handleSubmit = async (e) => {
        e.preventDefault();


        cambiarEstadoAlerta(false);
        cambiarAlerta({});

        //inputs llenos
        if (email === '' || password === '' || nombre === '') {
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo: "error",
                mensaje: "Todos los campos son obligatorios"
            });
            return;
        }
        //comprobar correo valido
        const expresionRegular = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!expresionRegular.test(email)) {
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo: "error",
                mensaje: "Correo electronico no valido"
            });
            return;
        }


        //validar contraseña 
        if (password.length < 6) {
            cambiarEstadoAlerta(true);
            cambiarAlerta({ tipo: "error", mensaje: "La contraseña debe tener al menos 6 caracteres" });
            return;
        }

        const tieneNumero = /\d/.test(password);
        const tieneLetra = /[a-zA-Z]/.test(password);
        if (!tieneNumero || !tieneLetra) {
            cambiarEstadoAlerta(true);
            cambiarAlerta({ tipo: "error", mensaje: "La contraseña debe incluir letras y números" });
            return;
        }

        //validar nombre de usuario
        if (nombre.trim().length < 3 || nombre.length > 30) {
            cambiarEstadoAlerta(true);
            cambiarAlerta({ tipo: "error", mensaje: "El usuario debe tener entre 3 y 30 caracteres" });
            return;
        }

        const nombreValido = /^[a-zA-Z0-9_.]+$/.test(nombre);
        if (!nombreValido) {
            cambiarEstadoAlerta(true);
            cambiarAlerta({ tipo: "error", mensaje: "El usuario solo puede contener letras, números, puntos y guiones bajos" });
            return;
        }

        //No repetir nombre de usuario
        const consulta = await getDocs(query(collection(db, 'usuarios')));

        const usuarioExistente = consulta.docs.some(doc => doc.data().nombre === nombre);
        if (usuarioExistente) {
            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo: "error",
                mensaje: "Nombre de usuario ya existente"
            });
            return;
        }

        //Aqui es donde se mandan los datos a firebase
        try {
            //Autenticar email esto va a autenticacion
            const credencialesUsuario = await createUserWithEmailAndPassword(auth, email, password);

            //nombre de usuario esto va a autenticacion
            await updateProfile(credencialesUsuario.user, {
                displayName: nombre
            });

            // agregar los datos a la base de datos firestore
            await addDoc(collection(db, 'usuarios'), {
                nombre: nombre,
                email: email,
                uid: credencialesUsuario.user.uid,
                fechaRegistro: new Date()
            });

            cambiarEstadoAlerta(true);
            cambiarAlerta({
                tipo: "exito",
                mensaje: "Usuario registrado exitosamente"
            });


            //esto es para limpar los campos
            setEmail('');
            setNombre('');
            setPassword('');

            //redirecionar a la pagina de inicio
            navigate('/inicio-sesion');


        } catch (error) {
            cambiarEstadoAlerta(true);

            if (error.code === 'auth/email-already-in-use') {
                cambiarAlerta({ tipo: "error", mensaje: "Este correo ya está registrado" });
            } else if (error.code === 'auth/weak-password') {
                cambiarAlerta({ tipo: "error", mensaje: "La contraseña es demasiado débil" });
            } else if (error.code === 'auth/invalid-email') {
                cambiarAlerta({ tipo: "error", mensaje: "El correo no es válido" });
            } else {
                cambiarAlerta({ tipo: "error", mensaje: "No se pudo completar el registro. Intenta de nuevo." });
            }
            console.log(error);

        }
    }

    return (
        <>
            <Helmet>
                <title>Herrera App</title>
            </Helmet>

            <div>
                <h1>Registro de usuarios</h1>

                <Formulario onSubmit={handleSubmit}>
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
                        <Label htmlFor="correo">Correo Electronico: </Label>
                        <Input
                            type="email"
                            name="correo"
                            id="correo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ej. email@gmail.com" />
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

                    <Boton type="submit">Registrarse</Boton>
                </Formulario>

                <Boton onClick={() => navigate('/inicio-sesion')}> <FontAwesomeIcon icon={faArrowRightFromBracket} />Volver al inicio de sesión</Boton>

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

export default Registro;
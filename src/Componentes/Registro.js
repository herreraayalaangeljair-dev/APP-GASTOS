import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import db from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Boton from '../Elementos/Boton';
import { Input } from '../Elementos/Input';
import { Formulario, InputContenedor, Label } from '../Elementos/Formulario';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";


const Registro = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');

    //functions de envio de formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        //Aqui es donde se mandan los datos a firebase
        try {
            await addDoc(collection(db, 'usuarios'), {
                nombre: nombre,
                email: email,
                password: password
            });
        } catch (error) {
            console.log(error);
        }

        //esto es para limpar los campos
        setEmail('');
        setNombre('');
        setPassword('');
    }

    return (
        <div>
            <h1>Registro de usuarios</h1>

            <Formulario onSubmit={handleSubmit}>
                <InputContenedor>
                    <Label htmlFor="nombre">Usuario: </Label>
                    <Input
                        type="text"
                        name="nombre"
                        id="nombre"
                        required
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
                        required
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
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Contraseña" />
                </InputContenedor>

                <Boton type="submit">Registrarse</Boton>
            </Formulario>

            <Boton onClick={() => navigate('/inicio-sesion')}> <FontAwesomeIcon icon={faArrowRightFromBracket} />Volver al inicio de sesión</Boton>
        </div>
    );
}

export default Registro;
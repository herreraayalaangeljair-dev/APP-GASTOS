

const Registro = () => {
    return (
        <div>
            <h1>Inicio de sesión</h1>

            <form action="">
                <div>
                    <label htmlFor="nombre">Usuario: </label>
                    <input type="text" name="nombre" id="nombre" />
                </div>

                <div>
                    <label htmlFor="correo">Correo Electronico: </label>
                    <input type="email" name="correo" id="correo" />
                </div>

                <div>
                    <label htmlFor="contrasena">Contraseña: </label>
                    <input type="password" name="contrasena" id="contrasena" />
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}

export default Registro;
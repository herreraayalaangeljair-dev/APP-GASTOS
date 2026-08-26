

const InicioSesion = () => {
    return (
        <div>
            <h1>Registro usuarios</h1>

            <form>
                <div>
                    <label htmlFor="nombre">Usuario: </label>
                    <input type="text" name="nombre" id="nombre" />
                </div>

                <div>
                    <label htmlFor="contrasena">Contraseña: </label>
                    <input type="password" name="contrasena" id="contrasena" />
                </div>

                <button type="submit">Iniciar Sesión</button>
            </form>

            <div>
                <button>Registrarse</button>
            </div>
        </div>

    );
}

export default InicioSesion;
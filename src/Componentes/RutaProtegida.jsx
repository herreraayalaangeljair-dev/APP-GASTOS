import { Navigate } from 'react-router';
import { useAuth } from '../Contextos/Authcontext';

function RutaProtegida({ children }) {
    const { usuario, verificando } = useAuth();

    if (verificando) {
        return <div>Cargando...</div>;
    }

    if (!usuario) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default RutaProtegida;
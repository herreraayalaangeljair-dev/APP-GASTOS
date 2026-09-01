import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    //hook para ver que usuario esta logueado
    const [usuario, setUsuario] = useState(null)
    //hook de verificacion se sesion
    const [verificando, setVerificando] = useState(true)

    //verificacion se sesion 
    useEffect(() => {
        const auth = getAuth();
        const calcelarAutenticacion = onAuthStateChanged(auth, (usuario) => {
            setUsuario(usuario);
            setVerificando(false);
        });
        return calcelarAutenticacion;
    }, []);


    const login = (email, password) => {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logout = () => {
        return signOut(getAuth());
    }

    return (
        <AuthContext.Provider value={{ usuario, login, logout, verificando }}>
            {children}
        </AuthContext.Provider>
    );
};


export { AuthProvider, useAuth }

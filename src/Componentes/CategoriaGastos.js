import Boton from "../Elementos/Boton";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const CategoriaGastos = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Gasto por categorias</h1>
            <Boton onClick={() => { navigate('/') }}><FontAwesomeIcon icon={faArrowRightFromBracket} />Volver</Boton>
        </div>
    );
}

export default CategoriaGastos;
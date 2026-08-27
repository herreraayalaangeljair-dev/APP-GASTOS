import React from 'react';
import { useNavigate } from 'react-router';
import Boton from '../Elementos/Boton';
import { Input } from '../Elementos/Input';
import { Formulario, InputContenedor, Label } from '../Elementos/Formulario';

const ListaGastos = () => {
    const navigate = useNavigate();
    return (
        <div className="contenedor-gastos">
            <h1>Lista de gastos</h1>

            <div>
                <Boton onClick={() => { navigate('./categorias') }}>Categorias</Boton>
            </div>

            <Formulario onSubmit={(e) => e.preventDefault()}>
                <Input type="datetime-local" />

                <InputContenedor>
                    <Label htmlFor="cantidad">Cantidad</Label>
                    <Input type="number" id="cantidad" placeholder="Cantidad" />
                </InputContenedor>

                <InputContenedor>
                    <Input type="text" placeholder="Concepto" />
                </InputContenedor>

                <Boton primario type="submit">Agregar gasto</Boton>
            </Formulario>
        </div>
    );
}

export default ListaGastos;
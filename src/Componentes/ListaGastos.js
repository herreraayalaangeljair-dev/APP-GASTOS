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
                <Boton onClick={() => { navigate('./categorias') }}>Ver mis gastos</Boton>
            </div>

            <Formulario onSubmit={(e) => e.preventDefault()}>
                <InputContenedor>
                    <Label htmlFor="fecha">Fecha de gasto: </Label>
                    <Input type="datetime-local" />
                </InputContenedor>

                <InputContenedor>
                    <Label htmlFor="concepto">Concepto: </Label>
                    <Input type="text" id="concepto" placeholder="Concepto" />
                </InputContenedor>
                <InputContenedor>
                    <Label htmlFor="categoria">Categoria</Label>
                    <select id="categoria" name="categoria">
                        <option value="" disabled selected>Selecciona una categoria</option>
                        <option value="hogar">Hogar</option>
                        <option value="transporte">Transporte</option>
                        <option value="comida">Comida</option>
                        <option value="servicios">Servicios</option>
                        <option value="ocio">Ocio</option>
                        <option value="otros">Otros</option>
                    </select>
                </InputContenedor>

                <InputContenedor>
                    <Label htmlFor="cantidad">Cantidad</Label>
                    <Input type="number" id="cantidad" placeholder="Cantidad" />
                </InputContenedor>

                <Boton primario type="submit">Agregar gasto</Boton>
            </Formulario>
        </div>
    );
}

export default ListaGastos;
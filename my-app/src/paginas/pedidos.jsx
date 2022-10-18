
import React from "react";
import {Link} from "react-router-dom"
export default function pedidos(){
    return (
        <div>PEDIDOS
            <button type="submit">Enviar Pedido</button>
            <Link to="/ordenes1">Ver Pedidos</Link>
        </div>
        
    )
}
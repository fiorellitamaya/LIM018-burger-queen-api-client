import React from "react";
import {Link} from "react-router-dom"
export default function mesas(){
    return (
        <div>MESAS
            <Link to="/pedidos1">Pedido Mesa 1</Link>
            <Link to="/pedidos1">Pedido Mesa 2</Link>
            <Link to="/pedidos1">Pedido Mesa 3</Link>
        </div>
        
    )
}
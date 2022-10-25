import React from "react";
import logoBlanco from '../assets/imagenesBQ/logoBlanco.png'
import mesero from '../assets/imagenesBQ/mesero.png'
import '../style/mesas.css';

export default function header(){
    return (
        <header className="header">
            <a href="/mesas1"><img id="burgerLogo" src={logoBlanco} alt="Burger Queen"></img></a>
            <div className="derechaHeader">
                <p id="nombreUsuario">Mesero</p>
                <img className="iconoUsuario" src={mesero} alt="Mesero"></img>
                <i id="cerrarSesion" class="ph-sign-out"></i>
            </div>
        </header>
    )
}

/* <Link to="/pedidos1">Pedido Mesa 1</Link>
<Link to="/pedidos1">Pedido Mesa 2</Link>
<Link to="/pedidos1">Pedido Mesa 3</Link> */
import {NavLink} from 'react-router-dom'
import React from 'react'

export default function Nav() {
    return(
      <nav>
        <NavLink className= {({isActive}) =>(isActive?"activado":null)}  to="/">Login</NavLink>
        <NavLink className= {({isActive}) =>(isActive?"activado":null)}  to="/mesas1">Mesas</NavLink>
        <NavLink className= {({isActive}) =>(isActive?"activado":null)}  to="/pedidos1">Hacer Pedidos</NavLink>
        <NavLink className= {({isActive}) =>(isActive?"activado":null)}  to="/ordenes1">Ordenes</NavLink>
        <NavLink className= {({isActive}) =>(isActive?"activado":null)}  to="/ordenesCh1">OdenesCh</NavLink>
      </nav>
    )
}
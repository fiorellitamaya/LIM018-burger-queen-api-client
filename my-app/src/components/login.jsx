import React from "react";
//import fotoBQ from '../../assets/imagenesBQ/fotoBQ.jpg'
import loguitoBQ from '../assets/imagenesBQ/loguitoBQ.png'
import '../style/login.css';


export default function login() {
    return (
        <div className="containerLoginPrincipal">          
            <div className="container-form-loguito">
                <img src={loguitoBQ} className="loguitoBQ" alt="loguitoBQ" />
                <h1>Burger Queen</h1>
                <div className="form-login">
                    <br />
                    <input type="email" placeholder="Usuario" className="form-input-login" />
                    <br />
                    <input type="password" placeholder="Contraseña" className="form-input-login" name="password" />
                    <br />
                    <button type="submit" className="btn-login">Ingresar</button>
                </div>
            </div>
        </div>
    )
}
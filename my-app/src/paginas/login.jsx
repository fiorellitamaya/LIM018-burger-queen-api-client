import React from "react";
import fotoBQ from '../assets/imagenesBQ/fotoBQ.jpg'


export default function login() {
    return (
        <div className="containerLoginPrincipal">

            <div className="containerLoginForm">

                <img src ={fotoBQ} className="fotoBQ" alt="fotoBQ" />

                <div className="form-login">
                  <br />
                  <input type="email" placeholder="Correo Electrónico" className="form-input-login" />
                  <br />
                  <input type="password" placeholder="Contraseña" className="form-input-login" name="password" />
                  <br />
                  <button type="submit" className="btn-login">Ingresar</button>
                </div>

            </div>
            
        </div>
    )
}
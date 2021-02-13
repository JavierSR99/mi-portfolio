import React from 'react';
import javier from '../img/javier1.jpg';
import '../css/Perfil.css';

const FotoPerfil = () => {
    return (
        <div className="row align-items-center" id="texto-perfill">
            <div className="col-6 col-sm-4 d-flex justify-content-end">
                <img src={javier} alt="foto_perfil" className="img-fluid" />
            </div>
            <div className="col-6 col-sm-8 ">
                <span>
                    Hola, <br/> soy Javier Sanz.
                </span> 
                <p>
                    Un programador web que siempre está aprendiendo y buscando
                    nuevos retos.
                </p>
            </div>
        </div>
    )
}

export default FotoPerfil

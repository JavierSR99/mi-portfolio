import React from 'react';
import javier from '../img/javier1.jpg';
import '../css/Perfil.css';

const FotoPerfil = () => {

    return (
        <div>
            <div className="row align-items-center" id="texto-perfill">
                <div className="col-sm-2"></div>
                <div className="col-6 col-sm-4">
                    <img src={javier} alt="foto_perfil" className="img-fluid" id="javier" />
                </div>
                <div className="col-6 col-sm-4">
                    <span>
                        Hola, <br/> soy Javier Sanz.
                    </span> 
                    <p id="textini">
                        Un programador web que siempre está aprendiendo y buscando
                        nuevos retos.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FotoPerfil

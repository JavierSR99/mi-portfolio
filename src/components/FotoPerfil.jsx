import React from 'react';
import javier from '../img/javier.jpg';
import '../css/Perfil.css';

const FotoPerfil = () => {
    return (
        <div className="row">
            <div className="col-6 col-sm-6">
                <img src={javier} alt="foto_perfil" className="img-fluid" />
            </div>
            <div className="col-6 col-sm-6">
                <strong>
                    <span>Hola,</span> <br/> soy Javier Sanz.
                </strong> 
                <p>
                    Un joven programador web que siempre está aprendiendo y buscando
                    nuevos retos.
                </p>
            </div>
        </div>
    )
}

export default FotoPerfil

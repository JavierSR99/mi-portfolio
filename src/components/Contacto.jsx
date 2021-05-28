import React from 'react';
import '../css/Contacto.css';
import LinkedIn from '../img/linkedin.png';
import YouTube from '../img/logo-yt.png'
import IconContacto from '../icons/directorio-telefonico.png';

const Contacto = () => {
    return (
        <div>
            <div className="row mt-5">
                <div className="col-2"></div>
                    <div className="col-sm-12 col-md-4" id="titlesobremi">
                        <p className="h2 font-weight-bold">
                            Contacto
                            <img src={IconContacto} alt="icon-contacto" id="iconcontacto" />
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-8">
                </div>
            </div>

            <div className="row">
                <div className="col-md-2 col-1"></div>
                <div className="col-10 col-md-8">
                    <p id="textocontacto">
                        Puedes escribirme y encontrar más información sobre mí en &nbsp;
                        <a href="https://www.linkedin.com/in/javier-sanz-roa-b30163198/"
                        target="_blank" rel="noreferrer" id="enlacelinked">
                             Linked
                             <img src={LinkedIn} alt="linkedin" id="img-linkedin"/>
                        </a>
                        .
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2 col-1"></div>
                <div className="col-10 col-md-8">
                    <p id="textocontacto">
                        También puedes ver los tutoriales de programación que subo en mi canal de &nbsp;
                        <a href="https://www.linkedin.com/in/javier-sanz-roa-b30163198/"
                        target="_blank" rel="noreferrer" id="enlaceyoutube">
                            YouTube
                             <img src={YouTube} alt="youtube" id="img-linkedin"/>
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contacto

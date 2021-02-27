import React from 'react';
import Conocimientos from './Conocimientos';
import Fotoperfil from './FotoPerfil';
import SobreMi from './SobreMi';
import Contacto from './Contacto';
import Proyectos from './Proyectos';

const Principal = () => {
    return (
        <div className="container mt-5">
            
                <Fotoperfil />
            
            
                <Conocimientos />
            
            
                <SobreMi />
            
                <Proyectos />
            
                <Contacto />
            
        </div>
    )
}

export default Principal

import React from 'react';
import Conocimientos from './Conocimientos';
import Fotoperfil from './FotoPerfil';
import SobreMi from './SobreMi';
import Contacto from './Contacto';

const Principal = () => {
    return (
        <div className="container mt-5">
            
                <Fotoperfil />
            
            
                <Conocimientos />
            
            
                <SobreMi />
            
            
                <Contacto />
            
        </div>
    )
}

export default Principal

import React from 'react';
import Conocimientos from './Conocimientos';
import Fotoperfil from './FotoPerfil';
import SobreMi from './SobreMi';

const Principal = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <Fotoperfil />
            </div>
            <div className="row">
                <Conocimientos />
            </div>
            <div className="row">
                <SobreMi />
            </div>
        </div>
    )
}

export default Principal

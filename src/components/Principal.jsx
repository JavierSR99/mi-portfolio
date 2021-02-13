import React from 'react';
import Conocimientos from './Conocimientos';
import Fotoperfil from './FotoPerfil';

const Principal = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <Fotoperfil />
            </div>
            <div className="row">
                <Conocimientos />
            </div>
        </div>
    )
}

export default Principal

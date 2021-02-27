import React from 'react';
import '../css/Proyectos.css';

const Proyectos = () => {
    return (
        <div>
            <div className="row mt-5 mb-3">
                <div className="col-sm-12 col-md-4" id="titleproyectos">
                    <p className="h2 font-weight-bold">Proyectos</p>
                </div>
                <div className="col-sm-12 col-md-8">
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-1 col-md-2"></div>

                
                <div className=" col-md-3 border divproyecto">
                        <a href="https://github.com/JavierSR99/FUT-STATS" target="_blank" rel="noreferrer">
                        <div className="row">
                            <div className="col-12">
                                
                                    <p className="h4 font-weight-bold"> FUT STATS </p> 
                                
                            </div>
                            <div className="col-12">
                                <p className="textproyect"> 
                                    Una app web para visualizar estadísticas de jugadores de fútbol
                                    que permite dejar valoraciones y comentarios entre usuarios.
                                    Desarrollada en Vue.js (front) y PHP (back).
                                </p>
                            </div>
                            
                        </div>
                        </a>
                </div>
                
                <div className="col-2"></div>

                <div className="col-md-3 border divproyecto">
                    <a href="https://github.com/JavierSR99/Music-Shop-J-s-Zone" target="_blank"
                            rel="noreferrer">
                    <div className="row">
                        <div className="col-12">
                            
                                <p className="h4 font-weight-bold"> J'S ZONE MUSIC SHOP </p>
                            
                        </div>
                        <div className="col-12">
                            <p className="textproyect"> 
                                Tienda de CDs en la que se puede simular una compra por 
                                saldo y visualizar categorías musicales. Desarrollada 
                                íntegramente en PHP y MySQL.
                            </p>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Proyectos

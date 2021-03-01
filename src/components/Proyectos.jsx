import React from 'react';
import '../css/Proyectos.css';
import IconProyecto from '../icons/project-management.png';

const Proyectos = () => {
    return (
        <div>
            <div className="row mt-5 mb-3">
                <div className="col-md-2"></div>
                <div className="col-sm-12 col-md-4" id="titleproyectos">
                    <p className="h2 font-weight-bold">
                        Proyectos
                        <img src={IconProyecto} alt="icono-proyectos" id="iconoproject" />
                    </p>
                    
                </div>
                <div className="col-sm-12 col-md-8">
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-1 col-md-2"></div>

                
                <div className=" col-md-3 col-10 border divproyecto" id="firstproyect">
                        <a href="https://github.com/JavierSR99/FUT-STATS" target="_blank" rel="noreferrer">
                        <div className="row">
                            <div className="col-12">
                                
                                    <p className="h4 font-weight-bold namepro"> FUT STATS </p> 
                                
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
                
                <div className="col-1 col-md-2"></div>

                <div className="col-1" id="desaparece"></div>

                <div className="col-md-3 col-10 border divproyecto">
                    <a href="https://github.com/JavierSR99/Music-Shop-J-s-Zone" target="_blank"
                            rel="noreferrer">
                    <div className="row">
                        <div className="col-12">
                            
                                <p className="h4 font-weight-bold namepro"> J'S ZONE MUSIC SHOP </p>
                            
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

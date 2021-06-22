import React from 'react';
import '../css/Proyectos.css';
import IconProyecto from '../icons/project-management.png';
import FUTStats from '../img/FUT_STATS.png';
import JSZone from '../img/js_zone.png';
import GitHub from '../img/github.png';

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

                
                <div className=" col-md-3 col-10" id="firstproyect">

                        <div className="card iconostecno" style={{width: 18 + 'rem'}}>
                        <div className="card-header">
                            FUT STATS
                        </div>
                            <img src={FUTStats} className="card-img-top" alt="FUT_STATS_img" />
                            <div className="card-body">
                                <p className="card-text">
                                Una app web para visualizar estadísticas de jugadores de fútbol
                                    que cuenta con un sistema de valoraciones 
                                    y comentarios entre usuarios.
                                    Desarrollada en Vue.js, PHP, MySQL y Vuetify.
                                </p>
                                <a href="https://github.com/JavierSR99/FUT-STATS" className="githuba" 
                                    target="_blank" rel="noreferrer">
                                    <img src={GitHub} alt="repositorio_github" className="icogit" />
                                </a>
                            </div>
                        </div>
                </div> 

                

                
                
                <div className="col-1 col-md-2"></div>

                <div className="col-1" id="desaparece"></div>

                <div className=" col-md-3 col-10" id="firstproyect">

                        <div className="card iconostecno" style={{width: 18 + 'rem'}}>
                        <div className="card-header">
                            J's Zone Music Shop
                        </div>
                            <img src={JSZone} className="card-img-top" alt="FUT_STATS_img" />
                            <div className="card-body">
                                <p className="card-text">
                                    Tienda de CDs en la que se puede simular una compra por 
                                    saldo y visualizar categorías musicales. Desarrollada 
                                    íntegramente en PHP y MySQL.
                                </p>
                                <a href="https://github.com/JavierSR99/Music-Shop-J-s-Zone" className="githuba" 
                                    target="_blank" rel="noreferrer">
                                    <img src={GitHub} alt="repositorio_github" className="icogit" />
                                </a>
                            </div>
                        </div>
                </div> 
            </div>
        </div>
    )
}

export default Proyectos

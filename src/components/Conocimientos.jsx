import React from 'react';
import '../css/Conocimientos.css';
import Vue from '../img/vue.png';
import Reactpng from '../img/react.png';
import PHP from '../img/php.png';
import Bootstrapng from '../img/bootstrap.png';
import Photoshop from '../img/photoshop.png';
import Git from '../img/git.png';
import MySQL from '../img/mysql.png';

const Conocimientos = () => {
    return (
        <div>
            <div className="row mt-5">
                <div className="col-sm-12 col-md-4" id="titletecno">
                    <p className="h2 font-weight-bold">Tecnologías</p>
                </div>
                <div className="col-sm-12 col-md-8">
                </div>
            </div>

            <div className="row" id="medbig">
                <div className="col-xl-2 col-md-1 col-lg-1 col-1">

                </div>
                <div className="col-10 col-md-10 col-lg-10 col-xl-8 border iconostecno">
                    <img src={Vue} alt="vue.js" className="img-fluid" id="vuepng" />
                    <img src={Reactpng} alt="react.js" className="img-fluid" id="reactpng" />
                    <img src={PHP} alt="php" className="img-fluid" id="phppng" />
                    <img src={Bootstrapng} alt="bootstrap" className="img-fluid" id="bootstrappng" />
                    <img src={MySQL} alt="mysql" className="img-fluid" id="mysqlpng" />
                    <img src={Photoshop} alt="photoshop" className="img-fluid" id="photopng" />
                    <img src={Git} alt="git" className="img-fluid" id="gitpng" />
                    
                </div>
                <div className="col-xl-2 col-lg-1 col-md-1">

                </div>
            </div>

            <div className="row" id="mglittle">
                <div className="col-1"></div>
                <div className="col-10 iconostecno">
                    <div className="row">
                        <div className="col-6">
                            <img src={Vue} alt="vue.js" className="img-fluid mx-auto d-block" id="vuepng" />
                        </div>
                        <div className="col-6">
                            <img src={Reactpng} alt="react.js" className="img-fluid mx-auto d-block" id="reactpng" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <img src={PHP} alt="php" className="img-fluid mx-auto d-block" id="phppng" />
                        </div>
                        <div className="col-6">
                            <img src={Bootstrapng} alt="bootstrap" className="img-fluid mx-auto d-block" id="bootstrappng" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <img src={Photoshop} alt="photoshop" className="img-fluid mx-auto d-block" id="photopng" />
                        </div>
                        <div className="col-6">
                            <img src={Git} alt="git" className="img-fluid mx-auto d-block" id="gitpng" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <img src={MySQL} alt="mysql" className="img-fluid mx-auto d-block" id="mysqlpng" />
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    )
}

export default Conocimientos

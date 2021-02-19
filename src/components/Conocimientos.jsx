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

            <div className="row">
                <div className="col-xl-2 col-md-1 col-lg-1">

                </div>
                <div className="col-12 col-md-10 col-lg-10 col-xl-8 border" id="iconostecno">
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
        </div>
    )
}

export default Conocimientos

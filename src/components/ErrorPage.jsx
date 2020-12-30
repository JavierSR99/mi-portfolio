import React from 'react';
import '../css/Error.css';
import '../css/Divppal.css';
import Cora from '../img/img_error.png';

const ErrorPage = () => {
    return (
        <div className="container" id="divppal">
            <div className="row text-center align-items-center pt-2" id="errortext">
                <div className="col-12">
                    <h1>404 NOT FOUND</h1>
                </div>
                <div className="col-12">
                    <img src={Cora} alt="img error" className="img-fluid" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-12 text-center">
                    <button className="btn btn-primary">Go To Page</button>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage

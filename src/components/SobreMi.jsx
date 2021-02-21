import React from 'react';
import '../css/SobreMi.css';

const SobreMi = () => {
    return (
        <div className="mt-4" id="sobremippal">
            <div className="row mt-5">
                <div className="col-2"></div>
                <div className="col-sm-12 col-md-4" id="titlesobremi">
                    <p className="h2 font-weight-bold">Sobre Mí</p>
                </div>
                <div className="col-sm-12 col-md-8">
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 col-1"></div>
                <div className="col-md-8 col-10" id="textsobremi">
                    <p>
                        Desde bien pequeño he estado interesado en los videojuegos y la informática,
                        siempre con la curiosidad del cómo estarán construidos y desarrollados. Durante
                        mis años de instituto pude iniciarme en lenguajes de marcas como HTML y XML,
                        creando páginas web muy básicas y estáticas, con un pequeño añadido de CSS. Desde
                        entonces también he estado aprendiendo edición de fotos y vídeos por mi propia cuenta.
                        <br/> <br/>
                        Fue así como me decidí a estudiar desarrollo web, permitiéndome conocer al completo
                        tecnologías como PHP, JavaScript, MySQL, etc. Lo que empezó como un simple pasatiempo
                        por pura curiosidad ha acabado siendo una de mis grandes pasiones, con la suerte de 
                        poder dedicarme a ello.
                        <br/> <br/>
                        También es esa constante sensación de no conocer absolutamente nada a pesar de saber mucho
                        la que me lleva a estudiar lenguajes nuevos, frameworks y librerías, como bien pueden ser 
                        Vue.js o React.js.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SobreMi

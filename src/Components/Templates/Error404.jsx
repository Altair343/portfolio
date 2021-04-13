import React from 'react';
import { NavLink } from 'react-router-dom';
import imgerror from '../../Assets/img/error.png'
const Error404 = () => {
    
    return (
        <div className="content-Page errorData">
            <div id="content-img" className="contenedor-imagen">
                <img src={imgerror} alt="error" className="imagen" />
            </div>

            <div className="content-error">
                <div className="error">
                    <p>404</p>
                </div>
                <div className="mensaje">
                    <p>An error has occurred, the page you are looking for does not exist
                    return to </p>
                </div>
                <div className="content-enlace">
                    <NavLink exact to={`/`}>
                        <h1>
                            <span className="m">H</span>
                            <span className="m">o</span>
                            <span className="m">m</span>
                            <span className="m">e</span>
                        </h1>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Error404;
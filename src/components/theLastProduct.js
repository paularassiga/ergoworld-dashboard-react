import React from 'react';
import imagenFondo from '../assets/images/base-laptop.jpg';

function theLastProduct(props){
    return(
        <React.Fragment>
           <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" producto ergoworld "/>
                    </div>
                    <p>{props.name}</p>
                    <p>{props.shortDescription}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del producto</a>
                </div>
        </React.Fragment>
    )
}
export default theLastProduct;
import React from 'react';

function Products(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4 d-flex align-items-stretch">
                <div className="card text-white bg-dark  shadow">
                <img class="card-img-top" src={props.image} alt="Card cap"/>
                    <div className="card-body">

                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.description}</p>
                    <a href={props.detail} class="btn btn-primary">Ver detalles</a>
                        
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Products;
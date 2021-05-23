import React, {Component} from 'react';

class LastProduct extends Component {

    constructor(props){
        super(props);
        this.state = {
			lastProduct: []
        }
    }

    componentDidMount(){
        fetch(`/api/products/ultimoProductoCreado`).then(x=>{
            return x.json()
        }).then(lastProduct=>{
            console.log(lastProduct)
            this.setState({
                lastProduct : lastProduct.products[0]
            })
        }).catch(error=>console.log(error))
    }
    render (){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto creado: {this.state.lastProduct.name}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={this.state.lastProduct.image} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>{this.state.lastProduct.description}</p>
                </div>
            </div>
        </div>
    )
}}

export default LastProduct;


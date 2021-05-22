import React, {
    useState,
    useEffect,
    Component
} from 'react';
import imagenFondo from '../assets/images/base-laptop.jpg';

class LastUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastUser: []
        }
    }
    componentDidMount() {
        fetch(`/api/users/lastCreatedUser`, ).then(x => {
            return x.json()
        }).then(lastUser => {
            console.log(lastUser)
            this.setState({
                lastUser: lastUser.users[0]
            })
        }).catch(error => console.log(error))
    }






render(){
    return ( 
    
    <div className = "col-lg-6 mb-4" >
        <div className = "card shadow mb-4" >
        <div className = "card-header py-3" >
        <h5 className = "m-0 font-weight-bold text-gray-800" > Último usuario creado: {this.state.lastUser.name} 
        
        </h5> </div> <div className = "card-body" >
        <div className = "text-center" >
        <img className = "img-fluid px-3 px-sm-4 mt-3 mb-4"
        style = {
            {
                width: 40 + 'rem'
            }
        }
        src = {
            this.state.lastUser.image
        }
        alt = " Star Wars - Mandalorian " / >
        </div> <p > Email: {this.state.lastUser.email} </p>  <a className = "btn btn-danger"
        target = "_blank"
        rel = "nofollow"
        href = {this.state.lastUser.detail}> Ver detalle del usuario < /a> </div> </div> </div>
    )
}}

export default LastUser;
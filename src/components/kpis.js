import React, {useState,  useEffect} from 'react';
import SmallCard from './SmallCard';


/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */



function Kpis(){

    const [productList, setProductList] = useState([]);

     useEffect( ()=> {
        fetch('/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(data =>{
            setProductList(data)
        })
        .catch(error => console.log(error))
    },[])

    const [userList, setUserList] = useState([]);

    useEffect( ()=> {
       fetch('/api/users')
       .then(respuesta =>{
           return respuesta.json()
       })
       .then(data =>{
            setUserList(data)
       })
       .catch(error => console.log(error))
   },[])


   
    let moviesInDB = {
        title: 'Total de productos',
        color: 'primary', 
        cuantity: productList.count,
        icon: 'fa-clipboard-list'
    }
    
    /* <!-- Total awards --> */
    
    let totalAwards = {
        title:' Total de categorías', 
        color:'success', 
        cuantity: productList.countByCategory ? Object.values(productList.countByCategory).length : 0 ,
        icon:'fa-award'
    }
    
    /* <!-- Actors quantity --> */
    
    let actorsQuantity = {
        title:'Total de usuarios' ,
        color:'warning',
        cuantity: userList.users ? userList.users.length : 0,
        icon:'fa-user-check'
    }
    
    let cartProps = [moviesInDB, totalAwards, actorsQuantity];
    

    return (
    
        <div className="row">
            { console.log('test', userList )}
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
         
    )
}

export default Kpis;


import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { traerProducto } from '../../utils/promesas';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    
    const { id } = useParams();
    const [producto, setProducto] = useState({})
    

    useEffect(() =>{
        traerProducto(id)
            .then((res)=>{setProducto(res)})
            .catch(console.log('Error'))
    }, [id])
    console.log(producto)
    return (
        <ItemDetail producto={producto}/>
    )
}

export default ItemDetailContainer;
import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { traerProducto } from '../../utils/promesas';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    const { id } = useParams();

    useEffect(() =>{
        traerProducto(id)
            .then((res)=>{setProducto(res)})
    }, [id])
    
    return (
        <ItemDetail producto={producto}/>
    )
}

export default ItemDetailContainer;
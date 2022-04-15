import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { traerProducto } from '../../utils/promesas';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    useEffect(() =>{
        traerProducto()
            .then((res)=>{setProducto(res)})
    }, [])

    return (
        <>
            <ItemDetail producto={producto}/>
        </>
    )
}

export default ItemDetailContainer;
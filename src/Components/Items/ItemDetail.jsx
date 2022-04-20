import React from 'react'
import { useState } from 'react'
import s from './ItemDetail.module.css'
import ItemCount from './ItemCount'
import CartButton from '../Cart/CartButton'


const ItemDetail = ({producto}) => {
    
    const [number, setNumber] = useState(0)


    const addToCart = (cantidad) => {
        setNumber(cantidad)
    }
    return (
        <div className={s.div1}>
            <img className={s.img} src={producto.imagen} alt={producto.nombre} />
            <div>
                <h1>{producto.nombre}</h1>
                <h2>{producto.precio}</h2>
                {
                    number === 0 ? <ItemCount stock={producto.stock} addToCart={addToCart}></ItemCount> : <CartButton/>
                }
                <p>{producto.descripcion}</p>
            </div>
        </div>
    )
}

export default ItemDetail;
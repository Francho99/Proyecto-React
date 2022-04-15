import React from 'react'
import s from './ItemDetail.module.css'
import ItemCount from './ItemCount'


const ItemDetail = ({producto}) => {
    return (
        <div className={s.div1}>
            <img className={s.img} src={producto.imagen} alt={producto.nombre} />
            <div>
                <h1>{producto.nombre}</h1>
                <h2>{producto.precio}</h2>
                <ItemCount stock={producto.stock}></ItemCount>
                <p>{producto.descripcion}</p>
            </div>
        </div>
    )
}

export default ItemDetail;
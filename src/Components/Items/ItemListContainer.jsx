import React, { useEffect, useState } from "react";
import promesas from "../../utils/promesas";
import ItemList from "./ItemList";
import products from "../../utils/products";
import s from "./Item.module.css"


export default function ItemListContainer(){

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        promesas(3000, products)
        .then(resultado => setProductos(resultado))
        .catch(error => console.log(error))
    }, [productos])

    return(
        <div className={s.divList}>
            <ItemList productos={productos}></ItemList>
        </div>
    )
}
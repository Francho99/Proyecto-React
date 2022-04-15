import React, { useEffect, useState } from "react";
import promesas from "../../utils/promesas";
import ItemList from "./ItemList";
import products from "../../utils/products";
import s from "./Item.module.css"
import { useParams } from "react-router-dom";


export default function ItemListContainer(){

    const { categoryId } = useParams();

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        promesas(2000, products, categoryId)
        .then(resultado => setProductos(resultado))
        .catch(error => console.log(error))
        .finally(()=>{setLoading(false)})

    }, [productos, categoryId])

    return(
        <div className={s.divList}>
            <h1>{loading}</h1>
            <ItemList productos={productos}></ItemList>
        </div>
    )
}
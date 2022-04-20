import React, { useState} from 'react'
import Button from '@mui/material/Button';
import s from './ItemCount.module.css'

export default function ItemCount({stock, addToCart}) {

    const [count, setCount] = useState(1)

    function add () {
        if(count < stock) { 
        setCount(count + 1);}
    } 
    function subs () {
        if(count > 0){ 
        setCount(count - 1);}
    }
    function handleClick (){
        addToCart(count)
    }
  return (
    <div className={s.div}>
        <Button onClick={subs} variant="contained">-</Button>
        <Button className={s.botononAdd} onClick={handleClick} variant="contained">{count}<p>Comprar</p></Button>        
        <Button onClick={add} variant="contained">+</Button>
    </div>
    
  )
}

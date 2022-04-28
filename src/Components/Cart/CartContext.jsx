import React, { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const[cart, setCart] = useState([]);
    
    const addItem = (item) => console.log(item);
    const removeItem = (item) => console.log(item)
    const clear = () => setCart([])


    return( 
        <CartContext.Provider value={{cart, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider
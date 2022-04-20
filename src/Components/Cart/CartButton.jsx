import React from "react";
import { Button } from "@mui/material";
import { Outlet, Link } from 'react-router-dom';


export default function CartButton() {
    return(
        <>
        <Button as={Link} to={'/cart'}>
            Ir al carrito
        </Button>
        <Outlet></Outlet>
        </>
    )
}
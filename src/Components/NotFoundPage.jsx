import React from "react";
import ErrorIcon from '@mui/icons-material/Error';
import s from './Items/Item.module.css'

export default function NotFoundPage() {
    return(
        <div className={s.NotFound}>
            <ErrorIcon sx={{ fontSize: 100 }}></ErrorIcon>
            <h1>Pagina no encontrada</h1>
        </div>
    )
}
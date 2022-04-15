import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
import s from './Item.module.css'
import Button from '@mui/material/Button'



export default function Item({id, nombre, precio, imagen}) {
  return (
    <div className={s.ItemCard} key={id}>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="200"
            image={imagen}
            alt={nombre}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {precio}
            </Typography>
        </CardContent>
        <CardActions>
            <ItemCount stock={10}></ItemCount>
            
        </CardActions>
        <Button variant="contained" className={s.Button}>Ver detalle</Button>
        </Card>
    </div>
  );
}
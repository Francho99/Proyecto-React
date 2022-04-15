import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
import s from './Item.module.css'
import Button from '@mui/material/Button'
import { Outlet, Link } from 'react-router-dom';



export default function Item({id, nombre, precio, imagen, stock}) {
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
            <ItemCount stock={stock}></ItemCount>
        </CardActions>
        <Button as={Link} to={`/item/${id}`} variant="outlined" size='large'>Ver detalle</Button>
        </Card>
        <Outlet></Outlet>
    </div>
  );
}
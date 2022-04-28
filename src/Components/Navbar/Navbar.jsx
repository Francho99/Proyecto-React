import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CartWidget from './CartWidget';
import { Outlet, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}> Gamestore </Typography>
              <Button as={Link} to={'/'} color="inherit" sx={{ flexGrow: 0.0001 }}>Home</Button>
              <Button as={Link} to={'/category/consolas'} color="inherit" sx={{ flexGrow: 0.02 }}>Consolas</Button>
              <Button as={Link} to={'/category/juegos'} color="inherit" sx={{ flexGrow: 0.02 }}>Juegos</Button>
              <Button as={Link} to={'/category/accesorios'} color="inherit" sx={{ flexGrow: 0.02 }}>Accesorios</Button>
              <Link to={'/cart'}><CartWidget/></Link>
          </Toolbar> 
        </AppBar>
      </Box>

      <section>
        <Outlet></Outlet>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../images/logo.svg';

import { NavLink } from 'react-router-dom';
import '../../styles/HeaderStyles.css';

function Header() {

  const [mobileopen, setmobileopen] = useState(false);


  const handleDrawerToggle = () => {

    setmobileopen(!mobileopen);
  }

  // menu drawer

  const drawer = (
    <Box onclick={handleDrawerToggle} sx={{ textAlign: 'center' }} >

      <Typography color={'goldenrod'} variant='h6' component='div' sx={{ flexGrow: 1 , my: 2  }}  >
      <img src={logo} alt="logo" height={'70px'} width={'200px'} />
      </Typography>

      <ul className='mobile-navigation'>
        <li>
          <NavLink activeClassName= "active" to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>




    </Box>
  );



  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
          <Toolbar >
            <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{ mr: 2, display: { sm: 'none' } }}
              onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>

            <Typography color={'goldenrod'} variant='h6' component='div' sx={{ flexGrow: 1 }}  >
              <img src={logo} alt="logo" height={'70px'} width={'250px'} />
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className='navigation-menu'>
                <li>
                  <NavLink activeClassName="active" to={"/"}>Home</NavLink >
                </li>
                <li>
                  <NavLink  to={"/menu"}>Menu</NavLink >
                </li>
                <li>
                  <NavLink  to={"/about"}>About</NavLink >
                </li>
                <li>
                  <NavLink  to={"/contact"}>Contact</NavLink >
                </li>
              </ul>

            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer varient="temperory" open={mobileopen} onClose={handleDrawerToggle}
            sx={{ display: { xs: 'block', sm: 'none' }, "& .MuiDrawer-paper":{
              boxSizing: 'border-box',
              width : "240px"
            } }} >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </>
  )
}

export default Header

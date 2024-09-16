import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Avatar from '@mui/material/Avatar';

const Filter = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); // Added state to track drawer open/close

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen); // Toggle the drawer state
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: '20px' }}>
      <AppBar position="static">
        <Toolbar>
          {/* Menu Icon for mobile view */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ mr: 2, display: { xs: 'block', sm: 'none' }, cursor: 'pointer' }}
          >
            <MenuIcon />
          </IconButton>

          {/* Avatar (logo) */}
          <Avatar alt="Remy Sharp" src="logo123.jpg" sx={{ marginRight: "10px" }} />

          {/* Title */}
          <Typography component="span" variant="body1" className="tittle">
            SMART CALORIE
          </Typography>

          {/* The Box for Menu Items that are aligned to the right */}
          <Box sx={{ display: { xs: 'none', sm: 'block' }, ml: 'auto' }}>  {/* ml: 'auto' pushes it to the right */}
            <IconButton color="inherit" sx={{ mx: 2, cursor: 'pointer' }}>
              <HomeIcon />
              <Typography variant="button" sx={{ mx: 1 }}>Home</Typography>
            </IconButton>
            <IconButton color="inherit" sx={{ mx: 2, cursor: 'pointer' }}>
              <InfoIcon />
              <Typography variant="button" sx={{ mx: 1 }}>About</Typography>
            </IconButton>
            <IconButton color="inherit" sx={{ mx: 2, cursor: 'pointer' }}>
              <BuildIcon />
              <Typography variant="button" sx={{ mx: 1 }}>Services</Typography>
            </IconButton>
            <IconButton color="inherit" sx={{ mx: 2, cursor: 'pointer' }}>
              <ContactMailIcon />
              <Typography variant="button" sx={{ mx: 1 }}>Contact</Typography>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }}>
          <IconButton onClick={toggleDrawer} sx={{ marginLeft: 'auto', display: 'block', cursor: 'pointer' }}>
            <CloseIcon />
          </IconButton>
          <List>
            <ListItem button sx={{ cursor: 'pointer' }}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button sx={{ cursor: 'pointer' }}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button sx={{ cursor: 'pointer' }}>
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button sx={{ cursor: 'pointer' }}>
              <ListItemIcon>
                <ContactMailIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Filter;

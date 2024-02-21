import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100 }}>
            <Toolbar>
                {/* Menu Icon and Sections */}
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" >
                <Button sx={{ color: "white" }} onClick={() => {location.href = '/'}}>Dashboard</Button>
                </Typography>
                <Typography variant="h6" component="div">
                <Button sx={{ color: "white" }} onClick={() => {location.href = '/store'}}>Store</Button>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Button sx={{ color: "white" }} onClick={() => {location.href = '/details'}}>Store</Button>
                </Typography>

                {/* Profile Icon */}
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircleIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

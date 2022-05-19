import React from 'react'
import { Box, Container, Menu, MenuItem, Typography, Button, AppBar, Toolbar, IconButton, Grid, Divider } from '@mui/material';
import ProductsDrop from './ProductsDrop';
import ResourcesDrop from './ResourcesDrop';

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar elevation={0} position="static" sx={{ backgroundColor: "#fff" }}>
                <Toolbar>
                    <Typography sx={{ flexGrow: 1, color: "#000" }}>
                        Ample AI
                    </Typography>
                    <ProductsDrop/>
                    <ResourcesDrop/>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
import React from 'react'
import {Button,Menu,MenuItem} from '@mui/material'
const ProductsDrop = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        if (e.currentTarget.localName !== "ul") {
            const menu = document.getElementById("basic-menu").children[2];
            console.log(document.getElementById("basic-menu").children)
            const menuBoundary = {
                left: menu.offsetLeft,
                top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
                right: menu.offsetLeft + menu.offsetHeight,
                bottom: menu.offsetTop + menu.offsetHeight
            };
            if (
                e.clientX >= menuBoundary.left &&
                e.clientX <= menuBoundary.right &&
                e.clientY <= menuBoundary.bottom &&
                e.clientY >= menuBoundary.top
            ) {
                return;
            }
        }

        setAnchorEl(null);
    };

    const products = ['AutoML Prediction - Make effective business decisions', 'AutoML Classification', 'AutoML Clustering - Gain deep insights about your customers', 'Why Ample AI', 'How it works'];

    return (
        <>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onMouseOver={handleClick}
                style={{ zIndex: 1301 }}
            >
                Products
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    onMouseLeave: (e) => handleClose(e)
                }}
            >
                {
                    products.map(prod => (
                        <MenuItem onClick={handleClose}>{prod}</MenuItem>
                    ))
                }
            </Menu>
        </>
    )
}

export default ProductsDrop
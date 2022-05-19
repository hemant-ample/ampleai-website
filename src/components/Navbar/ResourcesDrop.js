import React from 'react'
import {Button,Menu,MenuItem} from '@mui/material'
const ResourcesDrop = () => {
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
                Resources
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
                <MenuItem onClick={handleClose}>Blog</MenuItem>
                
            </Menu>
        </>
    )
}

export default ResourcesDrop
import React from 'react';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default function HeadBar() {
    return(
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" aria-label="menu">
                        이번달 우리집 전기사용량 조회
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

export default function NavBar() {

    const drawerWidth = 240;

    return(
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Welcome! Please Login Below
                </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

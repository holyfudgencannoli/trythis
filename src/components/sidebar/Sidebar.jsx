
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StarIcon from '@mui/icons-material/Star';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

export default function Sidebar() {
    return(
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar>
                P / Y / L / O / G / G / E / R
            </Toolbar>
            <Divider />
            <List>
                <ListItem>
                    <ListItemIcon>
                        <StarIcon />
                    </ListItemIcon>
                    <Link to={'/task-form'} style={{ textDecoration: 'none', color: 'inherit'}}>
                        <ListItemText primary="New Log" />
                    </Link>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <Link to={'/archive'} style={{ textDecoration: 'none', color: 'inherit'}}>
                        <ListItemText primary="Archive" />
                    </Link>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <Link to={'/archive'} style={{ textDecoration: 'none', color: 'inherit'}}>
                        <ListItemText primary="Inventory" />
                    </Link>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <Link to={'/new-agent-form'} style={{ textDecoration: 'none', color: 'inherit'}}>
                        <ListItemText primary="New Agent" />
                    </Link>
                </ListItem>
            </List>
        
            <Divider />
            <List>
                <ListItem>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <Link to={'/dashboard'} style={{ textDecoration: 'none', color: 'inherit'}}>
                        <ListItemText primary="Home" />
                    </Link>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit'}}>
                        <ListItemText primary="Logout" />
                    </Link>
                </ListItem>
                
            {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItemButton>
                </ListItem>
            ))} */}
            </List>
        </Drawer>
    </Box>
    );
}
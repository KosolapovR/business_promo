import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, MenuItem, Container, Menu} from '@material-ui/core';
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    appBar: {
        background: theme.palette.primary.main
    },
    grow: {
        flexGrow: 1,
    },
    title: {},
    nickname: {
        padding: '20px 7px'
    },
    inputRoot: {
        color: 'inherit',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        padding: 0,
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const TopNav = () => {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-account-menu';

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem>Выйти из приложения</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-account-menu-mobile';

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>Выйти из приложения</MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.appBar}>
                <Container maxWidth='lg'>
                    <Toolbar disableGutters={true}>
                        <Typography
                            className={classes.title}
                            variant="h6"
                            noWrap
                        >
                            MY FIRST WS CHAT
                        </Typography>
                        <div className={classes.grow}/>
                        <List component="nav" className={classes.sectionDesktop} aria-label="mailbox folders">
                            <ListItem button>
                                <Link to="/authors">
                                    <ListItemText primary="Авторы"/>
                                </Link>
                            </ListItem>
                            <Divider orientation='vertical' flexItem/>
                            <ListItem button>
                                <Link to="/books">
                                    <ListItemText primary="Книги"/>
                                </Link>
                            </ListItem>
                        </List>

                        <div className={classes.sectionMobile}>
                            Секция моб
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
};


export default TopNav;
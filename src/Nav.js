import React, { Fragment }  from 'react';
import { makeStyles, AppBar, Typography, Grid, Toolbar, Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem, Box } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    titleGridItem: {
        paddingTop: 10,
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
            marginBottom: theme.spacing(1)
        },
    },
    title: {
        textDecoration: 'none',
        color: 'inherit',
        margin: theme.spacing(1),
        fontFamily: 'Neucha',
    },
    tabsGridItem: {
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'space-evenly',
            marginBottom: theme.spacing(2),
        },
        flexWrap: 'nowrap',
    },
    tab: {
        fontSize: '18px',
        fontFamily: 'Neucha',
        textDecoration: 'none',
        color: 'white',
        borderBottom: '1px solid transparent',
        '&:hover': {
            borderBottom: '1px solid white'
        },
        boxSizing: 'border-box',
        padding: theme.spacing(0, 2),
        margin: theme.spacing(0, 4),
        justifyContent: 'center',
        [theme.breakpoints.down('xs')] : {
            margin: theme.spacing(0, 2),
        }
    },
    tabHome: {
        color: theme.palette.primary.main,
    },
    tabSelected: {
        borderBottom: '1px solid white',
    },
    paper: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
    },
    paperHome: {
        backgroundColor: "transparent",
        color: theme.palette.primary.main,
    },
    headerSpacer: theme.mixins.toolbar,
}));

function Nav() {
    const classes = useStyles();
    let { pathname } = useLocation();

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        close();
    };

    const close = () => {
        setOpen(false);
    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    return (
        <Fragment>
            <AppBar position="absolute" color={pathname === "/" ? "transparent" : "primary"} elevation={0} >
                <Toolbar>
                    <Grid container alignItems="center" direction="row" >
                        <Grid item container xs={12} sm={3} className={classes.titleGridItem} >
                            <Typography className={classes.title} variant="h5" color="primary" component={Link} to="/" >TAYLOR VONK</Typography>
                        </Grid>
                        <Grid item container xs={12} sm={9} justify="flex-end" className={classes.tabsGridItem}>
                            <Box
                                display="flex"
                                ref={anchorRef}
                                aria-controls={open ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handleOpen}
                                to="/projects"
                                component={Link}
                                onClick={close}
                                className={clsx({
                                    [classes.tab] : true,
                                    [classes.tabSelected] : pathname === '/projects',
                                    [classes.tabHome] : pathname === "/",
                                })}
                            >
                                Projects
                            </Box>
                            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal onMouseLeave={handleClose}
                            >
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                    >
                                        <Paper
                                            className={clsx({
                                                [classes.paperHome] : pathname === "/",
                                                [classes.paper] : pathname !== "/",
                                        })}>
                                            <ClickAwayListener onClickAway={close}>
                                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                    <MenuItem to="/projects/personal-website" component={Link} onClick={handleClose}>Personal Website</MenuItem>
                                                    <MenuItem to="/projects/art-website" component={Link} onClick={handleClose}>Art Website</MenuItem>
                                                    <MenuItem to="/projects/puzzle-stats" component={Link} onClick={handleClose}>Puzzle Stats</MenuItem>
                                                    <MenuItem to="/projects/zumolyzer" component={Link} onClick={handleClose}>Zumolyzer</MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                            <Box
                                display="flex"
                                to="/resume"
                                component={Link}
                                onClick={handleClose}
                                onMouseEnter={handleClose}
                                className={clsx({
                                    [classes.tab] : true,
                                    [classes.tabSelected] : pathname.startsWith('/resume'),
                                    [classes.tabHome] : pathname === "/",
                                })}
                            >
                                Resume
                            </Box>
                            <Box
                                display="flex"
                                to="/about"
                                component={Link}
                                onClick={handleClose}
                                onMouseEnter={handleClose}
                                className={clsx({
                                    [classes.tab] : true,
                                    [classes.tabSelected] : pathname.startsWith('/about'),
                                    [classes.tabHome] : pathname === "/",
                                })}
                            >
                                About
                            </Box>
                        </Grid>
                    </Grid> 
                </Toolbar>
            </AppBar>
            <div className={classes.headerSpacer}></div>
        </Fragment>
    )
}

export default Nav;
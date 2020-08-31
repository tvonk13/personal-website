import React, { Fragment }  from 'react';
import { makeStyles, AppBar, Tabs, Tab, Typography, Grid, Toolbar } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    titleGridItem: {
        paddingTop: 10
    },
    title: {
        textDecoration: 'none',
        color: 'inherit',
        margin: theme.spacing(1),
        fontFamily: 'Neucha',
    },
    tab: {
        fontSize: '18px',
        fontFamily: 'Neucha'
    },
    headerSpacer: theme.mixins.toolbar,
}));

function Nav() {
    const styles = useStyles();
    let { pathname } = useLocation();
    if (pathname.startsWith("/projects")) pathname = "/projects";

    return (
        <Fragment>
            <AppBar position="absolute" color={pathname === "/" ? "transparent" : "primary"} elevation={0} >
                <Toolbar>
                    <Grid container alignItems="center" justify="space-between" direction="row" >
                        <Grid item className={styles.titleGridItem} >
                            <Typography className={styles.title} variant="h5" color="primary" component={Link} to="/" >TAYLOR VONK</Typography>
                        </Grid>
                        <Grid item>
                            <Tabs value={pathname === "/" ? false : pathname} indicatorColor="secondary" >
                                <Tab to="/projects" component={Link} label="Projects" value="/projects" className={styles.tab} />
                                <Tab to="/resume" component={Link} label="Resume" value="/resume" className={styles.tab} />
                                <Tab to="/about" component={Link} label="About" value="/about" className={styles.tab} />
                            </Tabs>
                        </Grid>
                    </Grid> 
                </Toolbar>
            </AppBar>
            <div className={styles.headerSpacer}></div>
        </Fragment>
    )
}

export default Nav;
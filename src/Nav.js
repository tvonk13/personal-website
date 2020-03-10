import React, { Fragment }  from 'react';
import { Link, useLocation } from "react-router-dom";
import { makeStyles, AppBar, Tabs, Tab, Typography, Grid, Toolbar } from "@material-ui/core";

const useStyles = makeStyles(themeObject => ({
    titleGridItem: {
        paddingTop: 10
    },
    title: {
        textDecoration: 'none',
        color: 'inherit',
        margin: '1rem',
        fontFamily: 'Neucha',
    },
    tab: {
        fontSize: '18px',
        fontFamily: 'Neucha'
    },
    headerSpacer: themeObject.mixins.toolbar,
}));

function Nav() {
    const styles = useStyles();
    const { pathname } = useLocation();

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
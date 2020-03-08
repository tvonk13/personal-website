import React, { useState }  from 'react';
import { Link, useLocation } from "react-router-dom";
import { makeStyles, AppBar, Tabs, Tab, Typography, Grid } from "@material-ui/core";

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
    }
}));

function Nav() {
    const styles = useStyles();
    const [tabValue, setTabValue] = useState(false);
    const { pathname } = useLocation();

    function tabHelper(value) {
        setTabValue(value);
    }

    return (
        <AppBar position="absolute" color={pathname == "/" ? "transparent" : "primary"} elevation={0} >
            <Grid container alignItems="center" justify="space-between" direction="row" >
                <Grid item className={styles.titleGridItem} >
                    <Typography className={styles.title} variant="h5" color="primary" component={Link} to="/" >TAYLOR VONK</Typography>
                </Grid>
                <Grid item>
                    <Tabs value={pathname == "/" ? false : pathname} indicatorColor="secondary" >
                        <Tab to="/resume" component={Link} label="Resume" value="/resume" className={styles.tab} />
                        <Tab to="/about" component={Link} label="About" value="/about" className={styles.tab} />
                    </Tabs>
                </Grid>
            </Grid> 
        </AppBar>
    )
}

export default Nav;
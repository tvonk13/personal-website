import React, { Fragment } from "react";
import { useLocation } from 'react-router-dom';
import { makeStyles, Box, Grid } from "@material-ui/core";
import Treeline from './assets/treeline-short.svg';
import GitHub from './GitHub.js';
import LinkedIn from './LinkedIn.js';
import Email from './Email.js';

const useStyles = makeStyles(themeObject => ({
    footer: {
        backgroundImage: `url(${Treeline})`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'contain',
        color: 'white',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        height: '120px',
    },
    footerContent: {
        position: 'relative',
        bottom: 0,
        paddingBottom: 15,
        width: '100%',
    },
    footerGrid: {
        width: '100%',
        margin: '0'
    }
}));

function Footer() {
    const styles = useStyles();
    const { pathname } = useLocation();

    return(
        <Fragment>
            <div className={styles.footer} style={pathname == "/" ? {display: "none"} : {position: "relative", opacity: 0} }></div>
            <div className={styles.footer} >
                <Box className={styles.footerContent}>
                    <Grid container justify="center" spacing={2} className={styles.footerGrid}>
                        <Grid item>
                            <LinkedIn color="light" />
                        </Grid>
                        <Grid item>
                            <GitHub color="light" />
                        </Grid>
                        <Grid item>
                            <Email color="light" />
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </Fragment>
    );
}

export default Footer;
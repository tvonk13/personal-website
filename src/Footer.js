import React from "react";
import { useLocation } from 'react-router-dom';
import { makeStyles, Box, Grid, Link, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import Treeline from './assets/treeline.svg';
import LinkedIn from './assets/linkedin.svg';
import Email from './assets/email.svg';

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
        position: 'absolute',
        bottom: 0,
        paddingBottom: 15,
        width: '100%',
    },
    footerGrid: {
        width: '100%',
        margin: '0'
    },
    socialLink: {
        textDecoration: "none"
    },
    iconButton: { 
        padding: 0,
    },
    icon: {
        width: '25px',
        height: '25px',
        marginTop: '3px'
    },
}));

function Footer() {
    const styles = useStyles();
    const { pathname } = useLocation();

    return(
        <div className={styles.footer} style={pathname != "/" ? {position: "relative"} : {}}>
            <Box className={styles.footerContent}>
                <Grid container justify="center" spacing={2} className={styles.footerGrid}>
                    <Grid item>
                        <IconButton component={Link} href="https://www.linkedin.com/in/taylor-vonk/" className={styles.iconButton}>
                            <img src={LinkedIn} className={styles.icon} />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton size="small" component={Link} href="https://github.com/tvonk13" color="inherit">
                            <GitHubIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton component={Link} href="" className={styles.iconButton}>
                            <img src={Email} className={styles.icon} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Footer;
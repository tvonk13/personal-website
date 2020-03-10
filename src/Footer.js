import React, { Fragment } from "react";
import { makeStyles, Container } from "@material-ui/core";
import Treeline from './assets/treeline-short.svg';
import SocialIcons from './SocialIcons/SocialIcons.js'

const useStyles = makeStyles(themeObject => ({
    footer: {
        backgroundImage: `url(${Treeline})`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'contain',
        color: 'white',
        height: '150px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    footerContent: {
        paddingTop: '3%'
    }
}));

function Footer() {
    const styles = useStyles();

    return(
        <Fragment>
            <div className={styles.footer}>
                <Container className={styles.footerContent}>
                    <SocialIcons color="light" />
                </Container>
            </div>
        </Fragment>
    );
}

export default Footer;
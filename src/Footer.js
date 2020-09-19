import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import Treeline from './assets/treeline-short.png';
import SocialIcons from './SocialIcons/SocialIcons'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundImage: `url(${Treeline})`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'contain',
        color: 'white',
        height: theme.spacing(20),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    footerContent: {
        paddingTop: theme.spacing(5)
    }
}));

function Footer() {
    const styles = useStyles();

    return(
        <div className={styles.footer}>
            <Container className={styles.footerContent}>
                <SocialIcons color="light" />
            </Container>
        </div>
    );
}

export default Footer;
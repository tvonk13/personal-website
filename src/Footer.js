import React from "react";
import {makeStyles, Container, Grid} from '@material-ui/core';
import Treeline from './assets/treeline-short.png';
import SocialIcons from './SocialIcons/SocialIcons'
import LinkedIn from './SocialIcons/LinkedIn';
import GitHub from './SocialIcons/GitHub';
import Email from './SocialIcons/Email';
import Download from './SocialIcons/Download';

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
                <Grid container justify="center" spacing={2}>
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
            </Container>
        </div>
    );
}

export default Footer;
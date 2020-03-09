import React, { Linking } from 'react';
import { IconButton, Link, makeStyles, Button } from "@material-ui/core";
import EmailDark from './assets/email-dark.svg';
import EmailLight from './assets/email-light.svg';

const useStyles = makeStyles(themeObject => ({
    iconButton: { 
        padding: 0,
      },
      icon: {
        width: '25px',
        height: '25px',
        marginTop: '3px'
      },
}));

function Email({color, email}) {
    const styles = useStyles();

    return (
        <IconButton /* onPress={() => Linking.openURL('mailto:taylor.c.v@gmail.com')} */ className={styles.iconButton}>
            <img src={(color == "light" || color == null ) ? EmailLight : EmailDark} className={styles.icon} />
        </IconButton>
    );
}

export default Email;
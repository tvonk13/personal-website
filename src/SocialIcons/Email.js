import React from 'react';
import { IconButton, makeStyles } from "@material-ui/core";
import EmailDark from '../assets/email-dark.svg';
import EmailLight from '../assets/email-light.svg';

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
        <IconButton className={styles.iconButton} href="mailto:taylor.c.v@gmail.com">
            <img src={(color === "light" || color == null ) ? EmailLight : EmailDark} className={styles.icon} alt="Email"/>
        </IconButton>
    );
}

export default Email;
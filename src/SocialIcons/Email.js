import React from 'react';
import { makeStyles } from "@material-ui/core";
import EmailDark from '../assets/email-dark.svg';
import EmailLight from '../assets/email-light.svg';

const useStyles = makeStyles(themeObject => ({
      icon: {
        width: '25px',
        height: '25px',
        marginTop: '3px'
      },
}));

function Email({color, email}) {
    const styles = useStyles();

    return (
        <a href={email ? email : "mailto:taylor.c.v@gmail.com"} target="_blank" rel="noopener noreferrer">
            <img src={(color === "light" || color == null ) ? EmailLight : EmailDark} className={styles.icon} alt="Email"/>
        </a>
    );
}

export default Email;
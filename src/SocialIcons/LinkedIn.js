import React from 'react';
import { IconButton, Link, makeStyles } from "@material-ui/core";
import LinkedInDark from '../assets/linkedin-dark.svg';
import LinkedInLight from '../assets/linkedin-light.svg';

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

function LinkedIn({color, url}) {
    const styles = useStyles();

    return (
        <IconButton component={Link} href={url != null ? url : "https://www.linkedin.com/in/taylor-vonk/"} className={styles.iconButton}>
            <img src={(color === "light" || color == null ) ? LinkedInLight : LinkedInDark} className={styles.icon} alt="LinkedIn"/>
        </IconButton>
    );
}

export default LinkedIn;
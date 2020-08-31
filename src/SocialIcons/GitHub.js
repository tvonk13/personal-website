import React from 'react';
import { IconButton, Link, makeStyles } from "@material-ui/core";
import GitHubDark from '../assets/github-dark.svg';
import GitHubLight from '../assets/github-light.svg';

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

function GitHub({color, url}) {
    const styles = useStyles();

    return (
        <IconButton component={Link} href={url != null ? url : "https://github.com/tvonk13"} target="_blank" className={styles.iconButton}>
            <img src={(color === "light" || color == null ) ? GitHubLight : GitHubDark} className={styles.icon} alt="GitHub" />
        </IconButton>
    );
}

export default GitHub;
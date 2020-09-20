import React from 'react';
import { makeStyles } from "@material-ui/core";
import GitHubDark from '../assets/github-dark.svg';
import GitHubLight from '../assets/github-light.svg';

const useStyles = makeStyles(themeObject => ({
      icon: {
        width: '25px',
        height: '25px',
        marginTop: '3px'
      },
}));

function GitHub({color, url}) {
    const styles = useStyles();

    return (
        <a href={url != null ? url : "https://github.com/tvonk13"} target="_blank">
            <img src={(color === "light" || color == null ) ? GitHubLight : GitHubDark} className={styles.icon} alt="GitHub" />
        </a>
    );
}

export default GitHub;
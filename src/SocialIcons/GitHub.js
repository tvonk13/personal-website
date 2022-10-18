import React from 'react';
import { makeStyles } from "@material-ui/core";
import GitHubDark from '../assets/github-dark.svg';
import GitHubLight from '../assets/github-light.svg';
import { useSinglePrismicDocument } from "@prismicio/react";

const useStyles = makeStyles(theme => ({
      icon: {
        width: '25px',
        height: '25px',
        marginTop: '3px'
      },
}));

function GitHub({color, url}) {
    const styles = useStyles();
    const [resume] = useSinglePrismicDocument('resume');

    return (
        <a href={url ? url : resume?.data.github.url} target="_blank" rel="noopener noreferrer">
            <img src={(color === "light" || color == null ) ? GitHubLight : GitHubDark} className={styles.icon} alt="GitHub" />
        </a>
    );
}

export default GitHub;
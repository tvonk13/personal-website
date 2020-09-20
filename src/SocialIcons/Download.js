import React from 'react';
import { makeStyles } from "@material-ui/core";
import DownloadIcon from '../assets/download.svg';

const useStyles = makeStyles(themeObject => ({
      icon: {
        width: '25px',
        height: '25px',
        marginTop: '3px'
      },
}));

export default function Download({link, filename}) {
    const classes = useStyles();

    return (
        <a
            href={link}
            target="_blank"
            download={filename}
            rel="noopener noreferrer"
        >
            <img src={DownloadIcon} className={classes.icon} alt="Download"/>
        </a>
    );
}
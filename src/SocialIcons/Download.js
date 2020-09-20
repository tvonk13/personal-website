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

export default function Download({color}) {
    const classes = useStyles();

    return (
        <a
            href="../assets/Vonk-Resume.pdf"
            target="_blank"
            download
        >
            <img src={DownloadIcon} className={classes.icon} alt="Download"/>
        </a>
    );
}
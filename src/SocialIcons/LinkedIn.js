import React from 'react';
import { makeStyles } from "@material-ui/core";
import LinkedInDark from '../assets/linkedin-dark.svg';
import LinkedInLight from '../assets/linkedin-light.svg';

const useStyles = makeStyles(themeObject => ({
      icon: {
          width: '25px',
          height: '25px',
          marginTop: '3px',
      },
}));

function LinkedIn({color, url}) {
    const styles = useStyles();

    return (
        <a href={url != null ? url : "https://www.linkedin.com/in/taylor-vonk/"} target="_blank">
            <img
                src={(color === "light" || color == null ) ? LinkedInLight : LinkedInDark}
                className={styles.icon}
                alt="LinkedIn"
            />
        </a>
    );
}

export default LinkedIn;
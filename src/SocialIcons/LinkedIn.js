import React from 'react';
import { makeStyles } from "@material-ui/core";
import LinkedInDark from '../assets/linkedin-dark.svg';
import LinkedInLight from '../assets/linkedin-light.svg';
import { useSinglePrismicDocument } from "@prismicio/react";

const useStyles = makeStyles(themeObject => ({
      icon: {
          width: '25px',
          height: '25px',
          marginTop: '3px',
      },
}));

function LinkedIn({color, url}) {
    const styles = useStyles();
    const [resume] = useSinglePrismicDocument('resume');

    return (
        <a href={url != null ? url : resume?.data.linkedin.url} target="_blank" rel="noopener noreferrer">
            <img
                src={(color === "light" || color == null ) ? LinkedInLight : LinkedInDark}
                className={styles.icon}
                alt="LinkedIn"
            />
        </a>
    );
}

export default LinkedIn;
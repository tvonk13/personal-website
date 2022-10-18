import React from 'react';
import { makeStyles } from "@material-ui/core";
import EmailDark from '../assets/email-dark.svg';
import EmailLight from '../assets/email-light.svg';
import { useSinglePrismicDocument } from "@prismicio/react";

const useStyles = makeStyles(themeObject => ({
      icon: {
        width: '25px',
        height: '25px',
        marginTop: '3px'
      },
}));

function Email({color, email}) {
    const styles = useStyles();
    const [resume] = useSinglePrismicDocument('resume');

    return (
        <a href={email ? email : resume?.data.email.url} target="_blank" rel="noopener noreferrer">
            <img src={(color === "light" || color == null ) ? EmailLight : EmailDark} className={styles.icon} alt="Email"/>
        </a>
    );
}

export default Email;
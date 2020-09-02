import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import ProfileSmall from '../assets/profile-small.svg';
import SocialIcons from '../SocialIcons/SocialIcons.js'

const useStyles = makeStyles(themeObject => ({
    name: {
      textAlign: 'center',
      fontFamily: 'Neucha'
    },
    profileSmall: {
      height: 150
    },
    location: {
      display: 'inline'
    },
    blurb: {
      marginTop: 10
    }
  }));

function Header() {
    const styles = useStyles();

    return(
      <Grid container direction="column" justify="flex-start" alignItems="center" spacing={1}>

        {/* NAME */}
        <Grid item>
          <Typography variant="h3" className={styles.name}>Taylor Vonk</Typography>
        </Grid>

        {/* PROFILE */}
        <Grid item>
          <img src={ProfileSmall} className={styles.profileSmall} alt="Profile"/>
        </Grid>

        {/* LOCATION */}
        <Grid item>
          <LocationOnRoundedIcon fontSize="small" color="primary" />
          <Typography className={styles.location}>Kirkland, WA</Typography>
        </Grid>

        {/* SOCIAL */}
        <Grid item>
          <SocialIcons color="dark"/>
        </Grid>

        {/* BLURB */}
        <Grid item>
          <Typography variant="body1" className={styles.blurb}>
            <em>
            Driven and creative software engineer who is a great team player and is eager to grow in the field of computer science.
            Enjoys learning through hands-on projects and by working with fellow developers. Has experience using Java,
            JSP, JavaScript and web frameworks to build well designed web applications.
            </em>
          </Typography>
        </Grid>

      </Grid>
    )
}

export default Header;
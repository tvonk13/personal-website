import React from "react";
import { makeStyles, Grid, Box } from "@material-ui/core";
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

function ResumeHeader() {
    const classes = useStyles();

    return(
      <Grid container direction="column" justify="flex-start" alignItems="center" spacing={1}>

        {/* NAME */}
        <Grid item>
            <Box fontFamily="Neucha" fontSize={48} color="primary.main">Taylor Vonk</Box>
        </Grid>

        {/* PROFILE */}
        <Grid item>
          <img src={ProfileSmall} className={classes.profileSmall} alt="Profile"/>
        </Grid>

        {/* LOCATION */}
        <Grid item container justify="center">
          <LocationOnRoundedIcon fontSize="small" color="primary"/>
          <Box fontSize={16} color="primary.main" fontWeight="fontWeightLight" ml={1}>Kirkland, WA</Box>
        </Grid>

        {/* SOCIAL */}
        <Grid item>
          <SocialIcons color="dark"/>
        </Grid>

        {/* BLURB */}
        <Grid item>
            <Box fontSize={16} color="primary.main" fontWeight="fontWeightLight" lineHeight={2} mt={1}>
                Driven and creative software engineer who is a great team player and is eager to grow in the field of computer science.
                Enjoys learning through hands-on projects and by working with fellow developers. Has experience using Java,
                JSP, JavaScript and web frameworks to build well designed web applications.
            </Box>
        </Grid>

      </Grid>
    )
}

export default ResumeHeader;
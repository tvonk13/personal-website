import React from "react";
import { makeStyles, Grid, Box } from '@material-ui/core';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import LinkedIn from '../SocialIcons/LinkedIn';
import GitHub from '../SocialIcons/GitHub';
import Email from '../SocialIcons/Email';
import Download from '../SocialIcons/Download';
import { RichText } from 'prismic-reactjs';

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
    icon: {
        width: '25px',
        height: '25px',
    },
    blurb: {
      marginTop: 10
    }
  }));

function ResumeHeader({data}) {
    const classes = useStyles();

    return(
      <Grid container direction="column" justify="flex-start" alignItems="center" spacing={1}>

        {/* NAME */}
        <Grid item>
            <Box fontFamily="Neucha" fontSize={48} color="primary.main">{data.name}</Box>
        </Grid>

        {/* PROFILE */}
        <Grid item>
          <img src={data.profileImg} className={classes.profileSmall} alt="Profile"/>
        </Grid>

        {/* LOCATION */}
        <Grid item container justify="center">
          <LocationOnRoundedIcon fontSize="small" color="primary"/>
          <Box fontSize={16} color="primary.main" fontWeight="fontWeightLight" ml={1}>{data.location}</Box>
        </Grid>

        {/* SOCIAL */}
        <Grid item container>
            <Grid container justify="center" spacing={1}>
                <Grid item>
                    <LinkedIn color="dark" url={data.linkedIn}/>
                </Grid>
                <Grid item>
                    <GitHub color="dark" url={data.gitHub}/>
                </Grid>
                <Grid item>
                    <Email color="dark" email={data.email}/>
                </Grid>
                <Grid item>
                    <Download link={data.resumePDF.url} filename={data.resumePDF.name}/>
                </Grid>
            </Grid>
        </Grid>

        {/* BLURB */}
        <Grid item>
            <Box fontSize={16} color="primary.main" fontWeight="fontWeightLight" lineHeight={2} mt={1}>
                {RichText.render(data.description)}
            </Box>
        </Grid>

      </Grid>
    )
}

export default ResumeHeader;
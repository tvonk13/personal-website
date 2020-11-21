import React from 'react';
import { makeStyles, Grid, Divider, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
   name: {
       fontSize: '34px',
       color: theme.palette.primary.main,
       fontFamily: 'Neucha',
       [theme.breakpoints.down('xs')]: {
           fontSize: '30px',
       }
   }
}));

function Section({name, children}){
    const classes = useStyles();

    return(
        <Grid container direction='column' wrap='nowrap' spacing={2}>
            <Grid item>
                <Box className={classes.name}>{name}</Box>
                <Divider />
            </Grid>
            <Grid item>
                {children}
            </Grid>
        </Grid>
    );
}

export default Section;
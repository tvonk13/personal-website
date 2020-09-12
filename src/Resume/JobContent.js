import React from 'react';
import {makeStyles, Grid, Box} from "@material-ui/core";
import JobDescription from './JobDescription'

const useStyles = makeStyles(themeObject => ({
    date: {
        width: 110
    },
    description: {
        width: '100%',
        paddingLeft: '10%',
    }
}));

function JobContent({date, title, subtitle, bullets}){
    const classes = useStyles();
    
    return(
        <Grid container direction="row" wrap="nowrap" justify="flex-start" style={{marginBottom: '24px'}}>
            <Grid item className={classes.date}>
                <Box fontSize={18} color="primary.main">{date}</Box>
            </Grid>
            <Grid item className={classes.description}>
                <JobDescription title={title} subtitle={subtitle} bullets={bullets}/>
            </Grid>
        </Grid>
    );
}

export default JobContent;
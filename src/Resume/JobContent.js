import React from 'react';
import {makeStyles, Grid, Box} from "@material-ui/core";
import JobDescription from './JobDescription'

const useStyles = makeStyles(theme => ({
    jobContentContainer: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyItems: 'flex-start',
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        }
    },
    date: {
        width: 110,
        fontSize: 18,
        [theme.breakpoints.down('xs')]: {
            fontSize: 16,
            marginBottom: theme.spacing(2),
            width: '100%',
        }
    },
    description: {
        width: '100%',
        paddingLeft: '10%',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 0,
        }
    },
}));

function JobContent({date, title, subtitle, bullets}){
    const classes = useStyles();
    
    return(
        <Grid container className={classes.jobContentContainer}>
            <Grid item className={classes.date}>
                <Box color="primary.main">{date}</Box>
            </Grid>
            <Grid item className={classes.description}>
                <JobDescription title={title} subtitle={subtitle} bullets={bullets}/>
            </Grid>
        </Grid>
    );
}

export default JobContent;
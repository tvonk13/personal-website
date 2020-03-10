import React from 'react';
import { makeStyles, Typography, Grid } from "@material-ui/core";
import JobDescription from './JobDescription'

const useStyles = makeStyles(themeObject => ({
    date: {
        width: 110
    },
    description: {
        width: '100%',
        paddingLeft: '10%'
    }
}));

function JobContent({date, title, subtitle, bullets}){
    const styles = useStyles();
    
    return(
        <Grid container direction="row" wrap="nowrap" justify="flex-start">
            <Grid item className={styles.date}>
                <Typography variant="h6">{date}</Typography>
            </Grid>
            <Grid item className={styles.description}>
                <JobDescription title={title} subtitle={subtitle} bullets={bullets}/>
            </Grid>
        </Grid>
    );
}

export default JobContent;
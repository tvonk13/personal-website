import React from 'react';
import { makeStyles, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(themeObject => ({

}));

function JobDescription({title, subtitle, bullets}){
    const styles = useStyles();

    var i = 0;
    
    return(
        <Grid container direction="column">
            <Grid item>
                <Typography variant="h6">{title}</Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" ><em>{subtitle}</em></Typography>
            </Grid>
            <Grid item>
                <ul>
                    {bullets.map(bullet => <li key={i++}>{bullet}</li>)}
                </ul>
            </Grid>
        </Grid>
    );
}

export default JobDescription;
import React from 'react';
import { Typography, Grid } from "@material-ui/core";

function JobDescription({title, subtitle, bullets}){
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
                    {bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
                </ul>
            </Grid>
        </Grid>
    );
}

export default JobDescription;
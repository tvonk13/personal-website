import React from 'react';
import { Grid, Box } from "@material-ui/core";

function JobDescription({title, subtitle, bullets}){
    return(
        <Grid container direction="column">
            <Grid item>
                <Box fontSize={20} color="primary.main">{title}</Box>
            </Grid>
            <Grid item>
                <Box fontSize={16} color="primary.main" fontWeight="fontWeightLight" fontStyle="italic">{subtitle}</Box>
            </Grid>
            <Grid item>
                <ul>
                    {bullets.map((bullet, index) => <li key={index} style={{marginBottom: "8px", color: "#37374A"}}><Box fontSize={16} color="primary.main" fontWeight="fontWeightLight">{bullet}</Box></li>)}
                </ul>
            </Grid>
        </Grid>
    );
}

export default JobDescription;
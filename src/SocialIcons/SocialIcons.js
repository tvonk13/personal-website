import React from 'react';
import { Grid } from "@material-ui/core";
import GitHub from './GitHub.js';
import LinkedIn from './LinkedIn.js';
import Email from './Email.js';

function SocialIcons({color}) {
    return (
        <Grid container justify="center" spacing={2}>
            <Grid item>
                <LinkedIn color={color} />
            </Grid>
            <Grid item>
                <GitHub color={color} />
            </Grid>
            <Grid item>
                <Email color={color} />
            </Grid>
        </Grid>
    )
}

export default SocialIcons;
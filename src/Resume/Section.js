import React from 'react';
import { Grid, Divider, Box} from "@material-ui/core";

function Section({name, children}){
    return(
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <Box fontSize={34} color="primary.main" fontFamily="Neucha">{name}</Box>
                <Divider />
            </Grid>
            <Grid item>
                {children}
            </Grid>
        </Grid>
    );
}

export default Section;
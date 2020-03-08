import React from 'react';
import { makeStyles, Typography, Grid, Divider } from "@material-ui/core";

const useStyles = makeStyles(themeObject => ({
    sectionName: {
        fontFamily: 'Neucha'
    }
}));

function Section({name, children}){
    const styles = useStyles();
    
    return(
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <Typography variant="h4" className={styles.sectionName}>{name}</Typography>
                <Divider />
            </Grid>
            <Grid item>
                {children}
            </Grid>
        </Grid>
    );
}

export default Section;
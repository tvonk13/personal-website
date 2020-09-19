import React from 'react';
import { makeStyles, Grid, Fade } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    projectPage: {
        margin: theme.spacing(8, 0, 10, 0),
        flexGrow: 1,
        minHeight: `calc(100vh - ${theme.spacing(28)}px)`,
    },
}));

export default function ProjectPage({children}) {
    const classes = useStyles();
    return (
        <Fade in={true} timeout={500}>
            <Grid container direction="column" className={classes.projectPage}>
                {children}
            </Grid>
        </Fade>
    )
}
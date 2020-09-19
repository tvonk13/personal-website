import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import SectionTitle from './SectionTitle';

const useStyles = makeStyles(theme => ({
    challengesContainer: {
        marginTop: theme.spacing(8),
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(5),
        },
    }
}))

export default function Section({sectionTitle, children}) {
    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.challengesContainer}>
            <Grid container direction="column">
                <SectionTitle sectionTitle={sectionTitle} mb={3} mt={1}/>
                {children}
            </Grid>
        </Container>
    )
}
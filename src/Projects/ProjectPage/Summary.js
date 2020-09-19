import React from 'react';
import { Grid, Box, Container, makeStyles } from '@material-ui/core';
import Paragraph from './Paragraph';
import SectionTitle from './SectionTitle';

const useStyles = makeStyles(theme => ({
    overviewBox: {
        marginTop: theme.spacing(8),
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(5),
        },
    }
}))

export default function Summary({text}) {
    const classes = useStyles();

    return (
        <Box bgcolor="primary.main" py={4} className={classes.overviewBox}>
            <Container maxWidth="md">
                <Grid container direction="column">
                    <SectionTitle sectionTitle="Summary" color="white" mb={2} mt={1}/>
                    {
                        text.map((paragraph, index) => <Paragraph text={paragraph} key={index} mb={2} color="white"/>)
                    }
                </Grid>
            </Container>
        </Box>
    )
}
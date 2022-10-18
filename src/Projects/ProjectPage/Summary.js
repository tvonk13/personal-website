import React from 'react';
import { Grid, Box, Container, makeStyles } from '@material-ui/core';
import Paragraph from './Paragraph';
import SectionTitle from './SectionTitle';
import { PrismicRichText } from "@prismicio/react";

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
        <Box py={4} className={classes.overviewBox}>
            <Container maxWidth="md">
                <Grid container direction="column">
                    <SectionTitle sectionTitle="Summary" mb={2} mt={1}/>
                    <PrismicRichText
                        field={text}
                        components={{
                            paragraph: ({children}) => <Paragraph text={children} mb={2} />
                        }}
                    />
                </Grid>
            </Container>
        </Box>
    )
}
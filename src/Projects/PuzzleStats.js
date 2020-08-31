import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        paddingTop: theme.spacing(4),
        marginBottom: theme.spacing(6),
        flexGrow: 1,
    },
}));

export default function PuzzleStats() {
    const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.container}>
            PUZZLE STATS
        </Container>
    )
}
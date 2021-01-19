import React, { useState, useEffect } from "react";
import { makeStyles, Container, Grid, Fade, Box } from "@material-ui/core";
import Client from './prismic-configuration';
import Prismic from '@prismicio/client';
import RichText from 'prismic-reactjs/src/Component';

const useStyles = makeStyles(theme => ({
    aboutContainer: {
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(4),
        },
        minHeight: `calc(100vh - ${theme.spacing(28)}px)`,
    },
    about: {
        margin: theme.spacing(6, 0, 10, 0),
        flexGrow: 1,
    },
    profileContainer: {
        width: '25vw',
        height: '25vw',
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down('xs')] : {
            width: '50vw',
            height: '50vw',
        }
    },
    profileImg: {
        width: '100%',
        height: '100%',
    }
}));

export default function About() {
    const classes = useStyles();

    const [loaded, setLoaded] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);
    const [about, setAbout] = useState(null);

    useEffect(() => {
        Client.query(Prismic.Predicates.at('document.type', 'about'))
            .then(response => {
                setAbout(response.results[0].data)
                console.log(response.results[0].data)
                setLoaded(true);
            });
    }, []);

    return (
        <>
            {
                about ?
                <Fade in={loaded} timeout={500}>
                    <Container maxWidth="md" className={classes.aboutContainer}>
                        <Grid container justify="center" alignItems="center" direction="column" className={classes.about}>
                            <Grid item className={classes.profileContainer}>
                                <Fade in={imgLoaded} timeout={1000}>
                                    <img src={about.profile.url} onLoad={() => setImgLoaded(true)} className={classes.profileImg} alt="Profile"/>
                                </Fade>
                            </Grid>
                            <Grid item >
                                <Box fontSize={16} color="primary.main" fontWeight="fontWeightLight" mb={3}>
                                    {RichText.render(about.description)}
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Fade>
                :
                <Box height={'100vh'} />
            }
        </>
    );
}
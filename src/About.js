import React, { useState, useEffect } from "react";
import {makeStyles, Container, Grid, Fade, Box} from "@material-ui/core";
import Profile from './assets/profile-full.svg';

const useStyles = makeStyles(theme => ({
    about: {
        paddingTop: theme.spacing(4),
        marginBottom: theme.spacing(6),
        flexGrow: 1,
    },
    profileContainer: {
        width: '30vw',
        height: '30vw',
        maxWidth: '30vw',
        maxHeight: '30vw',
    },
    profileImg: {
        width: '100%',
        height: '100%',
    }
}));

function About() {
    const classes = useStyles();

    const [loaded, setLoaded] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <Fade in={loaded} timeout={500}>
            <Container maxWidth="md" className={classes.about}>
                <Grid container justify="center" alignItems="center" direction="column" spacing={2}>
                    <Grid item className={classes.profileContainer}>
                        <Fade in={imgLoaded} timeout={1000}>
                            <img src={Profile} onLoad={() => setImgLoaded(true)} className={classes.profileImg} alt="Profile"/>
                        </Fade>
                    </Grid>
                    <Grid item>
                        <Box fontSize={16} color="primary.main" fontWeight="fontWeightLight">
                            Hi, I'm Taylor! I'm a Washington-based software engineer working for a tech company located in Boston. I have full-stack experience designing and building
                            Java and JavaScript -based web applications and websites. During off-hours I enjoy deepening my knowledge of
                            web development by working on personal projects like this website!
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box fontSize={16} color="primary.main" fontWeight="fontWeightLight">
                            When I'm not programming, I am an avid climber who loves being in the sun and goofing around on the rocks. A few years ago I was also introduced to the 
                            exciting world of triathlons and have been enjoying training in running, biking, and swimming! When flexing my creative muscles, I like exploring 
                            different mediums, like ink pens and acrylic and oil paint to create abstract artwork inspired by nature. Recently, I have been pursing digital art 
                            as another medium and as a way to expand my repertoire of web development skills.
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Fade>
    );
}

export default About;
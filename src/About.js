import React from "react";
import { makeStyles, Typography, Container, Grid } from "@material-ui/core";
import Profile from './assets/profile-full.svg';

const useStyles = makeStyles(themeObject => ({
    about: {
        paddingTop: 30,
        marginBottom: 50,
        flexGrow: 1,
    },
    profile: {
        height: 500,
        width: 500,
    }
}));

function About() {
    const styles = useStyles();

    return (
        <Container maxWidth="md" className={styles.about}>
            <Grid container justify="center" alignItems="center" direction="column" spacing={2}>
                <Grid item>
                    <img src={Profile} className={styles.profile} alt="Profile"/>
                </Grid>
                <Grid item>
                    <Typography variant="body1" component="p" color="primary">
                        Hi I'm Taylor! I'm a San Francisco-based software engineer working for a tech company located in Boston. I have full-stack experience building
                        Java and JavaScript -based web applications for both internal and customer-facing platforms. During off hours I enjoy deepening my knowledge of 
                        web development by working on personal projects like this website!
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" component="p" color="primary">
                        When I'm not programming, I am an avid climber who loves being in the sun and goofing around on the rocks. A few years ago I was also introduced to the 
                        exciting world of triathlons and have been enjoying training in running, biking, and swimming! When flexing my creative muscles, I like exploring 
                        different mediums, like ink pens and acrylic and oil paint to create abstract artwork inspired by nature. Recently I have been pursing digital art 
                        as another medium and as a way to expand my repetoire of web development skills.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default About;
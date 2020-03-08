import React, { Fragment } from "react";
import { makeStyles, Typography, Container, Grid, Box } from "@material-ui/core";
import Profile from './assets/profile-full.svg';

const useStyles = makeStyles(themeObject => ({
    spacer: themeObject.mixins.toolbar,
    profile: {
        height: 500,
    },
    container: {
        marginBottom: 50,
    }
}));

function About() {
    const styles = useStyles();

    return (
        <Fragment>
            <Box className={styles.spacer}></Box>
            <Container maxWidth="md" className={styles.container}>
                <Grid container justify="center" alignItems="center" alignContent="center" direction="column" spacing={2}>
                    <Grid item>
                        <img src={Profile} className={styles.profile} />
                    </Grid>
                    <Grid item className={styles.blurb}>
                        <Typography variant="body1" component="p" color="primary">
                            Hi I'm Taylor! I'm a San Francisco-based software engineer working for a tech company located in Boston. I have full-stack experience building
                            Java and JavaScript -based web applications for both internal and customer-facing platforms. During off hours I enjoy deepening my knowledge of 
                            web development by working on personal projects like this website!
                        </Typography>
                    </Grid>
                    <Grid item className={styles.blurb}>
                        <Typography variant="body1" component="p" color="primary">
                            When I'm not programming, I am an avid climber who loves being in the sun and goofing around on the rocks. A few years ago I was also introduced to the 
                            exciting world of triathlons and have been enjoying training in running, biking, and swimming! When flexing my creative muscles, I like exploring 
                            different mediums, like ink pens and acrylic and oil paint to create abstract artwork inspired by nature. Recently I have been pursing digital art 
                            as another medium and as a way to expand my repetoire of web development skills.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    );
}

export default About;
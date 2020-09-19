import React from 'react';
import {Container, makeStyles, Grid, Fade} from '@material-ui/core';
import ProjectCard from "./ProjectCard";
import PersonalWebsiteCard from '../assets/projects/personal-website-card.png';
import ArtWebsiteCard from '../assets/projects/art-website-card.png';
import PuzzleStatsCard from '../assets/projects/puzzle-stats-card.png';
import ZumolyzerCard from '../assets/projects/zumolyzer-card.png';

const useStyles = makeStyles(theme => ({
    projectsContainer: {
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(5),
        },
    },
    projects: {
        margin: theme.spacing(4, 0, 10, 0),
        flexGrow: 1,
    },
    projectCard: {
        [theme.breakpoints.down('xs')]: {
            marginBottom: theme.spacing(4),
        },
    }
}));
export default function Projects() {
    const classes = useStyles();
    return (
        <Fade in={true} timeout={500}>
            <Container maxWidth="md" className={classes.projectsContainer}>
                    <Grid container direction="column" className={classes.projects}>
                        <Grid item container justify="space-evenly">
                            <Grid item className={classes.projectCard}>
                                <ProjectCard title="Personal Website" img={PersonalWebsiteCard} tags={["UX", "Front End Dev"]} link="personal-website"/>
                            </Grid>
                            <Grid item className={classes.projectCard}>
                                <ProjectCard title="Art Website" img={ArtWebsiteCard} tags={["UX", "Front End Dev"]} link="art-website"/>
                            </Grid>
                        </Grid>
                        <Grid item container justify="space-evenly">
                            <Grid item className={classes.projectCard}>
                                <ProjectCard title="Puzzle Stats" img={PuzzleStatsCard} tags={["UX", "Front End Dev", "Back End Dev"]} link="puzzle-stats"/>
                            </Grid>
                            <Grid item className={classes.projectCard}>
                                <ProjectCard title="Zumolyzer" img={ZumolyzerCard} tags={["UX"]} link="zumolyzer"/>
                            </Grid>
                        </Grid>
                    </Grid>
            </Container>
        </Fade>
    )
}
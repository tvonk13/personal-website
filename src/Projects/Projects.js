import React from 'react';
import { Container, makeStyles, Grid } from '@material-ui/core';
import ProjectCard from "./ProjectCard";
import PersonalWebsiteCard from '../assets/projects/personal-website-card.png';
import ArtWebsiteCard from '../assets/projects/art-website-card.png';
import PuzzleStatsCard from '../assets/projects/puzzle-stats-card.png';
import ZumolyzerCard from '../assets/projects/zumolyzer-card.png';

const useStyles = makeStyles(theme => ({
    projects: {
        paddingTop: theme.spacing(4),
        marginBottom: theme.spacing(6),
        flexGrow: 1,
    },
}));
export default function Projects() {
    const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.projects}>
            <Grid container direction="column" spacing={5}>
                <Grid item container justify="space-evenly">
                    <Grid item>
                        <ProjectCard title="Personal Website" img={PersonalWebsiteCard} tags={["UX", "Front End Dev"]} link="personal-website"/>
                    </Grid>
                    <Grid item>
                        <ProjectCard title="Art Website" img={ArtWebsiteCard} tags={["UX", "Front End Dev"]} link="art-website"/>
                    </Grid>
                </Grid>
                <Grid item container justify="space-evenly">
                    <Grid item>
                        <ProjectCard title="Puzzle Stats" img={PuzzleStatsCard} tags={["UX", "Front End Dev", "Back End Dev"]} link="puzzle-stats"/>
                    </Grid>
                    <Grid item>
                        <ProjectCard title="Zumolyzer" img={ZumolyzerCard} tags={["UX"]} link="zumolyzer"/>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
        )
}
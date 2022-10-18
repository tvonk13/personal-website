import React from 'react';
import { Container, makeStyles, Fade, Box } from '@material-ui/core';
import ProjectCard from "./ProjectCard";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { orderBy } from 'lodash';

const useStyles = makeStyles(theme => ({
    projectsContainer: {
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(5),
        },
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        minHeight: `calc(100vh - ${theme.spacing(28)}px)`,
    },
}));
export default function Projects() {
    const classes = useStyles();
    const [projects] = useAllPrismicDocumentsByType('project');

    return (
        <Fade in={true} timeout={500}>
            <Container maxWidth="md" className={classes.projectsContainer}>
                <Box display="flex" flexWrap="wrap" justifyContent={{ xs: "center", md: "space-between" }}>
                    {projects && orderBy(projects, ['first_publication_date'], ['desc']).map((project, index) =>
                        <ProjectCard key={index} title={project.data.title[0].text} img={project.data.screenshot.url} tags={project.tags} link={project.uid} />
                    )}
                </Box>
            </Container>
        </Fade>
    )
}
import React from 'react';
import { makeStyles, Grid, Fade } from '@material-ui/core';
import { Header, HeaderImage } from "./Header/Header";
import HeaderPanel from "./Header/HeaderPanel";
import Summary from "./Summary";
import { useParams } from "react-router-dom";
import { usePrismicDocumentByUID } from "@prismicio/react";

const useStyles = makeStyles(theme => ({
    projectPage: {
        margin: theme.spacing(8, 0, 10, 0),
        flexGrow: 1,
        minHeight: `calc(100vh - ${theme.spacing(28)}px)`,
    },
}));

export default function ProjectPage() {
    const { projectUid } = useParams();
    const [project] = usePrismicDocumentByUID('project', projectUid);
    const classes = useStyles();

    return (
        <Fade in={true} timeout={500}>
            <Grid container direction="column" className={classes.projectPage}>
                <Header>
                    <HeaderPanel
                        title={project?.data.title}
                        subtitle={project?.data.short_description}
                        tags={project?.tags}
                        date={project?.data.date}
                        websiteText={project?.data.url_text}
                        websiteUrl={project?.data.url}
                        githubLink={project?.data.github}
                        githubLinkText={project?.data.github_text}
                    />
                    <HeaderImage image={project?.data.screenshot.url} altText={project?.data.screenshot.alt}/>
                </Header>
                <Summary text={project?.data.summary} />
            </Grid>
        </Fade>
    )
}
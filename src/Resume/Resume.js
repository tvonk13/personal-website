import React, { useState, useEffect } from "react";
import { makeStyles, Container, Grid, List, ListItem, Fade, Box } from "@material-ui/core";
import Section from './Section'
import JobContent from "./JobContent";
import KnowledgeItem from "./KnowledgeItem";
import ResumeHeader from "./ResumeHeader";
import Prismic from '@prismicio/client';
import Client from '../prismic-configuration';

const useStyles = makeStyles(theme => ({
    resumeContainer: {
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(5),
        },
        minHeight: `calc(100vh - ${theme.spacing(28)}px)`,
    },
    resume: {
        margin: theme.spacing(6, 0, 10, 0),
        flexGrow: 1,
    },
    resumeItem: {
        marginBottom: theme.spacing(4),
    },
    skillRow: {
        flexDirection: 'row',
        justifyItems: 'flex-start',
        margin: theme.spacing(2, 0, 2, 2),
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        }
    },
}));

export default function Resume() {
    const classes = useStyles();
    const [loaded, setLoaded] = useState(true);
    const [resume, setResume] = useState(null);
    const [headerData, setHeaderData] = useState(null);

    useEffect(() => {
        Client.query(Prismic.Predicates.at('document.type', 'resume'))
            .then(response => setResume(response.results[0].data));
    }, []);

    useEffect(() => {
        if (resume) {
            setHeaderData({
                name: resume.name[0].text,
                profileImg: resume.profile.url,
                location: 'New York',
                linkedIn: resume.linkedin.url,
                gitHub: resume.github.url,
                email: resume.email.url,
                resumePDF: resume.resume,
                description: resume.description,
            })
            setLoaded(true);
        }

    }, [resume])

    return (
        <>
            {
                resume && headerData ?
                <Fade in={loaded} timeout={500}>
                    <Container maxWidth="md" className={classes.resumeContainer}>
                        <Grid container direction="column" className={classes.resume}>
                            {/*HEADER*/}
                            <Grid item className={classes.resumeItem}>
                                <ResumeHeader data={headerData}/>
                            </Grid>

                            {/*EDUCATION*/}
                            <Grid item className={classes.resumeItem}>
                                <Section name="Education">
                                    {
                                        resume.body.filter(bodyItem => bodyItem['slice_label'] === 'education')
                                            .map((educationItem, index) =>
                                                <JobContent
                                                    key={index}
                                                    date={educationItem.primary.date[0].text}
                                                    title={educationItem.primary.title[0].text}
                                                    subtitle={educationItem.primary.subtitle[0].text}
                                                    bullets={educationItem.primary.bullets}/>
                                            )
                                    }
                                </Section>
                            </Grid>

                            {/*EXPERIENCE*/}
                            <Grid item className={classes.resumeItem}>
                                <Section name="Experience">
                                    {
                                        resume.body.filter(bodyItem => bodyItem['slice_label'] === 'experience')
                                            .map((experienceItem, index) =>
                                                <JobContent
                                                    key={index}
                                                    date={experienceItem.primary.date[0].text}
                                                    title={experienceItem.primary.title[0].text}
                                                    subtitle={experienceItem.primary.subtitle[0].text}
                                                    bullets={experienceItem.primary.bullets}/>
                                            )
                                    }
                                </Section>
                            </Grid>

                            <Grid item container style={{justifyContent: 'space-between'}}>
                                {/*LANGUAGES/FRAMEWORKS*/}
                                <Grid item xs={12} md={6} className={classes.resumeItem}>
                                    <Section name="Languages/Frameworks*" style={{paddingRight: '10px'}}>
                                        <Grid container className={classes.skillRow}>
                                            {
                                                resume.body.filter(bodyItem => bodyItem['slice_label'] === 'languages')
                                                    [0].items
                                                    .map((skillItem, index) => <KnowledgeItem key={index} name={skillItem.item[0].text} level={skillItem.rating}/>)
                                            }
                                        </Grid>
                                    </Section>
                                </Grid>

                                {/*SOFTWARE/TOOLS*/}
                                <Grid item xs={12} md={6} className={classes.resumeItem}>
                                    <Section name="Software/Tools*">
                                        <Grid container className={classes.skillRow}>
                                            {
                                                resume.body.filter(bodyItem => bodyItem['slice_label'] === 'software')
                                                    [0].items
                                                    .map((skillItem, index) => <KnowledgeItem key={index} name={skillItem.item[0].text} level={skillItem.rating}/>)
                                            }
                                        </Grid>
                                    </Section>
                                </Grid>
                                <Grid item>
                                    <Box fontSize={14} mb={6} color="primary.main" fontWeight="fontWeightLight">*Ratings are relative to my own skills</Box>
                                </Grid>
                            </Grid>

                            {/*INTERESTS*/}
                            <Grid item className={classes.resumeItem}>
                                <Section name="Interests">
                                    <List>
                                        {
                                            resume.interests.map((interest, index) =>
                                                <ListItem key={index}>
                                                    <Box key={index} fontSize={16} color="primary.main" fontWeight="fontWeightLight">{interest.text}</Box>
                                                </ListItem>)
                                        }
                                    </List>
                                </Section>
                            </Grid>

                        </Grid>

                    </Container>
                </Fade>
                :
                <Box height={'100vh'}/>
            }
        </>
    );
}
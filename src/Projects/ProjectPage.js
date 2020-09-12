import React from 'react';
import { makeStyles, Grid, Box, Fade } from '@material-ui/core';
import SidePanel from "./SidePanel";
import Bullet from './Bullet';

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(4),
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(8),
    },
    section: {
        marginBottom: theme.spacing(5),
    },
    sectionHeading: {
        marginBottom: theme.spacing(2),
    },
    paragraph: {
        marginBottom: theme.spacing(2),
        '&:last-child': {
            marginBottom: theme.spacing(0)
        }
    },
    subSection: {
        marginBottom: theme.spacing(4),
        '&:last-child': {
            marginBottom: theme.spacing(2)
        }
    },
    subSectionHeading: {
        textDecoration: 'underline',
        marginBottom: theme.spacing(2)
    }
}));

export default function ProjectPage(props) {
    const classes = useStyles();

    const {
        projectTitle,
        sidePanel,
        overview,
        challenges,
        successes,
    } = props;

    return (
        <Fade in={true} timeout={500}>
            <Grid container className={classes.container}>
                {/*Side panel*/}
                <Box display='flex' width={250} mr={2} mt={-1}>
                    <SidePanel
                        title={sidePanel.projectTitle}
                        subtitle={sidePanel.subtitle}
                        tags={sidePanel.tags}
                        season={sidePanel.season}
                        year={sidePanel.year}
                        websiteText={sidePanel.websiteText}
                        websiteUrl={sidePanel.websiteUrl}
                        githubLinks={sidePanel.githubLinks}
                        tools={sidePanel.tools}
                    />
                </Box>
                {/*Content*/}
                <Box display="flex" flexGrow={1} borderLeft={1} maxWidth="calc(100% - 266px)" borderColor="primary.main" paddingLeft={4} flexDirection="column">
                    {/*Overview*/}
                    <Box display="flex" flexDirection="column" mb={5} mt={-1}>
                        <Box display="flex" alignItems="center" className={classes.sectionHeading}>
                            <Bullet radius={10} offsetLeft="-37.5px" offsetRight="28px"/>
                            <Box fontSize={18} color="primary.main" fontWeight="fontWeightSemiBold">Overview</Box>
                        </Box>
                        <Box display="flex">
                            <Box display="flex" flexDirection="column" marginRight={5}>
                                {
                                    overview.text.map((paragraph, index) => <Paragraph text={paragraph} key={index}/>)
                                }
                            </Box>
                            <img src={overview.image} alt={projectTitle} style={overview.imageStyle ? overview.imageStyle : {width: "375px"}}/>
                        </Box>
                    </Box>
                    {/*Challenges*/}
                    <Box display="flex" flexDirection="column" mb={4} style={challenges.challengesStyle}>
                        <Box display="flex" alignItems="center" className={classes.sectionHeading}>
                            <Bullet radius={10} offsetLeft="-37.5px" offsetRight="28px"/>
                            <Box fontSize={18} color="primary.main" fontWeight="fontWeightSemiBold">Challenges</Box>
                        </Box>
                        {
                            challenges.content.map((challenge, index) => {
                                return (
                                    <Box display="flex" flexDirection="column" className={classes.subSection} key={index}>
                                        <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight" className={classes.subSectionHeading}>{challenge.title}</Box>
                                        <Box display="flex" flexDirection={challenge.flexDirection}>
                                            {
                                                challenge.image &&
                                                    <Box display="flex" order={challenge.imageOrder}>
                                                        <img src={challenge.image} alt={challenge.title} order={challenge.imageOrder} style={challenge.imageStyle}/>
                                                    </Box>
                                            }
                                            {
                                                challenge.text.map((paragraph, index) => <Paragraph text={paragraph} key={index}/>)
                                            }
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                    {/*Successes*/}
                    <Box display="flex" flexDirection="column">
                        <Box display="flex" alignItems="center" className={classes.sectionHeading}>
                            <Bullet radius={10} offsetLeft="-37.5px" offsetRight="28px"/>
                            <Box fontSize={18} color="primary.main" fontWeight="fontWeightSemiBold">Successes</Box>
                        </Box>
                        <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight">
                            {successes.text}
                        </Box>
                        { successes.image &&
                            <Box display="flex" order={successes.imageOrder}>
                                <img src={successes.image} alt="Successes" order={successes.imageOrder} style={successes.imageStyle}/>
                            </Box>
                        }
                    </Box>
                </Box>
            </Grid>
        </Fade>
    )
}

export function Paragraph({text}) {
    const classes = useStyles();
    return (
        <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight" className={classes.paragraph}>
            {text}
        </Box>
    )
}
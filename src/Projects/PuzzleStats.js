import React from 'react';
import { makeStyles, Grid, Box } from '@material-ui/core';
import SidePanel from "./SidePanel";
import { AffinityTool, AWSTool, FigmaTool, MUITool, ReactTool } from "./Tools/Tool";
import PuzzleStatsCard from '../assets/projects/puzzle-stats-card.png';
import Bullet from './Bullet';

const useStyles = makeStyles(theme => ({
    container: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(6),
        flexGrow: 1,
    },
    section: {
        marginBottom: theme.spacing(5),
    },
    sectionHeading: {
        marginBottom: theme.spacing(2),
    },
    paragraph: {
        marginBottom: theme.spacing(2),
    },
    subSection: {
        marginBottom: theme.spacing(4),
    },
    subSectionHeading: {
        textDecoration: 'underline',
        marginBottom: theme.spacing(2)
    }
}));

export default function PuzzleStats() {
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            {/*Side panel*/}
            <Box display='flex' width={250} mr={2}>
                <SidePanel
                    title="Puzzle Stats"
                    tags={["UI", "UX", "Front End Dev", "Back End Dev"]}
                    subtitle="Designed and built the front end for a NYT Crossword statistics web app"
                    season="Summer"
                    year="2020"
                    websiteText="puzzlestats.taylorvonk.com"
                    websiteUrl="https://puzzlestats.taylorvonk.com"
                    githubLinks={["tvonk13/puzzlestats-demo", "tvonk13/puzzlestats-hard-mode"]}
                    tools={[
                        <AffinityTool key={1}/>,
                        <FigmaTool key={2}/>,
                        <ReactTool key={3}/>,
                        <MUITool key={4}/>,
                        <AWSTool key={5}/>,
                    ]}
                />
            </Box>
            {/*Content*/}
            <Box display="flex" flexGrow={1} maxWidth="calc(100% - 266px)" borderLeft={1} borderColor="primary.main" paddingLeft={4} flexDirection="column">
                {/*Project Description*/}
                <Box display="flex" flexDirection="column" className={classes.section}>
                    <Box display="flex" alignItems="center" className={classes.sectionHeading}>
                        <Bullet radius={10} offsetLeft="-37.5px" offsetRight="28px"/>
                        <Box fontSize={18} color="primary.main" fontWeight="fontWeightSemiBold">Project Description</Box>
                    </Box>
                    <Box display="flex">
                        <Box display="flex" flexDirection="column" marginRight={5}>
                            <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight" className={classes.paragraph}>
                                The goal of this project was to build a website for users to view more detailed information and statistics about their New York Times Crossword Puzzle data.
                            </Box>
                        </Box>
                        <img src={PuzzleStatsCard} alt="Puzzle Stats" style={{width: "375px", height: "200px"}}/>
                    </Box>
                </Box>
                {/*Challenges*/}
                <Box display="flex" flexDirection="column" className={classes.section}>
                    <Box display="flex" alignItems="center" className={classes.sectionHeading}>
                        <Bullet radius={10} offsetLeft="-37.5px" offsetRight="28px"/>
                        <Box fontSize={18} color="primary.main" fontWeight="fontWeightSemiBold">Challenges</Box>
                    </Box>
                </Box>
                {/*Successes*/}
                <Box display="flex" flexDirection="column">
                    <Box display="flex" alignItems="center" className={classes.sectionHeading}>
                        <Bullet radius={10} offsetLeft="-37.5px" offsetRight="28px"/>
                        <Box fontSize={18} color="primary.main" fontWeight="fontWeightSemiBold">Successes</Box>
                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}
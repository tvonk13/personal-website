import React from 'react';
import { makeStyles, Grid, Box } from '@material-ui/core';
import SidePanel from "./SidePanel";
import { AffinityTool, AWSTool, FigmaTool, MUITool, ReactTool } from "./Tools/Tool";
import ZumolyzerCard from '../assets/projects/zumolyzer-card.png';
import Wireframe from '../assets/projects/zumolyzer-wireframe.png'
import Layout from '../assets/projects/layout.png';
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

export default function Zumolyzer() {
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            {/*Side panel*/}
            <Box display='flex' width={250}>
                <SidePanel
                    title="Personal Website"
                    tags={["UI", "UX"]}
                    season="Fall"
                    year="2019"
                    tools={[
                        <FigmaTool key={1}/>,
                    ]}
                />
            </Box>
            {/*Content*/}
            <Box display="flex" flexGrow={1} maxWidth="calc(100% - 250px)" borderLeft={1} borderColor="primary.main" paddingLeft={4} flexDirection="column">
                {/*Project Description*/}
                <Box display="flex" flexDirection="column" className={classes.section}>
                    <Box display="flex" alignItems="center" className={classes.sectionHeading}>
                        <Bullet radius={10} offsetLeft="-37.5px" offsetRight="28px"/>
                        <Box fontSize={18} color="primary.main" fontWeight="fontWeightSemiBold">Zumolyzer</Box>
                    </Box>
                    <Box display="flex">
                        <Box display="flex" flexDirection="column" marginRight={5}>
                            <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight" className={classes.paragraph}>
                                When my partner, who is the co-founder of a start up, first began building his company’s web app, he asked me to help him mock up some wire frames. Even though I had no UI or UX experience at this point, I had already become interested in design and wanted to give it a try.                             </Box>
                            <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight" className={classes.paragraph}>
                                The company, called <a href="https://www.zumolabs.ai" target="_blank" rel="noopener noreferrer" style={{color: "#37374A"}}>Zumo Labs</a>, creates synthetic data for computer vision-related AI using video game engines. For the non-technical, this means that they create fake data for AIs to learn with. In the initial stages, the idea was that their web app, called the Zumolyzer, would allow users to configure and generate their own data and be able to view and download those datasets.
                            </Box>
                            <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight" className={classes.paragraph}>
                                With the help of a friend, who is a product manager, and using my limited knowledge of UX from that one class I took in college, I was able to mock up a basic account log in/creation workflow, a page for view datasets, and a configuration workflow.
                            </Box>
                            <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight">
                                Although the company has since drilled down their product scope in a different direction, the current data page is still loosely based on my original concept. Additionally, I learned how much I like working on these kind of projects.
                            </Box>
                        </Box>
                        <img src={ZumolyzerCard} alt="Personal Website" style={{width: "375px", height: "200px"}}/>
                    </Box>
                </Box>
                {/*Challenges*/}
                <Box display="flex" flexDirection="column" className={classes.section}>
                    <Box display="flex" alignItems="center" className={classes.sectionHeading}>
                        <Bullet radius={10} offsetLeft="-37.5px" offsetRight="28px"/>
                        <Box fontSize={18} color="primary.main" fontWeight="fontWeightSemiBold">Challenges</Box>
                    </Box>
                    {/*Color*/}
                    <Box display="flex" flexDirection="column" className={classes.subSection}>
                        <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight" className={classes.subSectionHeading}>Loosely Defined Specification</Box>
                        <Box display="flex">
                            <img src={Wireframe} alt="Wireframe" style={{height: "300px", marginRight: "16px"}}/>
                            <Box display="flex" flexDirection="column">
                                <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight" className={classes.paragraph}>
                                    One of the challenges was that the company had not yet nailed down specifically what their product was going to be so I was given a very loosely defined specification. They weren’t sure if they were going to have subscription-tiered access or free access without an account, what data the user was going to be able to see, or what controls the user was going to have access to. Obviously this made it very difficult to figure out how to organize and design the information and workflows. Nonetheless I worked with my partner to decide on a direction and content that was most likely for them at the time and based my design off that.
                                </Box>
                                <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight">
                                    Because the specification was so loosely defined, it made the already complex task of figuring out a user workflow even harder. At the time, I wasn’t really aware of low vs high-fidelity wireframes so I started off with a white-boarding session with my product manager friend. We discussed various ways to narrow down the important workflows and the variations between when the user had an account and when they didn’t. From there, I gathered information from my partner about what information the data-viewing and configuration pages would contain and what controls the user should be allowed to have over both. We talked about the general concepts behind training data and how synthetic data works so that I could have a deeper understanding of the workflows I was going to be designing. With all this information in hand, I eventually created the high-fidelity wire frames shown below.
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                {/*Successes*/}
                <Box display="flex" flexDirection="column">
                    <Box display="flex" alignItems="center" className={classes.sectionHeading}>
                        <Bullet radius={10} offsetLeft="-37.5px" offsetRight="28px"/>
                        <Box fontSize={18} color="primary.main" fontWeight="fontWeightSemiBold">Successes</Box>
                    </Box>
                    <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight">
                        My biggest success of this project was being able to create a useful wireframe despite having little to no UI/UX experience nor a well-defined specification. And even though the product ended up going in a different direction than my design, my partner found it very useful as a developer to have some sort of UX specification to work with because it was one less thing for him to figure out amidst the daunting task of building an entire web application. The wireframes are shown below and include the page for viewing datasets, the page for configuring a dataset, a tooltip modal for explaining what a scene is, the account creation and log in modals, and the modal for downloading a dataset when not logged in.
                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}
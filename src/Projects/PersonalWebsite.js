import React from 'react';
import { makeStyles, Grid, Box } from '@material-ui/core';
import SidePanel from "./SidePanel";
import { AffinityTool, AWSTool, FigmaTool, MUITool, ReactTool } from "./Tools/Tool";
import PersonalWebsiteCard from '../assets/projects/personal-website-card.png';
import Split from '../assets/projects/background-color-split.png';
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

export default function PersonalWebsite() {
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            {/*Side panel*/}
            <Box display='flex' width={250}>
                <SidePanel
                    title="Personal Website"
                    tags={["UI", "UX", "Front End Dev"]}
                    version="V1.1"
                    season="Spring"
                    year="2020"
                    websiteLink="taylorvonk.com"
                    githubLinks={["tvonk13/personal-website"]}
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
            <Box display="flex" flexGrow={1} maxWidth="calc(100% - 250px)" borderLeft={1} borderColor="primary.main" paddingLeft={4} flexDirection="column">
                {/*Project Description*/}
                <Box display="flex" flexDirection="column" className={classes.section}>
                    <Box display="flex" alignItems="center" className={classes.sectionHeading}>
                        <Bullet radius={10} offsetLeft="-37.5px" offsetRight="28px"/>
                        <Box fontSize={18} color="primary.main" fontWeight="fontWeightSemiBold">Project Description</Box>
                    </Box>
                    <Box display="flex">
                        <Box display="flex" flexDirection="column" marginRight={5}>
                            <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight" className={classes.paragraph}>
                                This website is designed to showcase both my design and front end development skills. Additionally it is also a portfolio for my projects and resume.
                            </Box>
                            <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight" className={classes.paragraph}>
                                When I first started this project, I intended to just make a couple of simple pages so that I could learn React and practice using Affinity Designer for asset creation. However, I quickly discovered how much I enjoyed the process of both designing and building those simple pages. Ideas for other projects sprouted and soon I needed more than just a few simple pages. As I continue to expand my skills and explore my interests in front end development and UI and UX design, I hope to add more projects.
                            </Box>
                            <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight">
                                This website was built using React along with Material UI. The assets were created in Affinity Designer and some portions of the UI were designed and wireframed in Figma. The website itself was originally hosted using an AWS S3 bucket but I have since transitioned to using an AWS Amplify project for easier continuous deployment.
                            </Box>
                        </Box>
                        <img src={PersonalWebsiteCard} alt="Personal Website" style={{width: "375px", height: "200px"}}/>
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
                        <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight" className={classes.subSectionHeading}>Color</Box>
                        <Box display="flex">
                            <img src={Split} alt="Color Split" style={{width: "250px", height: "156px", marginRight: "16px"}}/>
                            <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight">
                                Because this website is meant to showcase my style and skill as a designer and developer, the first and biggest challenge was designing the look and feel of it. I already had some ideas about what my theme would be - I love the outdoors and being active so a mountain/nature-themed design was a natural conclusion. However, I struggled with my color palette. It had to be something that could easily work with consistent primary and secondary colors throughout the entire website but also needed to be something that wouldn’t clash with a variety content either. I started with a purple-based color scheme because it is my favorite color and after trying many combinations I settled on a palette that I liked. When I finally finished a first draft of the website, I found that the original colors felt too dark and gloomy. Finally, after another iteration of color combinations I settled on a brighter version of the original colors. I’ve found that this new palette is muted enough to work well with other colors but bright enough to feel lively.
                            </Box>
                        </Box>
                    </Box>
                    {/*Layouts*/}
                    <Box display="flex" flexDirection="column">
                        <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight" className={classes.subSectionHeading}>Layouts</Box>
                        <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight" className={classes.paragraph}>
                            I knew, before I started working on the Projects section of this website, that figuring out the UI and layout was going to be challenging because there is a lot of information to convey for each project and the content of the information is varied between the different types of projects. I had initially decided to start with some low fidelity wire frames in Figma to get a feel for the layout of the different pieces of information. But as I was starting to build the wire frames, I realized that it was hard for me to figure out the layout without seeing what the content would look like inside that layout. So I decided to fast forward to the high fidelity version since this is not a particularly flow-heavy project. Hopefully I will get to practice a proper UX design workflow in a future project.
                        </Box>
                        <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight" className={classes.paragraph}>
                            I then spent a lot of time trying different layouts and iteratively adding sections of information to see how it would fit with the current idea. It definitely took me longer to figure out something that worked than I anticipated but I eventually landed on a design I liked. I then mocked out the pages for each project so that then when it came to the development step, I didn’t have to worry about anything other than getting the components to sit correctly on the page.
                        </Box>
                        <img src={Layout} alt="Layout" style={{height: "100px", width: "730px"}} />
                    </Box>
                </Box>
                {/*Successes*/}
                <Box display="flex" flexDirection="column">
                    <Box display="flex" alignItems="center" className={classes.sectionHeading}>
                        <Bullet radius={10} offsetLeft="-37.5px" offsetRight="28px"/>
                        <Box fontSize={18} color="primary.main" fontWeight="fontWeightSemiBold">Successes</Box>
                    </Box>
                    <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight">
                        The two biggest successes of this project were opening the doors for myself to front end design and development as well as creating a personal website that I am proud of and that I feel conveys my personality well. When I started, I had no idea that I was going to enjoy the process so much and now I am so glad that I did because it has launched my self-driven journey into figuring out a career path that caters to both my software engineering and creative design interests.
                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}
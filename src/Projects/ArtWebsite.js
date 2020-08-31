import React from 'react';
import { makeStyles, Grid, Box } from '@material-ui/core';
import SidePanel from "./SidePanel";
import { AffinityTool, AWSTool, FigmaTool, MUITool, ReactTool } from "./Tools/Tool";
import ArtWebsiteCard from '../assets/projects/art-website-card.png';
import Grids from '../assets/projects/grids.png';
import Recording from '../assets/projects/tvonk-recording.mp4';
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

export default function ArtWebsite() {
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
            {/*Side panel*/}
            <Box display='flex' width={250}>
                <SidePanel
                    title="Art Website"
                    tags={["UI", "UX", "Front End Dev"]}
                    version="V1.2"
                    season="Fall"
                    year="2020"
                    websiteLink="tvonk.com"
                    githubLinks={["tvonk13/art-website"]}
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
                                This website is designed to be a portfolio for my artwork and photography hobbies. Additionally it was intended to be further practice in developing my React skills. While this project is mostly done, it is just a first draft and is still a work in progress.
                            </Box>
                            <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight">
                                This website was built using React along with Material UI and the assets were created in Affinity Designer. The website itself was originally hosted using an AWS S3 bucket but I have since transitioned to using an AWS Amplify project for easier continuous deployment.
                            </Box>
                        </Box>
                        <img src={ArtWebsiteCard} alt="Personal Website" style={{width: "375px", height: "200px"}}/>
                    </Box>
                </Box>
                {/*Challenges*/}
                <Box display="flex" flexDirection="column" className={classes.section} style={{marginTop: "-48px"}}>
                    <Box display="flex" alignItems="center" className={classes.sectionHeading}>
                        <Bullet radius={10} offsetLeft="-37.5px" offsetRight="28px"/>
                        <Box fontSize={18} color="primary.main" fontWeight="fontWeightSemiBold">Challenges</Box>
                    </Box>
                    {/*Color*/}
                    <Box display="flex" flexDirection="column" className={classes.subSection}>
                        <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight" className={classes.subSectionHeading}>Whitespace</Box>
                        <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight">
                            The biggest design challenge with this project was figuring out how to handle whitespace. At first, I had opted to use a vertical nav on the left to try to get away from the standard horizontal nav of all my other projects. However, I found that, because the nav only had 3 items in it, besides the logo, the bottom 2 thirds felt empty. A few ideas that I had to fill the vertical nav whitespace were to add a colorful design of some kind. However, I felt that any additional designs or embellishments would draw  viewers’ eyes away from the artwork and photographs themselves. Ultimately, I decided to switch back to a horizontal nav at the top. Another place where I noticed a lot of whitespace is on the individual artwork and photograph pages. I am still torn as to whether the whitespace here is good and allows the images to breathe or if it feels empty. Lastly, I felt there was too much whitespace on the About page. Since this page does not have any artwork or photographs, I decided it could work to fill it with a more colorful background. For now, I am trying out the current design of both the individual pages and the About page, but I am continuing to iterate on different ideas and may change it in the future.
                        </Box>
                    </Box>
                    {/*Layouts*/}
                    <Box display="flex" flexDirection="column">
                        <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight" className={classes.subSectionHeading}>Image Manipulation</Box>
                        <Box display="flex">
                            <img src={Grids} alt="grids" style={{height: "200px", marginRight: "16px"}}/>
                            <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight" className={classes.paragraph}>
                                The biggest technical challenge with this project was dealing with images and image manipulation. Because my artwork and photographs vary in both aspect ratio and resolution, I had to figure out how to make a clean-looking grid in which the images would sit evenly spaced. I initially tried making a masonry-style grid where the image sizes would stay true to their aspect ratios. However I found that this meant that one side, either the right or bottom side, would need to be uneven unless I wanted to get deep into some calculations to find an arrangement that would create a perfect rectangle. This would also be difficult because it would require retrieving or storing the image dimensions so that the size could be calculated before the image loaded on the page. After trying several different ways of arranging the images and also search for existing image gallery libraries, I decided that the simplest solution was to just crop each image in the grid to the same size and keep a fixed number of columns. Since the images are meant to be viewed in full on their own individual pages anyways, I was satisfied with this compromise. Another challenge with images was figuring out how to load the grid efficiently since the image files themselves are fairly large and the number of images will only continue to grow. After a bit of experimentation, I decided to create smaller thumbnail images to display the grid and then use the original image for the individual pages.
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
                    <Box display="flex">
                        <Box fontSize={14} color="primary.main" fontWeight="fontWeightLight" style={{marginRight: "16px"}}>
                            Despite the challenges with image manipulation, I am really happy with how the grid animation came out. I think that it adds a nice touch of flair while not being too jarring as many animations can be. However, I have to admit some of the credit goes to my partner who suggested the idea and helped me figure out the calculations for getting the timings right. On that front, I hope to experiment more with transitions and animations from both a technical and creative standpoint, such as svg animations, full page fade in and out transitions on mounting and un-mounting, and more responsive feedback on components for the user.
                        </Box>
                        <video autoPlay="true" loop muted={true} style={{width: "300px"}}>
                            <source src={Recording} type="video/mp4" />
                        </video>
                    </Box>
                </Box>
            </Box>
        </Grid>
    )
}
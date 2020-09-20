import React from 'react';
import {makeStyles, Grid, Box, Fade} from '@material-ui/core';
import PersonalWebsiteCard from '../../assets/projects/personal-website-card.png';
import Split from '../../assets/projects/background-color-split.png';
import Wireframe1 from '../../assets/projects/personal-website-wireframe-v1.png';
import Wireframe2 from '../../assets/projects/personal-website-wireframe-v2.png';
import ProjectPage from "../ProjectPage/ProjectPage";
import { Header, HeaderImage } from '../ProjectPage/Header/Header';
import HeaderPanel from '../ProjectPage/Header/HeaderPanel';
import Summary from '../ProjectPage/Summary';
import Section from '../ProjectPage/Section';
import SubSection from '../ProjectPage/SubSection';
import Paragraph from '../ProjectPage/Paragraph';

const useStyle = makeStyles(theme => ({
    layoutImage: {
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    }
}))

export default function PersonalWebsite() {
    const classes = useStyle();

    return (
        <ProjectPage>
            <Header>
                <HeaderPanel
                    title="Personal Website"
                    subtitle="Designed and built a website for my professional portfolio"
                    tags={["UX", "Front End Dev"]}
                    season="Spring"
                    year="2020"
                    websiteText="taylorvonk.com"
                    websiteUrl="https://www.taylorvonk.com"
                    githubLinks={["tvonk13/personal-website"]}
                />
                <HeaderImage image={PersonalWebsiteCard} altText="Personal Website"/>
            </Header>
            <Summary
                text={[
                        "The goal of this project was to build a professional portfolio website to showcase both my design and front end development skills.",
                        "The biggest challenges for this project were figuring out a theme and interface design for the website as well as creating an easy-to-follow flow of information for the Projects section. Through an iterative process I was able to land on a creative and cohesive design for the UI. And by mocking up the layout of the Projects section in Figma before writing any code for it, I was able to come up with an informative and clean layout.",
                        "I built this website using React and Material UI. I designed and wireframed some portions of the UI in Figma and created the assets in Affinity Designer. The website itself was originally hosted using an AWS S3 bucket but I have since transitioned to using an AWS Amplify project for easier continuous deployment."
                    ]}
            />
            <Section sectionTitle="Challenges">
                <SubSection subSectionTitle="Design" mb={6}>
                    <Paragraph
                        text="Because this website is meant to showcase my style and skills, the first and biggest challenge was designing the look and feel of it. Instead of sticking with a commonly used minimalist style, I decided to use a mountain and nature-themed design because I love the outdoors and I felt it was more unique to my personality. However, I struggled with deciding on a color palette. I wanted something that could easily work with consistent primary and secondary colors throughout the website but also needed something that wouldn’t clash with a variety of content either. I started with a purple-based color scheme because it is my favorite color and, after trying several combinations, decided on a palette that I liked. When I finished the first draft of the website, I found that the original colors felt too dark and gloomy. After another iteration of color combinations I came up with a brighter version of the original colors. I’ve found that this new palette is muted enough to work well with other colors but bright enough to feel lively."
                    />
                    <Grid container justify="center" style={{marginTop: "16px"}}>
                        <Grid item xs={12} sm={6}>
                            <img src={Split} alt="Split" style={{width: "100%"}}/>
                        </Grid>
                    </Grid>
                </SubSection>
                <SubSection subSectionTitle="Layout">
                    <Paragraph
                        text="I knew, before I started working on the Projects section of this website, that figuring out the UI and layout was going to be challenging because there is a lot of information to convey for each project and the content of the information is varied between the different types of projects. Instead of getting ahead of myself and rushing through it, I decided to start by mocking up the layout in Figma before coding. I then spent a lot of time trying different layouts and iteratively adding sections of information to see how it would fit with the current idea. It took me longer to figure out something that worked than I anticipated but I’m glad I spent the time working on it in Figma rather than wasting time writing and rewriting code. After I decided on a layout that I liked, I mocked out the pages for each project so that when it came to the development step, I didn’t have to worry about anything other than getting the components to sit correctly on the page."
                    />
                    <Fade in={true} timeout={1000}>
                        <Grid container justify="center" style={{marginTop: "16px"}}>
                            <Grid item container justify="space-between">
                                <Grid item container direction="column" alignItems="center" xs={12} sm={6} style={{marginBottom: "24px"}}>
                                    <Box fontSize={14} mb={2} color="primary.main" fontWeight="fontWeightLight">V1</Box>
                                    <img src={Wireframe1} alt="Wireframe 1" style={{height: `${1164 * .3}px`}} className={classes.layoutImage}/>
                                </Grid>
                                <Grid item container direction="column" alignItems="center" xs={12} sm={6}>
                                    <Box fontSize={14} mb={2} color="primary.main" fontWeight="fontWeightLight">V2</Box>
                                    <img src={Wireframe2} alt="Wireframe 2" style={{height: `${1164 * .3}px`, maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))"}} className={classes.layoutImage}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Fade>
                </SubSection>
            </Section>
            <Section sectionTitle="Successes">
                <Paragraph
                    text="My two biggest successes of this project were getting a rewarding experience in front end design and development and creating a personal website that I feel conveys my personality well. When I started, I had no idea that I was going to enjoy the process so much and now I am grateful that I did because it has launched my self-driven journey into figuring out a passion that caters to both my software engineering and creative design interests."
            />
            </Section>
        </ProjectPage>
    )
}
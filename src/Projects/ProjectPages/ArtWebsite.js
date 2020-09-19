import React from 'react';
import { Grid } from '@material-ui/core';
import ArtWebsiteCard from '../../assets/projects/art-website-card.png';
import Grids from '../../assets/projects/grids.png';
import ProjectPage from "../ProjectPage/ProjectPage";
import { Header, HeaderImage } from '../ProjectPage/Header/Header';
import HeaderPanel from '../ProjectPage/Header/HeaderPanel';
import Summary from '../ProjectPage/Summary';
import Section from '../ProjectPage/Section';
import SubSection from '../ProjectPage/SubSection';
import Paragraph from '../ProjectPage/Paragraph';

export default function ArtWebsite() {
    return (
        <ProjectPage>
            <Header>
                <HeaderPanel
                    title="Art Website"
                    subtitle="Designed and built a website for my artwork and photography"
                    tags={["UX", "Front End Dev"]}
                    season="Summer"
                    year="2020"
                    websiteText="tvonk.com"
                    websiteUrl="https://www.tvonk.com"
                    githubLinks={["tvonk13/art-website"]}
                />
                <HeaderImage image={ArtWebsiteCard} altText="Art Website"/>
            </Header>
            <Summary
                text={[
                    "The goal of this project was to design a portfolio for my artwork and photography hobbies and to provide further practice in developing my front end skills.",
                    "The biggest design challenge for this project was figuring out how to manage whitespace within the UI. Through experimentation, I was able to leverage different layouts and the color composition of the content to create a fuller looking UI. The biggest technical challenge for this project was handling lots of images and ensuring an efficient and smooth experience for the user. Through trial and error, I was able to achieve minimal loading times and create a fun grid animation.",
                    "I built this website using React and Material UI and created the assets and content in Affinity Designer. The website itself was originally hosted using an AWS S3 bucket but I have since transitioned to using an AWS Amplify project for easier continuous deployment.",
                ]}
            />
            <Section sectionTitle="Challenges">
                <SubSection subSectionTitle="Whitespace" mb={6}>
                    <Paragraph
                        text="The biggest design challenge for this project was figuring out how to manage whitespace. At first, I had chosen to use a vertical navigation on the left to try to get away from the standard horizontal navigation of all my other projects. However, I found that, because the navigation only had 3 items in it besides the logo, the bottom 2 thirds felt too empty. I had a few ideas for filling the vertical whitespace but I felt that any additional designs or embellishments would draw  viewers’ eyes away from the artwork and photographs themselves. Ultimately, I decided to switch back to a horizontal navigation at the top of the page because it fit better with the layout of the content of the website. Additionally, I felt that there was too much whitespace on the About page. Since this page does not have any artwork or photographs, I decided it could work to fill it with a more colorful background. For now, I am trying out the current design of the About page, but I am continuing to iterate on different ideas and may change it in the future."
                    />
                    <Grid container justify="center" style={{marginTop: "16px"}}>
                        <Grid item xs={12} sm={6}>
                            <img src={Grids} alt="Grids" style={{width: "100%"}}/>
                        </Grid>
                    </Grid>
                </SubSection>
                <SubSection subSectionTitle="Image Manipulation">
                    <Paragraph
                        text="The biggest technical challenge for this project was handling images and image manipulation. Because my artwork and photographs vary in both aspect ratio and resolution, I had to figure out how to make a clean-looking grid in which the images would be evenly spaced. I initially tried using a masonry-style grid where the image sizes would stay true to their aspect ratios. However, I found that this meant that one side, either the right or bottom, would need to be uneven, which I did not like. This would also be difficult because it would require retrieving or storing the image dimensions so that the size could be calculated before the image loaded on the page. After trying several different ways of arranging the images and also searching for existing image gallery libraries to no avail, I decided that the simplest solution was to crop each image in the grid to the same size and keep a fixed number of columns. Since the images are meant to be viewed in full on their own individual pages anyways, I was satisfied with this compromise. Another challenge with images was figuring out how to load the grid efficiently because the image files themselves are fairly large and the number of images will only continue to grow. After a bit of experimentation, I decided to create smaller thumbnail images to display the grid and then use the original image for the individual pages."
                    />
                </SubSection>
            </Section>
            <Section sectionTitle="Successes">
                <Paragraph
                    text="Despite the challenges with image manipulation, I was able to create a grid animation that I really like. It adds a nice touch of flair while not being too jarring like many animations can be. I hope to experiment more with transitions and animations from both a technical and creative standpoint, such as svg animations, full page fade in and out transitions, and more responsive feedback on touch points."
                />
            </Section>
        </ProjectPage>
    )
}
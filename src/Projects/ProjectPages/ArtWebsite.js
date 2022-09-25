import React from 'react';
import ArtWebsiteCard from '../../assets/projects/art-website-card.png';
import ProjectPage from "../ProjectPage/ProjectPage";
import { Header, HeaderImage } from '../ProjectPage/Header/Header';
import HeaderPanel from '../ProjectPage/Header/HeaderPanel';
import Summary from '../ProjectPage/Summary';

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
                    websiteText="acaja.taylorstiger.io"
                    websiteUrl="https://acaja.taylorstiger.io"
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
        </ProjectPage>
    )
}
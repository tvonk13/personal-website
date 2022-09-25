import React from 'react';
import PersonalWebsiteCard from '../../assets/projects/personal-website-card.png';
import ProjectPage from "../ProjectPage/ProjectPage";
import { Header, HeaderImage } from '../ProjectPage/Header/Header';
import HeaderPanel from '../ProjectPage/Header/HeaderPanel';
import Summary from '../ProjectPage/Summary';

export default function PersonalWebsite() {
    return (
        <ProjectPage>
            <Header>
                <HeaderPanel
                    title="Personal Website"
                    subtitle="Designed and built a website for my professional portfolio"
                    tags={["UX", "Front End Dev"]}
                    season="Spring"
                    year="2020"
                    websiteText="taylorstiger.io"
                    websiteUrl="https://www.taylorstiger.io"
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
        </ProjectPage>
    )
}
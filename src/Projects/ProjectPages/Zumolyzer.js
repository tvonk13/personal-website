import React from 'react';
import { Box } from '@material-ui/core';
import ZumolyzerCard from '../../assets/projects/zumolyzer-card.png';
import ProjectPage from '../ProjectPage/ProjectPage';
import { Header, HeaderImage } from '../ProjectPage/Header/Header';
import HeaderPanel from '../ProjectPage/Header/HeaderPanel';
import Summary from '../ProjectPage/Summary';

export default function Zumolyzer() {
    return (
        <ProjectPage>
            <Header>
                <HeaderPanel
                    title="Zumolyzer"
                    subtitle={<Box display="inline">Designed a mockup of a web app for <a href="https://www.zumolabs.ai" target="_blank" rel="noopener noreferrer"style={{color: "#37374A"}}>Zumo Labs</a></Box>}
                    tags={["UX"]}
                    season="Winter"
                    year="2019"
                />
                <HeaderImage image={ZumolyzerCard} altText="Zumolyzer"/>
            </Header>
            <Summary
                text={[
                    "The goal of this project was to design a web application user interface for Zumo Labs that would allow users to view and configure data for machine learning. The company is a small start up that creates synthetic data for computer vision-related AI using video game engines. In the initial stages, the web app, called Zumolyzer, was intended to allow users to configure and generate their own data and be able to view and download those datasets.",
                    "The biggest challenge for this project was having a loosely defined specification in addition to a limited knowledge of user experience design. However, I was able to use my intuitive design skills and the help of a product manager friend to mock up an account log in/creation workflow, a page for viewing datasets, and a configuration workflow. And although the company has since moved their product scope in a different direction, the current data page is still loosely based on my original concept.",
                ]}
            />
        </ProjectPage>
    )
}
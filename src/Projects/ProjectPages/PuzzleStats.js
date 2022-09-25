import React from 'react';
import ProjectPage from "../ProjectPage/ProjectPage";
import PuzzleStatsCard from '../../assets/projects/puzzle-stats-card.png';
import { Header, HeaderImage } from '../ProjectPage/Header/Header';
import HeaderPanel from '../ProjectPage/Header/HeaderPanel';
import Summary from '../ProjectPage/Summary';

export default function PuzzleStats() {
    return (
        <ProjectPage>
            <Header>
                <HeaderPanel
                    title="Puzzle Stats"
                    subtitle="Designed and built a website for viewing NY Times Crossword puzzle statistics"
                    tags={["UX", "Front End Dev", "Back End Dev"]}
                    season="Fall"
                    year="2019"
                    websiteText="puzzlestats.taylorstiger.io"
                    websiteUrl="https://puzzlestats.taylorstiger.io"
                    githubLinks={["tvonk13/puzzle-stats-demo", "tvonk13/puzzle-hard-mode"]}
                />
                <HeaderImage image={PuzzleStatsCard} altText="Puzzle Stats"/>
            </Header>
            <Summary
                text={[
                    "The goal of this project was to build a website for users to view more detailed information and statistics about their NY Times Crossword Puzzle data. This was a personal project inspired by my love of doing the NY Times Crossword Puzzle and my frustrations with the NY Times’ lack of available data and statistics.",
                    "One of the challenges for this project was figuring out how to implement a back end without an official API from the NY Times. I found that the lack of an official API required too many workarounds to make the project feasible. Although I did build a full back end, I ultimately decided to pare back the entire project to just a demo version so that I could focus on designing the front end. This demo version is viewable at the link provided and the github repo for it is puzzle-stats-demo. The full back end version of the code resides in the github repo puzzle-stats-hard-mode.",
                    "I built the initial back end for this application using AWS Lambda and API Gateway for the unofficial API. I also utilized AWS Amplify to implement a database with AppSync and user authentication with Cognito. I built the front-end using React and Material UI and used Nivo for the graphing capabilities. The website itself is hosted using an AWS Amplify project.",
                ]}
            />
        </ProjectPage>
    )
}
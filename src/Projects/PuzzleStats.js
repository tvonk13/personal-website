import React from 'react';
import {
    AffinityTool,
    AWSAmplifyTool,
    AWSAPIGatewayTool,
    AWSLambdaTool,
    FigmaTool,
    MUITool,
    ReactTool
} from "./Tool";
import ProjectPage from "./ProjectPage";
import PuzzleStatsCard from '../assets/projects/puzzle-stats-card.png';

export default function PuzzleStats() {
    return (
        <ProjectPage
            sidePanel = {{
                projectTitle: "Puzzle Stats",
                subtitle: "Designed and built a website for viewing NY Times Crossword puzzle statics",
                tags: ["UX", "Front End Dev", "Back End Dev"],
                season: "Fall",
                year: "2019",
                websiteText: "puzzlestats.taylorvonk.com",
                websiteUrl: "https://puzzlestats.taylorvonk.com",
                githubLinks: ["tvonk13/puzzle-stats-demo", "tvonk13/puzzle-hard-mode"],
                tools: [
                    <AffinityTool key={1}/>,
                    <FigmaTool key={2}/>,
                    <ReactTool key={3}/>,
                    <MUITool key={4}/>,
                    <AWSAmplifyTool key={5}/>,
                    <AWSLambdaTool key={6}/>,
                    <AWSAPIGatewayTool key={7}/>,
                ],
            }}
            overview={{
                text: [
                    "The goal of this project was to build a website for users to view more detailed information and statistics about their NY Times Crossword Puzzle data. This was a personal project inspired by my love of doing the NY Times Crossword Puzzle and my frustrations with the NY Times’ lack of available data and statistics.",
                    "One of the challenges for this project was figuring out how to implement a back end without an official API from the NY Times. I found that the lack of an official API required too many workarounds to make the project feasible. Although I did build a full back end, I ultimately decided to pare back the entire project to just a demo version so that I could focus on designing the front end. This demo version is viewable at the link provided and the github repo for it is puzzle-stats-demo. The full back end version of the code resides in the github repo puzzle-stats-hard-mode.",
                    "I built the initial back end for this application using AWS Lambda and API Gateway for the unofficial API. I also utilized AWS Amplify to implement a database with AppSync and user authentication with Cognito. I built the front-end using React and Material UI and used Nivo for the graphing capabilities. The website itself is hosted using an AWS Amplify project.",
                ],
                image: PuzzleStatsCard,
                imageStyle: {height: "200px"},
            }}
            challenges={{
                content: [
                    {
                        title: "Unofficial API",
                        text: [
                            "When I first started on this project I discovered that, despite many other APIs, the NY Times did not have one for its crossword puzzle application. After searching online, the only option I found was an unknown endpoint used by another developer on github. This endpoint seemed to work for the most part and allowed you to pull your crossword puzzle data from the NY Times. With this, I created an unofficial API using AWS Lambda and API Gateway.",
                            "One challenge with this was that there was no way to subscribe to automatically receive updates from the NY Times data. After considering a few options, I decided to give the user the responsibility of syncing their data to keep it up to date. This was not ideal from a usability standpoint but was significantly easier from a development standpoint.",
                            "Another challenge with this was that the data was occasionally not accurate and was not comprehensive enough to be able to implement some of the features that I wanted. This issue, along with the other difficulties, ultimately led to the decision to pare back the project. Through troubleshooting a lot of the problems and design considerations with the back end, I realized that I did not enjoy that aspect of the project as much and preferred working on the front end designs. This ended up being an appropriate decision because the end-goal of this project was not to build a full-fledged real-world product but rather to work on a personal project that I enjoyed. And regardless of the final outcome, I learned an immense amount about back end development.",
                        ],
                        flexDirection: "column",
                    },
                ]
            }}
            successes={{
                text: [
                    "My biggest success of this project was being able to forge through unfamiliar back end technologies to build a full application despite many challenges and a full-time job. Although I have worked on back end development before, I have never built one from start to finish and a lot of the stack that I used for this project was brand new to me. Nonetheless, I spent countless hours learning and experimenting with different approaches to solve the various challenges that arose. Ultimately I am happy that I was able to see the back end through to the end until the issues were out of my hands before deciding to pare it back. And now that I am able to focus on the front end, I am excited about being able to design and build on even more features.",
                ]
            }}
        />
    )
}
import React from 'react';
import { AffinityTool, AWSAmplifyTool, FigmaTool, MUITool, ReactTool } from "./Tool";
import PersonalWebsiteCard from '../assets/projects/personal-website-card.png';
import Split from '../assets/projects/background-color-split.png';
import LayoutImage from '../assets/projects/layout.png';
import ProjectPage from "./ProjectPage";

export default function PersonalWebsite() {
    return (
        <ProjectPage
            sidePanel = {{
                projectTitle: "Personal Website",
                subtitle: "Designed and built a website for my professional portfolio",
                tags: ["UX", "Front End Dev"],
                season: "Spring",
                year: "2020",
                websiteText: "taylorvonk.com",
                websiteUrl: "https://www.taylorvonk.com",
                githubLinks: ["tvonk13/personal-website"],
                tools: [
                    <AffinityTool key={1}/>,
                    <FigmaTool key={2}/>,
                    <ReactTool key={3}/>,
                    <MUITool key={4}/>,
                    <AWSAmplifyTool key={5}/>,
                ],
            }}
            overview={{
                text: [
                    "The goal of this project was to build a professional portfolio website to showcase both my design and front end development skills.",
                    "The biggest challenges for this project were figuring out a theme and interface design for the website as well as creating an easy-to-follow flow of information for the Projects section. Through an iterative process I was able to land on a creative and cohesive design for the UI. And by mocking up the layout of the Projects section in Figma before writing any code for it, I was able to come up with an informative and clean layout.",
                    "I built this website using React and Material UI. I designed and wireframed some portions of the UI in Figma and created the assets in Affinity Designer. The website itself was originally hosted using an AWS S3 bucket but I have since transitioned to using an AWS Amplify project for easier continuous deployment."
                ],
                image: PersonalWebsiteCard,
                imageStyle: {height: "225px"}
            }}
            challenges={{
                content: [
                    {
                        title: "Design",
                        image: Split,
                        imageStyle: {height: "180px", marginRight: "16px"},
                        imageOrder: 0,
                        text: [
                            "Because this website is meant to showcase my style and skills, the first and biggest challenge was designing the look and feel of it. Instead of sticking with a commonly used minimalist style, I decided to use a mountain and nature-themed design because I love the outdoors and I felt it was more unique to my personality. However, I struggled with deciding on a color palette. I wanted something that could easily work with consistent primary and secondary colors throughout the website but also needed something that wouldn’t clash with a variety of content either. I started with a purple-based color scheme because it is my favorite color and, after trying several combinations, decided on a palette that I liked. When I finished the first draft of the website, I found that the original colors felt too dark and gloomy. After another iteration of color combinations I came up with a brighter version of the original colors. I’ve found that this new palette is muted enough to work well with other colors but bright enough to feel lively.",
                        ],
                        flexDirection: "row"
                    },
                    {
                        title: "Layout",
                        image: LayoutImage,
                        imageStyle: {height: "275px", marginLeft: "16px"},
                        imageOrder: 1,
                        text: [
                            "I knew, before I started working on the Projects section of this website, that figuring out the UI and layout was going to be challenging because there is a lot of information to convey for each project and the content of the information is varied between the different types of projects. Instead of getting ahead of myself and rushing through it, I decided to start by mocking up the layout in Figma before coding. I then spent a lot of time trying different layouts and iteratively adding sections of information to see how it would fit with the current idea. It took me longer to figure out something that worked than I anticipated but I’m glad I spent the time working on it in Figma rather than wasting time writing and rewriting code. After I decided on a layout that I liked, I mocked out the pages for each project so that when it came to the development step, I didn’t have to worry about anything other than getting the components to sit correctly on the page.",
                        ],
                        flexDirection: "row"
                    },
                ]
            }}
            successes={{
                text: [
                    "My two biggest successes of this project were getting a rewarding experience in front end design and development and creating a personal website that I feel conveys my personality well. When I started, I had no idea that I was going to enjoy the process so much and now I am grateful that I did because it has launched my self-driven journey into figuring out a passion that caters to both my software engineering and creative design interests.",
                ]
            }}
        />
    )
}
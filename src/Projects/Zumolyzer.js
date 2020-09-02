import React from 'react';
import { FigmaTool } from "./Tools/Tool";
import ZumolyzerCard from '../assets/projects/zumolyzer-card.png';
import Wireframe from '../assets/projects/zumolyzer-wireframe.png'
import ProjectPage from "./ProjectPage";

export default function Zumolyzer() {
    return (
        <ProjectPage
            sidePanel = {{
                projectTitle: "Zumolyzer",
                subtitle: "Designed a mockup of a web app for Zumo Labs",
                tags: ["UI", "UX"],
                season: "Fall",
                year: "2019",
                tools: [
                    <FigmaTool key={2}/>,
                ],
            }}
            overview={{
                text: [
                    "The goal of this project was to design a web application user interface for Zumo Labs that allows users to view and configure data for machine learning. The company is a small start up that creates synthetic data for computer vision-related AI using video game engines. In the initial stages, the web app, called Zumolyzer, was intended to allow users to configure and generate their own data and be able to view and download those datasets.",
                    "The biggest challenge for this project was having a loosely defined spec in addition to a limited knowledge of user experience design. However, I was able to use my intuitive design skills and the help of a product manager friend to mock up a basic account log in/creation workflow, a page for viewing datasets, and a configuration workflow. And although the company has since moved their product scope in a different direction, the current data page is still loosely based on my original concept.",
                ],
                image: ZumolyzerCard
            }}
            challenges={{
                content: [
                    {
                        title: "Loosely Defined Specification",
                        image: Wireframe,
                        imageStyle: {height: "300px", width: "353px", marginRight: "16px"},
                        imageOrder: 1,
                        text: [
                            "The biggest challenge of this project was that the company had not yet decided the exact scope of their product so I was given a very loosely defined specification. So to begin the design process, I worked with one of the team’s developers to hone in on a direction and gather information about the content. This provided me with a more detailed specification to work with. I then did a white-boarding session with my product manager friend in which we discussed various ways to narrow down the important workflows and the variations between different user account states. From there, I touched base with the developer about what information the data-viewing and configuration pages would contain and what controls the user should be allowed to have over both. We also discussed the general concepts behind synthetic data so that I could have a deeper understanding of the workflows I was going to be designing. With all this information in hand, I was able to create the high-fidelity wireframes shown below."
                        ],
                        flexDirection: "column"
                    },
                ]
            }}
            successes={{
                text: [
                    "The biggest success of this project was being able to create a useful wireframe despite having little to no UI/UX experience nor a well-defined specification. And even though the product ended up going in a different direction than my design, the developer found it very useful to have a template to work with because it was one less thing for him to figure out amidst the daunting task of building an entire web application. The wireframes are shown below and include the page for viewing datasets, the page for configuring a dataset, a tooltip modal for explaining what a scene is, the account creation and log in modals, and the modal for downloading a dataset when not logged in."
                ]
            }}
        />
    )
}
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
                    "When my partner, who is the co-founder of a start up, first began building his company’s web app, he asked me to help him mock up some wire frames. Even though I had no UI or UX experience at this point, I had already become interested in design and wanted to give it a try.",
                    "The company, called Zumo Labs, creates synthetic data for computer vision-related AI using video game engines. For the non-technical, this means that they create fake data for AIs to learn with. In the initial stages, the idea was that their web app, called the Zumolyzer, would allow users to configure and generate their own data and be able to view and download those datasets.",
                    "With the help of a friend, who is a product manager, and using my limited knowledge of UX from that one class I took in college, I was able to mock up a basic account log in/creation workflow, a page for view datasets, and a configuration workflow.",
                    "Although the company has since drilled down their product scope in a different direction, the current data page is still loosely based on my original concept. Additionally, I learned how much I like working on these kinds of projects.",
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
                            "One of the challenges was that the company had not yet nailed down specifically what their product was going to be so I was given a very loosely defined specification. They weren’t sure if they were going to have subscription-tiered access or free access without an account, what data the user was going to be able to see, or what controls the user was going to have access to. Obviously this made it very difficult to figure out how to organize and design the information and workflows. Nonetheless I worked with my partner to decide on a direction and content that was most likely for them at the time and based my design off that.",
                            "Because the specification was so loosely defined, it made the already complex task of figuring out a user workflow even harder. At the time, I wasn’t really aware of low vs high-fidelity wireframes so I started off with a white-boarding session with my product manager friend. We discussed various ways to narrow down the important workflows and the variations between when the user had an account and when they didn’t. From there, I gathered information from my partner about what information the data-viewing and configuration pages would contain and what controls the user should be allowed to have over both. We talked about the general concepts behind training data and how synthetic data works so that I could have a deeper understanding of the workflows I was going to be designing. With all this information in hand, I eventually created the high-fidelity wireframes shown below.",
                        ],
                        flexDirection: "column"
                    },
                ]
            }}
            successes={{
                text: [
                    "My biggest success of this project was being able to create a useful wireframe despite having little to no UI/UX experience nor a well-defined specification. And even though the product ended up going in a different direction than my design, my partner found it very useful as a developer to have some sort of UX specification to work with because it was one less thing for him to figure out amidst the daunting task of building an entire web application. The wireframes are shown below and include the page for viewing datasets, the page for configuring a dataset, a tooltip modal for explaining what a scene is, the account creation and log in modals, and the modal for downloading a dataset when not logged in."
                ]
            }}
        />
    )
}
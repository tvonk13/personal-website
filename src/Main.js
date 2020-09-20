import React from "react";
import { Route, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';

import Nav from "./Nav";
import Home from "./Home";
import Projects from "./Projects/Projects";
import PersonalWebsite from "./Projects/ProjectPages/PersonalWebsite";
import ArtWebsite from "./Projects/ProjectPages/ArtWebsite";
import PuzzleStats from "./Projects/ProjectPages/PuzzleStats";
import Zumolyzer from "./Projects/ProjectPages/Zumolyzer";
import About from "./About";
import Resume from "./Resume/Resume";
import Footer from "./Footer";

import Mountains from './assets/mountain-illustration-no-treeline.svg';

const useStyles = makeStyles(themeObject => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        minWidth: '100%',
        backgroundColor: themeObject.palette.secondary.main,
        backgroundImage: `url(${Mountains})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    noBackground: {
        backgroundImage: 'none'
    }
}));

function Main() {
    const styles = useStyles();
    const {pathname} = useLocation();

    return (
        <div className={clsx(styles.main, pathname !== '/' && styles.noBackground)}>
            <Nav />
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/projects/personal-website" component={PersonalWebsite} />
            <Route exact path="/projects/art-website" component={ArtWebsite} />
            <Route exact path="/projects/puzzle-stats" component={PuzzleStats} />
            <Route exact path="/projects/zumolyzer" component={Zumolyzer} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Footer />
        </div>
    );
}

export default Main;
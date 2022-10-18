import React, {useEffect, useState} from 'react';
import { Route, useLocation } from "react-router-dom";
import { makeStyles, Fade } from "@material-ui/core";
import clsx from 'clsx';

import Nav from "./Nav";
import Home from "./Home";
import Projects from "./Projects/Projects";
import About from "./About";
import Resume from "./Resume/Resume";
import Footer from "./Footer";

import Mountains from './assets/mountain-illustration-no-treeline.svg';
import ProjectPage from "./Projects/ProjectPage/ProjectPage";

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

    const [isImgLoaded, setIsImgLoaded] = useState(false);

    useEffect(() => {
        var img = new Image();
        img.onload = () => {
            setIsImgLoaded(true);
        }
        img.src = Mountains;
    }, []);

    return (
        <Fade in={isImgLoaded} timeout={1000}>
            <div className={clsx(styles.main, pathname !== '/' && styles.noBackground)}>
                <Nav />
                <Route exact path="/" component={Home} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/projects/:projectUid" component={ProjectPage} />
                <Route path="/about" component={About} />
                <Route path="/resume" component={Resume} />
                <Footer />
            </div>
        </Fade>
    );
}

export default Main;
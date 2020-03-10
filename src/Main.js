import React from "react";
import { Route, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';

import Nav from "./Nav";
import Home from "./Home";
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
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Footer />
        </div>
    );
}

export default Main;
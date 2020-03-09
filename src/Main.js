import React from "react";
import { Route, HashRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Footer from "./Footer";

const useStyles = makeStyles(themeObject => ({
    main: {
        minHeight: '100%',
        height: '100%',
        width: '100%',
        backgroundColor: themeObject.palette.secondary.main,
    },
}));

function Main() {
    const styles = useStyles();

    return (
        <HashRouter>
            <div className={styles.main}>
                <Nav />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/resume" component={Resume} />
                <Footer />
            </div>
        </HashRouter>
    );
}

export default Main;
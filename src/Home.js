import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { makeStyles, Grid, Typography, Button, Container, Fade } from "@material-ui/core";

const useStyles = makeStyles(themeObject => ({
    homeContainer: {
        display: 'flex',
        flexGrow: 1,
    },
    hi: {
        fontFamily: 'Neucha'
    }
}));

function Home() {
    const styles = useStyles();

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <Fade in={loaded} timeout={2000}>
            <Container maxWidth="sm" className={styles.homeContainer} >
                <Grid container direction="column" alignItems="center" justify="center" spacing={2} >
                    <Grid item>
                        <Typography variant="h3" color="primary" className={styles.hi} >
                            Hi, I'm Taylor!
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align="center" color="primary" paragraph >
                            I am a software engineer who brings together technical skills and a passion for design to create elegantly functional and functionally elegant websites.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button to="/projects" component={Link} variant="contained" color="primary" >
                            View Projects
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Fade>
    );
}

export default Home;
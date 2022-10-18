import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { makeStyles, Grid, Button, Container, Fade, Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    homeContainer: {
        display: 'flex',
        flexGrow: 1,
    },
    hi: {
        fontFamily: 'Neucha'
    },
    homeText: {
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(3),
        },
    }
}));

function Home() {
    const classes = useStyles();

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <Fade in={loaded} timeout={1000}>
            <Container maxWidth="sm" className={classes.homeContainer} >
                <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2} className={classes.homeText}>
                    <Grid item>
                        <Box fontSize={48} color="primary.main" fontFamily="Neucha">
                            Hi, I'm Taylor!
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box fontSize={18} textAlign="center" color="primary.main" mb={2}>
                            I am a software engineer with a passion for synthesizing sophisticated design and elegant functionality.
                        </Box>
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
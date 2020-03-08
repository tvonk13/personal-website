import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles, Grid, Typography, Button, Box, Container } from "@material-ui/core";
import Mountains from './assets/mountain-illustration-no-treeline.svg';

const useStyles = makeStyles(themeObject => ({
    home: {
        backgroundImage: `url(${Mountains})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minWidth: '100%',
        minHeight: '100%',
    },
    homeContainer: {
        paddingTop: '35vh',
        width: '40%',
        maxWidth: 600
    },
    hi: {
        fontFamily: 'Neucha'
    }
}));

function Home() {
    const styles = useStyles();

    return (
        <Box className={styles.home} >
            <Container className={styles.homeContainer} >
                <Grid container direction="column" alignItems="center" justify="center" spacing={2} >
                    <Grid item>
                        <Typography variant="h3" color="primary" className={styles.hi} >
                            Hi, I'm Taylor!
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align="center" color="primary" paragraph >
                            I'm a software engineer with full-stack experience creating web applications. Check out my resume for more info!
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button to="/resume" component={Link} variant="contained" color="primary" >
                            Resume
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Home;
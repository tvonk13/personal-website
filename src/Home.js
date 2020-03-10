import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles, Grid, Typography, Button, Container } from "@material-ui/core";

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

    return (
        <Container maxWidth="sm" className={styles.homeContainer} >
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
    );
}

export default Home;
import React, { useState, useEffect } from "react";
import { makeStyles, Container, Grid, Fade, Box } from "@material-ui/core";
import { useSinglePrismicDocument, PrismicRichText } from "@prismicio/react";

const useStyles = makeStyles(theme => ({
    aboutContainer: {
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(4),
        },
        minHeight: `calc(100vh - ${theme.spacing(28)}px)`,
    },
    about: {
        margin: theme.spacing(6, 0, 10, 0),
        flexGrow: 1,
    },
    profileContainer: {
        width: '25vw',
        height: '25vw',
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down('xs')] : {
            width: '50vw',
            height: '50vw',
        }
    },
    profileImg: {
        width: '100%',
        height: '100%',
    }
}));

export default function About() {
    const classes = useStyles();

    const [loaded, setLoaded] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);
    const [about] = useSinglePrismicDocument('about');

    useEffect(() => {
        if (!!about) setLoaded(true);
    }, [about]);

    return (
        <>
            {
                about ?
                <Fade in={loaded} timeout={500}>
                    <Container maxWidth="md" className={classes.aboutContainer}>
                        <Grid container justifyContent="center" alignItems="center" direction="column" className={classes.about}>
                            <Grid item className={classes.profileContainer}>
                                <Fade in={imgLoaded} timeout={1000}>
                                    <img src={about?.data.profile.url} onLoad={() => setImgLoaded(true)} className={classes.profileImg} alt="Profile"/>
                                </Fade>
                            </Grid>
                            <Grid item >
                                <Box fontSize={16} color="primary.main" fontWeight="fontWeightLight" mb={3}>
                                    <PrismicRichText field={about?.data.description} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Fade>
                :
                <Box height={'100vh'} />
            }
        </>
    );
}
import React from 'react';
import {makeStyles, Container, Grid, Fade} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    headerContainer: {
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(5),
        },
    }
}))

export function Header({children}) {
    const classes = useStyles();

    return(
        <Fade in={true} timeout={500}>
            <Container maxWidth="md" className={classes.headerContainer}>
                <Grid container>
                    <Grid item xs={12} sm={5}>
                        { children.length > 0 && children[0] }
                    </Grid>
                    <Grid item xs={12} sm={7} style={{paddingTop: "4px"}}>
                        { children.length > 1 && children[1] }
                    </Grid>
                </Grid>
            </Container>
        </Fade>
    )
}

export function HeaderImage({image, altText}) {
    return (<img src={image} alt={altText} style={{width: "100%", boxShadow: "2px 2px 10px #888899"}}/>
    )
}
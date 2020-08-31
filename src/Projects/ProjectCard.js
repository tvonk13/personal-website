import React from 'react';
import { Grid, makeStyles, Box } from '@material-ui/core';
import Tag from './Tag';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    title: {
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        }
    },
    tag: {
        margin: theme.spacing(2)
    }
}));

export default function ProjectCard({title, tags, img, link}) {
    const classes = useStyles();
    return (
        <Grid container direction="column" alignItems="center">
            <Box component={Link} to={"projects/" + link} display="inline" fontFamily="Neucha" fontSize={24} color="primary.main" className={classes.title}>{title}</Box>
            <Grid item container justify="center">
                {
                    tags &&
                    tags.map((tag, index) => {
                        return <Tag tag={tag} key={index} marginRight={.5} marginLeft={.5}/>
                    })
                }
            </Grid>
            <Box display="inline"
                 width="400px"
                 height="215px"
                 mt={2}
                 boxShadow="2px 2px 10px #888899"
                 borderRadius={3}
                 style={{
                    backgroundImage: `url(${img})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center top',
                    backgroundSize: 'cover'
                 }}></Box>
        </Grid>
    )
}
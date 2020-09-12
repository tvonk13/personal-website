import React from 'react';
import { Grid, makeStyles, Box } from '@material-ui/core';
import Tag from './Tag';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    tag: {
        margin: theme.spacing(2)
    },
    tile: {
        "&:hover": {
            opacity: 0.6
        },
    }
}));

export default function ProjectCard({title, tags, img, link}) {
    const classes = useStyles();
    return (
        <Grid container direction="column" alignItems="center" style={{marginTop: "16px"}}>
            <Box display="flex" fontFamily="Neucha" fontSize={24} color="primary.main">{title}</Box>
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
                     backgroundSize: 'cover',
                 }}
                 className={classes.tile}
                 component={Link}
                 to={"projects/" + link}
                 />
        </Grid>
    )
}
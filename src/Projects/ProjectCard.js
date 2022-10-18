import React from 'react';
import {makeStyles, Box, Fade} from '@material-ui/core';
import Tag from './ProjectPage/Header/Tag';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    tag: {
        margin: theme.spacing(2)
    },
    tile: {
        "&:hover": {
            opacity: 0.6
        },
        [theme.breakpoints.down('sm')] :{
            width: '100%',
            height: `calc(100vw * 0.53)`,
        }
    },
}));

export default function ProjectCard({title, tags, img, link}) {
    const classes = useStyles();
    return (
        <Fade in={true} timeout={1000}>
            <Box display="flex" flexDirection="column" alignItems="center" mt={4} minWidth={{ xs: '85vw', md: '400px'}}>
                <Box display="flex" fontFamily="Neucha" fontSize={30} color="primary.main">{title}</Box>
                <Box display="flex" justifyContent="center">
                    {
                        tags &&
                        tags.map((tag, index) => {
                            return <Tag tag={tag} key={index} marginRight={.5} marginLeft={.5}/>
                        })
                    }
                </Box>
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
            </Box>
        </Fade>
    )
}
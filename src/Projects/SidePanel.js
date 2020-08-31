import React from 'react';
import { Grid, Box, makeStyles } from '@material-ui/core';
import Tag from "./Tag";
import GitHub from "../assets/github-dark.svg";
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';

const useStyles = makeStyles(theme => ({
    section: {
        marginBottom: theme.spacing(4),
    },
    icon: {
        width: theme.spacing(3),
        marginRight: theme.spacing(2),
    },
    linkContainer: {
      marginBottom: theme.spacing(.5),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        }
    }
}));

export default function SidePanel({title, version, tags, season, year, websiteLink, githubLinks, tools}) {
    const classes = useStyles();

    return (
        <Box display="flex" flexDirection="column" height="fit-content" position="fixed">
            {/*Title and Tags*/}
            <Box display="flex" flexDirection="column" mb={16} className={classes.section}>
                {/*Title*/}
                <Box display="flex" alignItems="center">
                    <Box display="inline" fontFamily="Neucha" fontSize={24} color="primary.main">{title}</Box>
                    {
                        version && <Box display="inline" fontFamily="Neucha" fontSize={14} color="primary.main" ml={1} mt={.25} fontWeight="fontWeightLight">[{version}]</Box>
                    }
                </Box>
                {/*Tags*/}
                <Box display="flex">
                    {
                        tags &&
                        tags.map((tag, index) => {
                            return <Tag tag={tag} key={index} marginRight={1}/>
                        })
                    }
                </Box>
            </Box>
            {/*Links*/}
            { (websiteLink || githubLinks) &&
                <Box display="flex" flexDirection="column" className={classes.section}>
                    {
                        websiteLink &&
                        <Box display="flex" className={classes.linkContainer}>
                            <LinkRoundedIcon className={classes.icon}/>
                            <Box display="inline"><a href={`https://www.${websiteLink}`}
                                                     target="_blank"
                                                     rel="noopener noreferrer"
                                                     className={classes.link}>{websiteLink}</a></Box>
                        </Box>
                    }
                    {
                        githubLinks &&
                        githubLinks.map((link, index) => {
                            return (
                                <Box display="flex" alignItems="center" key={index} className={classes.linkContainer}>
                                    <img src={GitHub} className={classes.icon} alt="GitHub"/>
                                    <Box display="inline"><a href={`https://www.github.com/${link}`} target="_blank"
                                                             rel="noopener noreferrer"
                                                             className={classes.link}>{link}</a></Box>
                                </Box>
                            )
                        })
                    }
                </Box>
            }
            {/*Date*/}
            <Box display="flex" className={classes.section}>
                <Box display="inline" fontWeight="fontWeightSemiBold" fontSize={16} color="primary.main" mr={1}>{season}</Box>
                <Box display="inline" fontWeight="fontWeightLight" fontSize={16} color="primary.main">{year}</Box>
            </Box>
            {/*Tools*/}
            <Box display="flex" flexDirection="column">
                <Box display="inline" fontWeight="fontWeightSemiBold" fontSize={16} color="primary.main" mb={2}>Tools</Box>
                {
                    tools &&
                    <Box display="flex" flexDirection="column">
                        {tools}
                    </Box>
                }
            </Box>
        </Box>
    )
}
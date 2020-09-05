import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
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
        height: theme.spacing(4),
        alignItems: "center",
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        }
    }
}));

export default function SidePanel(props) {
    const classes = useStyles();
    const {title, subtitle, tags, season, year, websiteText, websiteUrl, githubLinks, tools} = props;

    return (
        <Box display="flex" flexDirection="column" height="fit-content" position="sticky" top={24}>
            {/*Title and Tags*/}
            <Box display="flex" flexDirection="column" mb={8} className={classes.section}>
                {/*Title*/}
                <Box display="flex" flexDirection="column">
                    <Box display="flex" fontFamily="Neucha" fontSize={24} color="primary.main">{title}</Box>
                    {
                        subtitle &&
                        <Box display="flex" fontSize={14} fontWeight="fontWeightLight" color="primary.main" mb={2}>
                            {subtitle}
                        </Box>
                    }
                </Box>
                {/*Tags*/}
                <Box display="flex" flexWrap="wrap">
                    {
                        tags &&
                        tags.map((tag, index) => {
                            return <Tag tag={tag} key={index} marginRight={1} marginBottom={1}/>
                        })
                    }
                </Box>
            </Box>
            {/*Links*/}
            { ((websiteText && websiteUrl)|| githubLinks) &&
                <Box display="flex" flexDirection="column" justifyContent="space-evenly" className={classes.section}>
                    {
                        websiteUrl && websiteText &&
                        <Box display="flex" className={classes.linkContainer}>
                            <LinkRoundedIcon className={classes.icon}/>
                            <Box display="flex" maxWidth={200}><a href={websiteUrl}
                                                     target="_blank"
                                                     rel="noopener noreferrer"
                                                     className={classes.link}>{websiteText}</a></Box>
                        </Box>
                    }
                    {
                        githubLinks &&
                        githubLinks.map((link, index) => {
                            return (
                                <Box display="flex" alignItems="center" key={index} className={classes.linkContainer}>
                                    <img src={GitHub} className={classes.icon} alt="GitHub"/>
                                    <Box display="flex" maxWidth={200}><a href={`https://www.github.com/${link}`} target="_blank"
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
                <Box display="flex" fontWeight="fontWeightSemiBold" fontSize={16} color="primary.main" mb={2}>Tools</Box>
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
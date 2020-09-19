import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Tag from './Tag';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';
import GitHub from '../../../assets/github-dark.svg';

const useStyles = makeStyles(theme => ({
    headerPanel: {
        [theme.breakpoints.down('xs')]: {
            alignItems: "center",
            marginBottom: theme.spacing(4),
        },
    },
    subtitle: {
        [theme.breakpoints.down('xs')]: {
            textAlign: "center",
        },
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
        },
        fontSize: 16,
        fontWeight: 300,
    }
}))

export default function HeaderPanel(props) {
    const classes = useStyles();
    const { title, tags, subtitle, season, year, websiteText, websiteUrl, githubLinks } = props;
    const spacing = 3;

    return (
        <Box display="flex" flexDirection="column" className={classes.headerPanel}>
            <Box display="flex" fontFamily="Neucha" fontSize={48} color="primary.main">{title}</Box>

            <Box display="flex" flexWrap="wrap">
                {
                    tags &&
                    tags.map((tag, index) => {
                        return <Tag tag={tag} key={index} marginRight={1} marginBottom={1}/>
                    })
                }
            </Box>

            {
                subtitle &&
                <Box display="flex" fontSize={16} fontWeight="fontWeightLight" color="primary.main" mt={spacing} maxWidth="75%" className={classes.subtitle}>
                    {subtitle}
                </Box>
            }

            <Box display="flex" mt={spacing}>
                <Box display="inline" fontWeight="fontWeightSemiBold" fontSize={16} color="primary.main" mr={1}>{season}</Box>
                <Box display="inline" fontWeight="fontWeightLight" fontSize={16} color="primary.main">{year}</Box>
            </Box>

            {
                ((websiteText && websiteUrl)|| githubLinks) &&
                <Box display="flex" flexDirection="column" justifyContent="space-evenly" mt={spacing}>
                    {
                        websiteUrl && websiteText &&
                        <Box display="flex" className={classes.linkContainer}>
                            <LinkRoundedIcon className={classes.icon}/>
                            <Box display="flex"><a href={websiteUrl}
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
                                    <Box display="flex"><a href={`https://www.github.com/${link}`} target="_blank"
                                                                          rel="noopener noreferrer"
                                                                          className={classes.link}>{link}</a></Box>
                                </Box>
                            )
                        })
                    }
                </Box>
            }
        </Box>
    )
}
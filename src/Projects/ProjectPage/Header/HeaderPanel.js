import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Tag from './Tag';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';
import GitHub from '../../../assets/github-dark.svg';
import { PrismicRichText } from "@prismicio/react";

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
    const { title, tags, subtitle, date, websiteText, websiteUrl, githubLink, githubLinkText } = props;

    return (
        <Box display="flex" flexDirection="column" className={classes.headerPanel}>
            <PrismicRichText
                field={title}
                components={{
                    heading1: ({children}) => <Box display="flex" fontFamily="Neucha" fontSize={48} color="primary.main">{children}</Box>
                }}
            />
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
                <Box display="flex" fontSize={16} fontWeight="fontWeightLight" color="primary.main" maxWidth="75%" className={classes.subtitle}>
                    <PrismicRichText field={subtitle} />
                </Box>
            }
            {
                date &&
                <Box display="flex" fontSize={16} fontWeight="fontWeightLight" color="primary.main" maxWidth="75%">
                    <PrismicRichText field={date} components={{ paragraph: ({children}) => <span>{children}</span>}} />
                </Box>
            }

            {
                ((websiteText && websiteUrl)|| githubLink) &&
                <Box display="flex" flexDirection="column" justifyContent="space-evenly" mt={2}>
                    {
                        websiteUrl && websiteText &&
                        <Box display="flex" className={classes.linkContainer}>
                            <LinkRoundedIcon className={classes.icon}/>
                            <Box display="flex">
                                <PrismicRichText
                                    field={websiteText}
                                    components={{
                                        paragraph: ({children}) => (
                                            <a href={websiteUrl.url} target="_blank" rel="noopener noreferrer" className={classes.link}>
                                                {children}
                                            </a>
                                        )
                                    }}
                                />
                            </Box>
                        </Box>
                    }
                    {
                        githubLink && githubLinkText &&
                        <Box display="flex" alignItems="center" className={classes.linkContainer}>
                            <img src={GitHub} className={classes.icon} alt="GitHub"/>
                            <Box display="flex">
                                <PrismicRichText
                                    field={githubLinkText}
                                    components={{
                                        paragraph: ({children}) => (
                                            <a href={githubLink.url} target="_blank" rel="noopener noreferrer" className={classes.link}>
                                                {children}
                                            </a>
                                        )
                                    }}
                                />
                            </Box>
                        </Box>
                    }
                </Box>
            }
        </Box>
    )
}
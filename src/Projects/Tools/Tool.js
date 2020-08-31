import React from 'react';
import { Box, Grid, makeStyles } from '@material-ui/core';
import Figma from '../../assets/tools/figma.png';
import Affinity from '../../assets/tools/affinity-designer.png';
import ReactLogo from '../../assets/tools/react.png';
import MUI from '../../assets/tools/mui.png';
import AWS from '../../assets/tools/aws-amplify.png';

const useStyles = makeStyles(theme => ({
    icon: {
        width: theme.spacing(3),
        maxHeight: theme.spacing(4),
        marginRight: theme.spacing(2),
    }
}))

export function Tool({icon, text}) {
    const classes = useStyles();

    return (
        <Grid container alignItems="center" style={{marginBottom: '8px'}}>
            <img src={icon} className={classes.icon} alt="GitHub" />
            <Box display="inline" fontWeight="fontWeightLight" color="primary.main">{text}</Box>
        </Grid>
    )
}

export function AffinityTool({text}) {
    const toolText = text === undefined ? "Asset creation" : text;
    return <Tool text={toolText} icon={Affinity}/>
}

export function FigmaTool({text}) {
    const toolText = text === undefined ? "UI Design" : text;
    return <Tool text={toolText} icon={Figma}/>
}

export function ReactTool({text}) {
    const toolText = text === undefined ? "Front End Development" : text;
    return <Tool text={toolText} icon={ReactLogo}/>
}

export function MUITool({text}) {
    const toolText = text === undefined ? "UI/UX Implementation" : text;
    return <Tool text={toolText} icon={MUI}/>
}

export function AWSTool({text}) {
    const toolText = text === undefined ? "Hosting" : text;
    return <Tool text={toolText} icon={AWS}/>
}
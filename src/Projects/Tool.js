import React from 'react';
import { Box, Grid, makeStyles } from '@material-ui/core';
import Figma from '../assets/tools/figma.png';
import Affinity from '../assets/tools/affinity-designer.png';
import ReactLogo from '../assets/tools/react.png';
import MUI from '../assets/tools/mui.png';
import AWSAmplify from '../assets/tools/aws-amplify.png';
import AWSLambda from '../assets/tools/aws-lambda-logo.png';
import AWSAPIGateway from '../assets/tools/aws-api-gateway-logo.svg';
import AWSGraphql from '../assets/tools/aws-graphql-logo.png';
import AWSCognito from '../assets/tools/aws-cognito-logo.png';

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
        <Grid container alignItems="center" style={{height: "35px"}}>
            <img src={icon} className={classes.icon} alt={text} />
            <Box display="inline" fontWeight="fontWeightLight" color="primary.main">{text}</Box>
        </Grid>
    )
}

export function AffinityTool({text}) {
    const toolText = text === undefined ? "Affinity Designer" : text;
    return <Tool text={toolText} icon={Affinity}/>
}

export function FigmaTool({text}) {
    const toolText = text === undefined ? "Figma" : text;
    return <Tool text={toolText} icon={Figma}/>
}

export function ReactTool({text}) {
    const toolText = text === undefined ? "React" : text;
    return <Tool text={toolText} icon={ReactLogo}/>
}

export function MUITool({text}) {
    const toolText = text === undefined ? "Material UI" : text;
    return <Tool text={toolText} icon={MUI}/>
}

export function AWSAmplifyTool({text}) {
    const toolText = text === undefined ? "AWS Amplify" : text;
    return <Tool text={toolText} icon={AWSAmplify}/>
}

export function AWSAPIGatewayTool({text}) {
    const toolText = text === undefined ? "AWS API Gateway" : text;
    return <Tool text={toolText} icon={AWSAPIGateway}/>
}

export function AWSLambdaTool({text}) {
    const toolText = text === undefined ? "AWS Lambda" : text;
    return <Tool text={toolText} icon={AWSLambda}/>
}

export function AWSGraphqlTool({text}) {
    const toolText = text === undefined ? "AWS Graphql" : text;
    return <Tool text={toolText} icon={AWSGraphql}/>
}

export function AWSCognitoTool({text}) {
    const toolText = text === undefined ? "AWS Cognito" : text;
    return <Tool text={toolText} icon={AWSCognito}/>
}
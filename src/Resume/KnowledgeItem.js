import React from 'react';
import { makeStyles, Grid, Box } from "@material-ui/core";
import TreeOutline from '../assets/tree-icon-outline.svg'
import TreeFilled from '../assets/tree-icon-filled.svg'

const useStyles = makeStyles(theme => ({
    knowledgeItemRow: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        marginBottom: 16,
    },
    description: {
        width: 200,
    },
    icon: {
        height: 20
    }
}));

function KnowledgeItem({name, level}){
    const classes = useStyles();

    var filled = [];    
    for (var i = 1; i <= level; i++) {
        filled.push(<img src={TreeFilled} key={i} className={classes.icon} alt="filled" />);
    }

    var unfilled = []
    for (var j = 1; j <= (5 - level); j++) {
        unfilled.push(<img src={TreeOutline} key={j} className={classes.icon} alt="outlined"/>);
    }
    
    return(
        <Grid container className={classes.knowledgeItemRow}>
            <Grid item xs={6} md={5}>
                <Box fontSize={16} color="primary.main" fontWeight="fontWeightLight">{name}</Box>
            </Grid>
            <Grid item xs={6} md={7}>
                {filled}
                {unfilled}
            </Grid>
        </Grid>
    );
}

export default KnowledgeItem;
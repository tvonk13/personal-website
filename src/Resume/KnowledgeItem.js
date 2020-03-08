import React from 'react';
import { makeStyles, Typography, Grid } from "@material-ui/core";
import TreeOutline from '../assets/tree-icon-outline.svg'
import TreeFilled from '../assets/tree-icon-filled.svg'

const useStyles = makeStyles(themeObject => ({
    description: {
        width: '100%'
    },
    icon: {
        height: 20
    }
}));

function KnowledgeItem({name, level}){
    const styles = useStyles();

    var filled = [];    
    for (var i = 1; i <= level; i++) {
        filled.push(<img src={TreeFilled} key={i} className={styles.icon}/>);
    }

    var unfilled = []
    for (var i = 1; i <= (5 - level); i++) {
        unfilled.push(<img src={TreeOutline} key={i} className={styles.icon}/>);
    }
    
    return(
        <Grid container direction="row" justify="space-between" spacing={3}>
            <Grid item>
                <Typography variant="body1">{name}</Typography>
            </Grid>
            <Grid item>
                {filled}
                {unfilled}
            </Grid>
        </Grid>
    );
}

export default KnowledgeItem;
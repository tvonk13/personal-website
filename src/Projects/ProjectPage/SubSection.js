import React from 'react';
import { Grid, Box } from '@material-ui/core';

export default function SubSection({subSectionTitle, mb, children}) {
    return (
        <Grid container direction="column" style={{marginBottom: `${mb * 8}px`}}>
            <SubSectionTitle sectionTitle={subSectionTitle} />
            {children}
        </Grid>
    )
}

function SubSectionTitle({sectionTitle}) {
    return (
        <Box fontSize={18} mb={2}>{sectionTitle}</Box>
    )
}
import React from 'react';
import { Box } from '@material-ui/core';

export default function SectionTitle({sectionTitle, color, mb, mt}) {
    const underlineColor = color === "white" ? "linear-gradient(to left, rgba(255,255,255,0),rgba(255,255,255,1))"
                                             : "linear-gradient(to left, rgba(55,55,74,0),rgba(55,55,74,1))";
    return (
        <Box mb={mb} mt={mt}>
            <Box color={color ? color : "primary.main"} fontSize={24} fontWeight="fontWeightBold" mb={1}>{sectionTitle}</Box>
            <Box height={2} borderRadius={10} style={{backgroundImage: underlineColor}}/>
        </Box>
    )
}
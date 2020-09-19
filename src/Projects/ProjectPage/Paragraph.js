import React from 'react';
import { Box } from '@material-ui/core';

export default function Paragraph({text, mb, color}) {
    return (
        <Box display="flex" fontSize={14} fontWeight="fontWeightLight" mb={mb} color={color} lineHeight={2}>
            {text}
        </Box>
    )
}
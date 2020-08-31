import React from 'react';
import { Box } from '@material-ui/core';

export default function Bullet({radius, offsetLeft, offsetRight}) {
    return <Box width={radius} height={radius} borderRadius={25} bgcolor="primary.main" style={{marginLeft: offsetLeft, marginRight: offsetRight}}></Box>
}
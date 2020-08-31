import React from 'react';
import { Box } from '@material-ui/core';

export default function Tag({tag, marginRight, marginLeft}) {
    return(
        <Box
            display="inline"
            border={1}
            borderColor="primary.main"
            mr={marginRight === undefined ? 0 : marginRight}
            ml={marginLeft === undefined ? 0 : marginLeft}
            px={1}
            py={.5}
            borderRadius={3}
            color="primary.main"
            fontSize={12}
            fontWeight="fontWeightLight"
        >
            {tag}
        </Box>
    )
}
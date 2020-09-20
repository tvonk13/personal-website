import React from 'react';
import { Box } from '@material-ui/core';

export default function Tag({tag, marginRight, marginLeft, marginBottom, marginTop}) {
    return(
        <Box
            display="inline"
            border={1}
            borderColor="primary.main"
            mr={marginRight === undefined ? 0 : marginRight}
            ml={marginLeft === undefined ? 0 : marginLeft}
            mt={marginTop === undefined ? 0 : marginTop}
            mb={marginBottom === undefined ? 0 : marginBottom}
            px={1}
            py={.5}
            borderRadius={3}
            color="primary.main"
            fontSize="typography.bodyText"
            fontWeight="fontWeightLight"
        >
            {tag}
        </Box>
    )
}
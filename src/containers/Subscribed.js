import { Box } from '@mui/material';
import * as React from 'react';
import { useParams } from 'react-router-dom';

const Subscribed = () => {
    let params = useParams();

    return (
      <Box sx={{ mt: 10 }}>
        Thank you for subscribing! <br />
        {params?.plan && `Your plan now: ${params?.plan}`}
      </Box>
    );
}

export default Subscribed;
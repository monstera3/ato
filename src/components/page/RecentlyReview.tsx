import React from 'react';
import {
  Box,
  Container,
  Typography
} from '@mui/material';
import { ReviewCard } from './ReviewCard';

export const RecentlyReview=()=> {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Typography gutterBottom variant="h5" component="div">
          最近投稿された感想
        </Typography>
        <Box
          sx={{ my: 5,backgroundColor: '#f5f5f5',display: 'flex',
            justifyContent: 'space-end'}}>
          <ReviewCard />
          <ReviewCard />
        </Box>

      </Container>


    </div>

  );
};

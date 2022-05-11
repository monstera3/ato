import React from 'react';
import {
  Button,
  Container,
  Typography
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { ExhibitionCard } from './ExhibitionCard';


export const FeaturedExhibition=()=> {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Typography gutterBottom variant="h5" component="div">
          注目の展覧会
        </Typography>
        <Container
          sx={{ my: 5,backgroundColor: '#f5f5f5',display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'}}>
        <ExhibitionCard />
        <ExhibitionCard />
        <ExhibitionCard />
        </Container>
        <Button
          sx={{ my: 5,backgroundColor: '#f5f5f5'
            }}
          variant="outlined" endIcon={<ArrowRightAltIcon />}>
          more
        </Button>
      </Container>

    </div>

  );
};

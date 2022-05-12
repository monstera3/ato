import React from 'react';
import {
  Button,
  Container, Link,
  Typography
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { ExhibitionCard } from '../model/ExhibitionCard';


export const FeaturedExhibition=()=> {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Typography gutterBottom variant="h5" component="div">
          注目の展覧会
        </Typography>
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Container
            sx={{ my: 5,backgroundColor: '#f5f5f5',display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'}}>
            <ExhibitionCard />
            <ExhibitionCard />
            <ExhibitionCard />
          </Container>
          <Button
            sx={{ my: 5, backgroundColor: '#f5f5f5', width: 100 }}
            variant="outlined" endIcon={<ArrowRightAltIcon />}>
            <Link href='exhibitions' underline='none'>more</Link>
          </Button>
        </Container>
      </Container>

    </div>

  );
};

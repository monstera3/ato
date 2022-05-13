import React from 'react';
import {
  Button,
  Container, Grid, Link,
  Typography
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { ExhibitionCard } from '../model/ExhibitionCard';
import { getExhibitions } from '../../data';


export const FeaturedExhibition=()=> {

  const exhibitions = getExhibitions();

  return (
    <div className="App">
      <Container maxWidth="md">
        <Typography gutterBottom variant="h5" component="div">
          注目の展覧会
        </Typography>
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Grid container spacing={2}>
              {exhibitions.map((exhibition)=>(
                <Grid item xs={12} sm={6} md={4} lg={4} key={exhibition.id}>
                  {/*<Link to={'/exhibitions/'+exhibition.id}>*/}
                    <ExhibitionCard exhibition={exhibition}/>
                  {/*</Link>*/}

                </Grid>
              ))}
            </Grid>
          <Button
            sx={{ my: 5, backgroundColor: '#f5f5f5', width: 100 }}
            variant="outlined" endIcon={<ArrowRightAltIcon />}>
            {/*TODO ExhibitionListコンポーネントにリンクしたい*/}
            <Link href="exhibitions" underline='none'>more</Link>
          </Button>
        </Container>
      </Container>

    </div>

  );
};

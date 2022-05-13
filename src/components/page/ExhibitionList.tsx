import { Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ExhibitionCard } from '../model/ExhibitionCard';
import { getMuseums } from '../../data';

export const ExhibitionList=()=> {

  const museums = getMuseums();

  return(
    <Container sx={{ maxWidth: 'md',m:'auto'}}>
      <Typography>ExhibitionList</Typography>
      <Grid container spacing={2}>
        {museums.map((museum)=>(
          <Grid item xs={12} sm={6} md={4} lg={4} key={museum.id}>
            <Link to={'/museums/'+museum.id}>
              <ExhibitionCard />
            </Link>

          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

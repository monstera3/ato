import { Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ExhibitionCard } from '../model/ExhibitionCard';
import { getExhibitions } from '../../data';

export const ExhibitionList=()=> {

const exhibitions = getExhibitions();
  return(
    <Container sx={{ maxWidth: 'md',m:'auto'}}>
      <Typography>ExhibitionList</Typography>
      <Grid container spacing={2}>
        {exhibitions.map((exhibition)=>(
          <Grid item xs={12} sm={6} md={4} lg={4} key={exhibition.id}>
            <Link to={'/exhibitions/'+exhibition.id}>
              <ExhibitionCard exhibition={exhibition}/>
            </Link>

          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

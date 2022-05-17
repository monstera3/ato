import { Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ExhibitionCard } from '../model/ExhibitionCard';
import { useQuery } from 'react-query';
import { ExhibitionType } from '../../data';

export const ExhibitionList=()=> {
  const { isLoading, error, data } = useQuery('exhibitionList', () =>
    fetch('api/exhibitions').then(res => res.json())
  );

  if (isLoading) return <div>'Loading...'</div>

  if (error) return <div>'An error has occurred'</div>

  return(
    <Container maxWidth='md' sx={{ m:'auto'}}>
      <Typography>ExhibitionList</Typography>
      <Grid container spacing={2}>
        {data.map((exhibition: ExhibitionType)=>(
          <Grid item xs={12} sm={6} md={6} lg={6} key={exhibition.id}>
            <Link to={'/exhibitions/'+exhibition.id}>
              <ExhibitionCard exhibition={exhibition}/>
            </Link>

          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

import { Grid} from '@mui/material';
import { MuseumCard } from '../model/MuseumCard';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

export const MuseumList=()=> {

  const { isLoading, error, data } = useQuery('museumList', () =>
    fetch('api/museums').then(res => res.json())
  );

  if (isLoading) return <div>'Loading...'</div>

  if (error) return <div>'An error has occurred'</div>

  return(
    <Grid container spacing={2} maxWidth="md" m="auto">
      {data.map((museum: any)=>(
        <Grid item xs={12} sm={6} md={6} lg={4} key={museum.id}>
          <Link to={'/museums/'+museum.id}>
            <MuseumCard museum={museum}/>
          </Link>

        </Grid>
      ))}
    </Grid>
  );
};

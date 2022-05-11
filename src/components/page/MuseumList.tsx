import { Grid} from '@mui/material';
import { getMuseums } from '../../data';
import { MuseumCard } from '../model/MuseumCard';
import { Link } from 'react-router-dom';

export const MuseumList=()=> {

  const museums = getMuseums();

  return(
    <Grid container spacing={2}>
      {museums.map((museum)=>(
        <Grid item xs={8} key={museum.id}>
          <Link to={'/museums/'+museum.id}>
            <MuseumCard museum={museum}/>
          </Link>

        </Grid>
      ))}
    </Grid>
  );
};

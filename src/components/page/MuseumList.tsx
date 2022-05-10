import { Grid} from '@mui/material';
import { getMuseums } from '../../data';
import { Museum } from '../model/Museum';
import { Link } from 'react-router-dom';

export const MuseumList=()=> {

  const museums = getMuseums();

  return(
    <Grid container spacing={2}>
      {museums.map((museum)=>(
        <Grid item xs={8}>
          <Link to={'/museums/'+museum.id}>
            <Museum museum={museum}/>
          </Link>

        </Grid>
      ))}
    </Grid>
  );
};

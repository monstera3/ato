import { Grid} from '@mui/material';
import { getMuseums } from '../../data';
import { Museum } from '../model/Museum';

export const MuseumList=()=> {

  const museums = getMuseums();

  return(
    <Grid container spacing={2}>
      {museums.map((museum)=>(
        <Grid item xs={8}>
          <Museum museum={museum}/>
        </Grid>
      ))}
    </Grid>
  );
};

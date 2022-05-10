import { Grid} from '@mui/material';
import { getMuseums } from '../../data';

export const MuseumList=()=> {

  const museums = getMuseums();

  return(
    <Grid container spacing={2}>
      {museums.map((museum)=>(
        <Grid item xs={8}>
          {museum.museumName} {museum.address} {museum.access}
        </Grid>
      ))}
    </Grid>
  );
};

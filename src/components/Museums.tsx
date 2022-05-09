import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MuseumIcon from '@mui/icons-material/Museum'
import { getMuseums } from '../data';

export const Museums=()=> {

  const museums = getMuseums();

  return(
    <List>
      {museums.map((museum)=>(
        <ListItem>
          <ListItemIcon><MuseumIcon/></ListItemIcon>
          <ListItemText primary={museum.museumName} secondary={museum.access}/>
        </ListItem>
      ))}
    </List>
  );
};

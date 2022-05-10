import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MuseumIcon from '@mui/icons-material/Museum'
import { getMuseums } from '../../data';

export const MuseumList=()=> {

  const museums = getMuseums();

  return(
    <List>
      {museums.map((museum)=>(
        <ListItem key={museum.id}>
          <ListItemIcon><MuseumIcon/></ListItemIcon>
          <ListItemText primary={museum.museumName} secondary={museum.access}/>
        </ListItem>
      ))}
    </List>
  );
};

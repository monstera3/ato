import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MuseumIcon from '@mui/icons-material/Museum'

export const Museums=()=> {
  return(
    <List>
      <ListItem><ListItemIcon><MuseumIcon /></ListItemIcon><ListItemText primary="Single-line item" secondary="secondary"/></ListItem>
      <ListItem><ListItemIcon><MuseumIcon /></ListItemIcon><ListItemText primary="Single-line item" secondary="secondary"/></ListItem>
      <ListItem><ListItemIcon><MuseumIcon /></ListItemIcon><ListItemText primary="Single-line item" secondary="secondary"/></ListItem>
    </List>
  );
};

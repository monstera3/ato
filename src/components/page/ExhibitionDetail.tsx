import React from 'react';
import {
  Box, Collapse,
  Container,
  ImageListItem,
  List,
  ListItemButton, ListItemIcon, ListItemText,
  ListSubheader,
  Typography
} from '@mui/material';
import sampleImg from '../../assets/images/sample1.png';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import CreateIcon from '@mui/icons-material/Create';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import NearMeDisabledIcon from '@mui/icons-material/NearMeDisabled';
import MuseumIcon from '@mui/icons-material/Museum';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';

export const ExhibitionDetail = () => {

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Container maxWidth='md'>
      <Typography gutterBottom variant="body2" component="p" color="text.secondary">展覧会詳細</Typography>
      <Typography gutterBottom variant="subtitle1" component="p" >東京都</Typography>
      <Typography gutterBottom variant="h4" component="p" >展覧会名：テストテスト</Typography>
      <Typography gutterBottom variant="subtitle1" component="p" >english name</Typography>
      <ImageListItem sx={{ width: 400, height: 150 }}><img src={sampleImg} alt="a" /></ImageListItem>
      <Box sx={{
        width: 'md',
        height: 300,
        backgroundColor: '#f5f5f5'
      }}>内容</Box>
      <List
        sx={{ width: '100%', maxWidth: 'md', backgroundColor: '#f5f5f5' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            information
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <CallMissedOutgoingIcon />
          </ListItemIcon>
          <ListItemText primary="公式サイト" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <CreateIcon />
          </ListItemIcon>
          <ListItemText primary="開催期間" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <NotificationsNoneIcon />
          </ListItemIcon>
          <ListItemText primary="会場" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <CurrencyYenIcon />
          </ListItemIcon>
          <ListItemText primary="入場料" />
        </ListItemButton><ListItemButton>
        <ListItemIcon>
          <NearMeDisabledIcon />
        </ListItemIcon>
        <ListItemText primary="休館日" />
      </ListItemButton><ListItemButton>
        <ListItemIcon>
          <MuseumIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <AddLocationIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>

    </Container>
  )
}

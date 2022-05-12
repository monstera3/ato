import { useParams } from 'react-router-dom';
import { getMuseum } from '../../data';
import { MuseumCard } from '../model/MuseumCard';
import {
  Box,
  Container,
  ImageListItem,
  Typography,
  List,
  Collapse,
  ListItemIcon, ListSubheader, ListItemText, ListItemButton
} from '@mui/material';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import CreateIcon from '@mui/icons-material/Create';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import NearMeDisabledIcon from '@mui/icons-material/NearMeDisabled';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MuseumIcon from '@mui/icons-material/Museum';
import React from 'react';
import sampleImg from "../../assets/images/sample1.png"
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';

export const MuseumDetail = () => {

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const params = useParams();
  const museum = getMuseum(parseInt(params.museumId ? params.museumId : '0', 10));
  return (
    <Container maxWidth='md'>
      <Typography gutterBottom variant="body2" component="p" color="text.secondary">美術館詳細</Typography>
      <Typography gutterBottom variant="subtitle1" component="p" >東京都</Typography>
      <Typography gutterBottom variant="h4" component="p" >美術館名：テストテスト</Typography>
      <Typography gutterBottom variant="subtitle1" component="p" >MUSEUM OF CONTEMPORARY ART TOKYO</Typography>
      <ImageListItem sx={{ width: 400, height: 150 }}><img src={sampleImg} alt="a" /></ImageListItem>
      <Box sx={{
        width: 'md',
        height: 300,
        backgroundColor: '#f5f5f5'
      }}>内容</Box>
      <MuseumCard museum={museum} />

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

import { useParams } from 'react-router-dom';
import { getMuseum } from '../../data';
import { MuseumCard } from '../model/MuseumCard';
import { Box, Container, ImageListItem, Typography } from '@mui/material';
import React from 'react';
import sampleImg from "../../assets/images/sample1.png"

export const MuseumDetail = () => {
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

    </Container>
     )
}

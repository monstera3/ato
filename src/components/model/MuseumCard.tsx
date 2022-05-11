import {
  Button,
  Card,
  CardActionArea, CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography
} from '@mui/material';
import { MuseumType } from '../../data';
import sampleImg from '../../assets/images/sample1.png';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import React from 'react';

export const MuseumCard = (props:{ museum: MuseumType}) => {

  return(
    <>
      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={sampleImg}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.museum.museumName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.museum.access}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip label={props.museum.address} size="small" />
            </Stack>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small"><RemoveRedEyeIcon/>閲覧数</Button>
          <Button size="small"><CreateIcon/>投稿</Button>
          <Button size="small"><BookmarkBorderIcon/>保存</Button>
        </CardActions>
      </Card>
    </>
  );
}

import {
  Button, Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia, Chip, Stack,
  Typography
} from '@mui/material';
import sampleImg from '../../assets/images/sample1.png';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import React from 'react';
import { ExhibitionType } from '../../data';


export const ExhibitionCard = (props:{ exhibition: ExhibitionType}) => {
  return(
    <div>
      <Card sx={{ maxWidth: 445 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={sampleImg}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {props.exhibition.name}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip label={props.exhibition.museum.name} size="small" />
            </Stack>
            <Typography sx={{my:1}} variant="body2" color="text.secondary">
              {props.exhibition.from}〜{props.exhibition.to}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small"><RemoveRedEyeIcon/>閲覧数</Button>
          <Button size="small"><CreateIcon/>投稿</Button>
          <Button size="small"><BookmarkBorderIcon/>保存</Button>
        </CardActions>
      </Card>
    </div>
  );
}

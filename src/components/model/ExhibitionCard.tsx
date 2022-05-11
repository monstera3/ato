import {
  Button, Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import sampleImg from '../../assets/images/sample1.png';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import React from 'react';


export const ExhibitionCard = () => {
  return(
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={sampleImg}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              展示名
            </Typography>
            <Typography variant="body2" color="text.secondary">
              美術館名
            </Typography>
            <Typography variant="body2" color="text.secondary">
              開催期間
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

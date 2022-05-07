import React from 'react';
import sampleImg from '../assets/images/sample1.png'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container, IconButton,
  Typography
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';

export const FeaturedExhibition=()=> {
  return (
    <div className="App">


      <Container maxWidth="lg">
        <Typography gutterBottom variant="h5" component="div">
          注目の展覧会
        </Typography>
        <Card sx={{ maxWidth: 345 }}>
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
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />

            </IconButton>
            <RemoveRedEyeIcon/>
            <Button size="small"><CreateIcon/>投稿</Button>
            <Button size="small"><BookmarkBorderIcon/>保存</Button>
          </CardActions>
        </Card>
      </Container>

    </div>

  );
};

import React from 'react';
import sampleImg from '../assets/images/sample1.png'
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container, IconButton, Paper, Rating,
  Typography
} from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const RecentlyReview=()=> {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Typography gutterBottom variant="h5" component="div">
          最近投稿された感想
        </Typography>

        <Card
              sx={{ maxWidth: 460,display: 'flex',bgcolor:'#cfe8fc' }}>
          <CardMedia
            component="img"
            height="200"
            image={sampleImg}
            alt="Paella dish"
          />

          <CardContent sx={{ width: 460 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              title="ユーザー名"
              subheader="未定"
            />
            <Typography variant="h6" color="text.secondary">
              展示名
            </Typography>
            <Rating name="read-only" readOnly />
            <Paper elevation={0}>
              <Typography variant="subtitle2" color="text.secondary">
                タイトル
              </Typography>
              <Typography variant="body2" color="text.secondary">
                本文コメント
              </Typography>
            </Paper>



            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>

            </CardActions>
          </CardContent>

          </Card>
      </Container>


    </div>

  );
};

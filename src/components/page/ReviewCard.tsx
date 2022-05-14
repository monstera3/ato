import {
  Avatar, Box, ButtonBase, Card, CardActions,
  CardContent,
  CardHeader,
  CardMedia, Chip, Grid, IconButton,
  Paper,
  Rating, Stack,
  Typography
} from '@mui/material';
import sampleImg from '../../assets/images/sample1.png';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';


export const ReviewCard = () => {
  return(
    <>
      <Card
        sx={{ maxWidth: 'md',display: 'flex',backgroundColor:'#cfe8fc' ,my:5}}>
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
      <ComplexGrid />
    </>

  );
}


const labels: { [index: string]: string } = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
};


const ComplexGrid = () => {
  //星の数
  const value = 4;

  return(
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 'md',
        flexGrow: 1,
        backgroundColor:'#cfe8fc'
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <img alt="complex" src={sampleImg} height="100" width="150"/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                展示名              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip label='美術館名' size="small" />
              </Stack>
              <Box
                sx={{
                  width: 200,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Rating
                  name="text-feedback"
                  value={value}
                  readOnly
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <Box sx={{ ml: 2 }}>{labels[value]}</Box>
              </Box>
            </Grid>
            <Grid item>
              <Paper elevation={0}>
                <Typography variant="body2">
                  タイトル
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  本文コメント
                </Typography>
              </Paper>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                title="ユーザー名"
              />
              <Typography variant="body2" color="text.secondary">投稿日2022/05/14</Typography>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Paper>
  );
}

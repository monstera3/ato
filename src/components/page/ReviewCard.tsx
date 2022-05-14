import {
  Avatar, Box, ButtonBase, CardActions,
  CardHeader, CardMedia, Chip, Grid, IconButton,
  Paper,
  Rating, Stack,
  Typography
} from '@mui/material';
import sampleImg from '../../assets/images/sample1.png';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';



const labels: { [index: string]: string } = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
};


export const ReviewCard = () => {


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
          {/*<ButtonBase sx={{ width: 128, height: 128 }}>*/}
            <CardMedia alt="complex" src={sampleImg} component="img" sx={{ width: 200 }}/>
          {/*</ButtonBase>*/}
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                展示名              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip label='美術館名' size="small" />
              </Stack>
              <StarReview />
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
              <Box sx={{
                width: 'md',
                display: 'flex',
                alignItems: 'center',
              }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ backgroundColor: red[500],}} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  title="ユーザー名"
                />
                <Typography variant="body2" color="text.secondary">投稿日2022/05/14</Typography>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites" size='small'>
                    <FavoriteIcon />
                  </IconButton>
                  <Typography>1</Typography>

                </CardActions>

              </Box>

            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Paper>
  );
}

const StarReview = () => {
  //星の数
  const value = 4;
  return(
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
  );
}

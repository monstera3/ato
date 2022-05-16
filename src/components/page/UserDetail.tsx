import {
  Avatar, Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack, Tab,
  Typography
} from '@mui/material';
import { useParams } from 'react-router-dom';
import {  getUser, UserType } from '../../data';
import sampleImg from '../../assets/images/sample1.png'
import { Review } from '../model/Review';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import React, { SyntheticEvent, useState } from 'react';
import { ReviewCard } from './ReviewCard';
import { MuseumList } from './MuseumList';

export const UserDetail = () => {
  const params = useParams();
  const user = getUser(params.userId ? params.userId : '')
  const [tabName, setTabName] = useState('userReviews');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setTabName(newValue);
  };

  return (
    <>
      <UserProfile user={user}/>
      <TabContext value={tabName} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}} >
          <Container maxWidth="md">
            <TabList onChange={handleChange}>
              <Tab label="投稿" value="userReviews" />
              <Tab label="保存" value="userSaves" />
              <Tab label="フォロー" value="userFollowings" />
            </TabList>
          </Container>
        </Box>
        <TabPanel value="userReviews"><UserReviews user={user} /></TabPanel>
        <TabPanel value="userSaves"><UserSaves user={user} /></TabPanel>
        <TabPanel value="userFollowings"><UserFollowings user={user} /></TabPanel>
      </TabContext>
    </>
  )
}

const UserSaves = (props: { user: UserType }) => {

  return (
    <Container maxWidth='md'>
      UserSaves {props.user.id}
      <Box>
        <Typography>展覧会</Typography>

      </Box>
      <Box>
        <Typography>美術館</Typography>
  {/* TODO 保存したカードを表示させたい*/}
        <MuseumList />
      </Box>
    </Container>
  )
}

const UserFollowings = (props: { user: UserType }) => {
  return (
    <div>UserFollowings {props.user.id}</div>
  )
}


const UserReviews = (props: { user: UserType }) => {
  return (
    <Container maxWidth='md'>
      <ReviewCard />
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {props.user.displayName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.user.id}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.user.comment}
          </Typography>
          <Stack direction="row" spacing={1}>
            {
              props.user.watchedMuseum.map((watchedMuseum) => (
                <Review user={props.user} museumId={watchedMuseum.museumId} key={watchedMuseum.museumId} />
              ))
            }
          </Stack>
        </CardContent>
      </Card>
    </Container>

  )
}

const UserProfile = (props: { user: UserType }) => {
  return(
    <Container maxWidth="md" sx={{backgroundColor: '#FCE5CE',display:'flex' }}>
      <Avatar alt="Remy Sharp" src={sampleImg} sx={{ width: 120, height: 120 }}/>
      <Container sx={{display:'flex' ,justifyContent:'space-between' ,alignItems:'flex-start'}} >
        <Box>
          <Typography component="div" variant="h5">
            {props.user.displayName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            コメント
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            1 フォロワー
          </Typography>
        </Box>

        <Button variant="contained" sx={{color:'black',backgroundColor: '#FFF'}}>編集</Button>
      </Container>
    </Container>

  );
}

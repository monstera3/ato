import {
  Avatar, Box,
  Button,
  Card,
  CardContent,
  Container,
  Tab,
  Typography
} from '@mui/material';
import { useParams } from 'react-router-dom';
import {  UserType } from '../../data';
import sampleImg from '../../assets/images/sample1.png'
import { TabContext, TabList, TabPanel } from '@mui/lab';
import React, { SyntheticEvent, useState } from 'react';
import { ReviewCard } from './ReviewCard';
import { MuseumList } from './MuseumList';
import { useQuery } from 'react-query';

const getUserById = async (id: string): Promise<any> => {
  const data = await fetch(`/api/users/${id}`);
  return data.json();
}

function useUser(userId: string) {
  return useQuery(["userDetail", userId], () => getUserById(userId), {
    enabled: !!userId,
  });
}

export const UserDetail = () => {
  const params = useParams();
  const userId = params.userId ? params.userId : '';
  const [tabName, setTabName] = useState('userReviews');
  const { status, data, error, isFetching } = useUser(userId);

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setTabName(newValue);
  };
  if (!userId || status === "loading") return <div>'Loading...'</div>

  if (error instanceof Error) return <div>'An error has occurred'</div>

  return (
    <>
      <UserProfile user={data}/>
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
        <TabPanel value="userReviews"><UserReviews user={data} /></TabPanel>
        <TabPanel value="userSaves"><UserSaves user={data} /></TabPanel>
        <TabPanel value="userFollowings"><UserFollowings user={data} /></TabPanel>
      </TabContext>
    </>
  )
}

const UserSaves = (props: { user: UserType }) => {

  return (
    <Container maxWidth='md'>
      UserSaves {props.user.ato_id}
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
    <div>UserFollowings {props.user.ato_id}</div>
  )
}


const UserReviews = (props: { user: UserType }) => {
  return (
    <Container maxWidth='md'>
      <ReviewCard />
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {props.user.ato_id}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.user.ato_id}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.user.comment}
          </Typography>
          {/* TODO */}
          {/*<Stack direction="row" spacing={1}>*/}
          {/*  {*/}
          {/*    props.user.watchedMuseum.map((watchedMuseum) => (*/}
          {/*      <Review user={props.user} museumId={watchedMuseum.museumId} key={watchedMuseum.museumId} />*/}
          {/*    ))*/}
          {/*  }*/}
          {/*</Stack>*/}
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
            {props.user.name}
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

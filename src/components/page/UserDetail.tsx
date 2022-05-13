import {
  Avatar, Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { getUser } from '../../data';
import sampleImg from '../../assets/images/sample1.png'
import { Review } from '../model/Review';

export const UserDetail = () => {
  const params = useParams();
  const user = getUser(params.userId ? params.userId : '')
  return (
    <>
      <Container sx={{maxWidth:'md',backgroundColor: '#FCE5CE',display:'flex' }}>
        <Avatar alt="Remy Sharp" src={sampleImg} sx={{ width: 120, height: 120 }}/>
          <Container sx={{display:'flex' ,justifyContent:'space-between' ,alignItems:'flex-start'}} >
            <Box>
              <Typography component="div" variant="h5">
                ユーザー名
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                コメント
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                1 フォロワー
              </Typography>
            </Box>

            <Button variant="contained" >編集</Button>
          </Container>
      </Container>

      {/*TODO: タブを追加したい*/}
      <Card sx={{ minWidth: 275 }}>
        a
        <CardContent>
          <Typography variant="h5" component="div">
            {user.displayName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {user.id}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {user.comment}
          </Typography>
          <Stack direction="row" spacing={1}>
            {
              user.watchedMuseum.map((watchedMuseum) => (
                <Review user={user} museumId={watchedMuseum.museumId} key={watchedMuseum.museumId} />
              ))
            }
          </Stack>
        </CardContent>
      </Card>
    </>

  )
}

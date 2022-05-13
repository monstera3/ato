import { Avatar, Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getUser } from '../../data';
import sampleImg from '../../assets/images/sample1.png'
import { Review } from '../model/Review';

export const UserDetail = () => {
  const params = useParams();
  const user = getUser(params.userId ? params.userId : '')
  return (
    <>
      <Box>
        <Avatar alt="Remy Sharp" src={sampleImg} sx={{ width: 56, height: 56 }}/>

      </Box>
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

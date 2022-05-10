import { Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getUser } from '../../data';
import { Review } from './Review';

export const UserDetail = () => {
  const params = useParams();
  const user = getUser(params.userId ? params.userId : '')
  return (
    <Card sx={{ minWidth: 275 }}>
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
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

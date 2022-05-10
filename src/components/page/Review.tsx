import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { getMuseum, UserType, WatchedMuseumType } from '../../data';

type ReviewType = {
  user: UserType,
  museumId: number,
}
export const Review = (props: ReviewType) => {
  const review = (user: UserType, museumId: number): WatchedMuseumType => {
    const watchedMuseum = user.watchedMuseum.find((museum) => museum.museumId === museumId);
    if (watchedMuseum) {
      return watchedMuseum;
    } else {
      return {
        museumId: 0,
        comment: '',
        rate: 0,
      }
    }
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {getMuseum(props.museumId).museumName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.user.displayName}の感想
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {review(props.user, props.museumId).rate}/5
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {review(props.user, props.museumId).comment}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

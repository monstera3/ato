import { Card, CardContent, Typography } from '@mui/material';
import { UserType, WatchedMuseumType } from '../../data';
import { Link } from 'react-router-dom';

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
          {/* TODO */}
          {/*<Link to={'/museums/'+props.museumId}>*/}
          {/*  {getMuseum(props.museumId).name}*/}
          {/*</Link>*/}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <Link to={'/users/'+props.user.ato_id}>
            {props.user.name}の感想
          </Link>

        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {review(props.user, props.museumId).rate}/5
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {review(props.user, props.museumId).comment}
        </Typography>
      </CardContent>
    </Card>
  )
}

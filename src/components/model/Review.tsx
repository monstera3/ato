import { Card, CardContent, Typography } from '@mui/material';
import { VisitType } from '../../data';
import { Link } from 'react-router-dom';

export const Review = (props: { visit: VisitType }) => {

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          <Link to={'/museums/'+props.visit.museum.id}>
            {props.visit.museum.name}
          </Link>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          訪問日: {props.visit.date}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.visit.review.rating}/5
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.visit.review.comment}
        </Typography>
      </CardContent>
    </Card>
  )
}

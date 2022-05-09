import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getMuseum } from '../data';

export const Museum = () => {
  const params = useParams();
  const museum = getMuseum(parseInt(params.museumId ? params.museumId : '0', 10));
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {museum.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {museum.year}
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>  )
}

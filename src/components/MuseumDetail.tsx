import { Button, Card, CardActions, CardContent, Chip, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getMuseum } from '../data';

export const MuseumDetail = () => {
  const params = useParams();
  const museum = getMuseum(parseInt(params.museumId ? params.museumId : '0', 10));
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {museum.museumName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {museum.access}
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label={museum.address} size="small" />
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>  )
}

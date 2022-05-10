import { Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import { MuseumType } from '../../data';

export const Museum = ( props:{ museum: MuseumType}) => {

  return(
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.museum.museumName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.museum.access}
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label={props.museum.address} size="small" />
        </Stack>
      </CardContent>
    </Card>
  );
}

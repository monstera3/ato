import React from 'react';
import Container from '@mui/material/Container';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';


export const SearchBar=()=> {
  return (
    <div className="App">
      <Container
        maxWidth="lg"
        sx={{ bgcolor: '#cfe8fc', height: '10vh' }}>
        a
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="EXHIBITION" control={<Radio />} label="展覧会" />
            <FormControlLabel value="MUSEUM" control={<Radio />} label="美術館" />
            <FormControlLabel value="USER" control={<Radio />} label="ユーザー" />
          </RadioGroup>
        </FormControl>

      </Container>

    </div>
  );
};

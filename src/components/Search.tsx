import React from 'react';
import Container from '@mui/material/Container';
import {
  Box,
  FormControl,
  FormControlLabel, InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



export const SearchBar=()=> {
  return (
    <div className="App">
      <Container
        maxWidth="lg"
        sx={{ bgcolor: '#cfe8fc', height: '10vh',display: 'flex', alignItems: 'flex-end' }}>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch'},
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="展覧会・美術館・ユーザー検索" variant="outlined"
                     InputProps={{
                       startAdornment: (
                         <InputAdornment position="start">
                           <SearchIcon />
                         </InputAdornment>
                       ),
                     }}/>
        </Box>

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
        <Button variant="contained">検索</Button>
      </Container>

    </div>
  );
};

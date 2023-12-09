import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        backgroundColor: 'your-background-color', // Replace with your desired background color
      }}
      noValidate
      autoComplete="off"  
      color={"primary"}
    >
      <TextField
        id="outlined-basic"
        label="Filled"
        variant="filled"
        sx={{ color: 'red' }} // Add this line to set the text color
      />
    </Box>
  );
}

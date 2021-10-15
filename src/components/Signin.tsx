import { Button, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Signin = () => {
  return (
    <Box
      component='form'
      sx={{
        width: 600,
        mt: 2,
      }}
    >
      <Stack spacing={2}>
        <TextField
          required
          id='outlined-required'
          label='Email'
          placeholder='Email'
        />
        <TextField
          required
          id='outlined-password-input'
          label='Password'
          type='password'
          autoComplete='current-password'
        />
      </Stack>
      <Button variant='contained' sx={{ mt: 2 }}>
        Signin
      </Button>
    </Box>
  );
};

export default Signin;

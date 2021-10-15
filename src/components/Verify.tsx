import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Verify = () => {
  return (
    <Box
      component='form'
      sx={{
        "& .MuiTextField-root": { m: 2, width: "25ch" },
      }}
      noValidate
      autoComplete='off'
    >
      <div>
        <TextField
          required
          id='outlined-required'
          label='Verification Code'
          placeholder='Verification Code'
        />
      </div>
      <Button variant='contained'>Verify Account</Button>
    </Box>
  );
};

export default Verify;

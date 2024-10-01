import React from 'react';
import { Button, Box, TextField, Typography, Container, Paper } from '@mui/material';

function Signin() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to Coursera
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Sign In below
        </Typography>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { paddingBottom: 2 },
          }}
        >
          <TextField 
            fullWidth 
            id="username" 
            label="Username" 
            variant="outlined" 
          />
          <TextField 
            fullWidth 
            id="password" 
            label="Password" 
            variant="outlined" 
            type="password" 
          />
          <Button 
            fullWidth 
            size="large" 
            variant="contained" 
            color="primary" 
            sx={{ paddingTop: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Signin;

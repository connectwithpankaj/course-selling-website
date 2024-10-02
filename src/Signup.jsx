import React, { useState } from 'react'; // Import useState
import { Button, Box, TextField, Typography, Container, Paper } from '@mui/material';

function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to Coursera
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Sign up below
        </Typography>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { paddingBottom: 2 },
          }}
        >
          <TextField 
            fullWidth={true} 
            // id="username" 
            onChange={(e) =>{ 
              setEmail(e.target.value);
            }}
            label="Email" 
            variant="outlined" 
          />
          <TextField 
            fullWidth={true}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
            onClick={() => {
              function callback2(data){
                localStorage.setItem("token",data.tocken);
              }
              function callback1(res){
                res.json().then(callback2)
              }

              fetch("http://localhost:3000/admin/signup", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  username : email,
                  password : password
                })
              })
              .then(callback1)
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Signup;

import React, { useState } from 'react';
import { Button, Box, TextField, Typography, Container, Paper } from '@mui/material';

function Addcourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome to Coursera
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Add a Course
          </Typography>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { paddingBottom: 2 },
            }}
          >
            <TextField
              fullWidth
              onChange={(e) => setTitle(e.target.value)}
              label="Title"
              variant="outlined"
            />
            <TextField
              fullWidth
              onChange={(e) => setDescription(e.target.value)}
              label="Description"
              variant="outlined"
            />
            <Button
              size="large"
              variant="contained"
              color="primary"
              sx={{ paddingTop: 2 }}
              onClick={() => {
                function callback2(data) {
                  localStorage.setItem("token", data.token); // Fixed typo here
                }
                function callback1(res) {
                  res.json().then(callback2);
                }

                fetch("http://localhost:3000/admin/courses", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token"), // Corrected the token fetching and format
                  },
                  body: JSON.stringify({
                    title: title,
                    description: description,
                    imagelink: "",
                    published: true
                  }),
                })
                .then(callback1)
                .catch((error) => {
                  console.error("Error:", error);
                });
              }}
            >
              Add Course
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default Addcourse;

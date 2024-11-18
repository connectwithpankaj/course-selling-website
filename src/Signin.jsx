// Signup.js
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

function Signin() {
  return (
    <div>
        <div
          style={{
            paddingTop: 150,
            marginBottom: 10,
            display : "flex",
            justifyContent : "center"
          }}
        >
            <Typography variant="h6">
                Welcome Back. Signin below
            </Typography>
        </div>
    <div style={{ display:"flex", justifyContent: "center" }}>
        <div
          style={{
            border: "2px solid black",
            width: 400,
            padding: 20,
            borderRadius: 8,
            backgroundColor : "#fff"
          }}
        >
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 10 }}
            fullWidth
          >
            Signin
          </Button>
        </div>
    </div>
    </div>
  );
}

export default Signin;

// Signup.js
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

function Signup() {
    // State variable
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

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
                Welcome to Coursera. Signup below
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
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 10 }}
            fullWidth
            onClick={()=>{
                function callback2(data){
                    localStorage.setItem("token",data.token);
                    // console.log(data);
                }
                function callback1(res){
                    res.json().then(callback2);
                }
                fetch("http://localhost:3000/admin/signup", {
                    method : "POST",
                    body : JSON.stringify({
                        username : email,
                        password : password
                    }),
                    headers : {
                        "content-Type" : "application/json"
                    }
                })
                .then(callback1)
            }}
          >
            Signup
          </Button>
        </div>
    </div>
    </div>
  );
}

export default Signup;

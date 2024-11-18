// Signup.js
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

function Addcourses() {
    // State variable
    const[title, setTitle] = useState("")
    const[description, setDescription] = useState("")

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
                {/* Welcome to Coursera. Signup below */}
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
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="description"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
                fetch("http://localhost:3000/admin/courses", {
                    method : "POST",
                    body : JSON.stringify({
                        title : title,
                        description : description,
                        imageLink : "",
                        published : true
                    }),
                    headers : {
                        "content-Type" : "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("token")}` 
                    }
                })
                .then(callback1)
            }}
          >
            Add Courses
          </Button>
        </div>
    </div>
    </div>
  );
}

export default Addcourses;

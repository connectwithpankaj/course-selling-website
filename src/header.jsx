import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent' , color:"black"}}>
    <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Coursera
        </Typography>
        {/* <Button variant="contained" sx={{ marginRight: 2}} onClick={() => window.location = "/Signup"}>
            Sign Up
        </Button>
        <Button variant="contained" onClick={() => window.location = "/Signin"} >
            Sign In
        </Button> */}
    </Toolbar>
    </AppBar>
  );
}

export default Header;

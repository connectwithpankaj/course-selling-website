import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Appbar(){
    const navigate = useNavigate()
    return <div style={{ 
        display : "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        
    }}>
    <div style ={{ backgroundcolor : "red" }}> 
        <Typography variant={"h6"}>
            Coursera
        </Typography>
    </div>
    <div style={{ display : "flex" }}>
        <div style={{ marginRight : "10px" }}>
            <Button variant={"contained"} onClick={()=> navigate("/Signin")
            } >Sign In</Button>
        </div>
        <div>
            <Button variant={"contained"} onClick={()=>
               navigate("/Signup")
            } >Sign Up</Button>
        </div>
    </div>
    </div>
}

export default Appbar;
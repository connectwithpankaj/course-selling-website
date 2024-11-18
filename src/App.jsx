import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Signup';
import Signin from './signin';
import Appbar from "./Appbar";
import Addcourses from "./Addcourses";
import './App.css';

function App() {
  return (
    <div style={{ width : "100vw",
      height : "100vh",
      backgroundColor : "#eeeeee"
     }}>
      
    <Router>
      <Appbar/>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/Addcourses" element={<Addcourses />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

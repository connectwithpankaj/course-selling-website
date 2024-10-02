import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import Appbar from './Appbar';
import Addcourse from './Addcourse';

function App() {
    return (
      <div>
        <Appbar/>
        <Router>
            <Routes>
                <Route path="/addcourse" element={<Addcourse />}/>
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Signup" element={<Signup />} />
            </Routes>
        </Router>
      </div>
      
    );
}

export default App;

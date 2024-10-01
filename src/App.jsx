import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import Appbar from './Appbar';

function App() {
    return (
      <div>
        <Appbar/>
        <Router>
            <Routes>
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Signup" element={<Signup />} />
            </Routes>
        </Router>
      </div>
      
    );
}

export default App;

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Welcome from './Component/Welcome';
import Login from './Component/Login';
import Mobile from './Component/Mobile';
import Acclogin from './Component/Acclogin';
import Otp from './Component/Otp';
import Catagory from './Component/Catagory';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Welcome/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/mobile' element={<Mobile/>}/>
          <Route exact path='/acclogin' element={<Acclogin/>}/>
          <Route exact path='/otp' element={<Otp/>}/>
          <Route exact path='/catagory' element={<Catagory/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;

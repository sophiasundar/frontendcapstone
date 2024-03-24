import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
// import { useState } from 'react';
import { DisplayLap } from './components/laptop/DisplayLap';
import Welcome from './components/navBar/welcome.js';


function App() {
  // const [lapData, setLapData] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            
          <Route path='/welcome' element={<Welcome/>}></Route>
          <Route path='/displaylaptop' element={ <DisplayLap/> }></Route>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

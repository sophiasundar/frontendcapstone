import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { DisplayLap } from './components/laptop/DisplayLap';
import HomePage from './components/homepage';
import { EditLaps } from './components/laptop/editLap';
import AddLaps from './components/laptop/addLap';
import { DisplayPhone } from './components/phone/DisplayPhone';
import AddPhones from './components/phone/addPhone';
import { EditPhones } from './components/phone/editPhone';
import { DisplayCosMen } from './components/cosmen/DisplayCosMen';



function App() {
  const [lapData, setLapData] = useState([]);
  const [phoneData, setPhoneData] = useState([])

  return (
    <div className="App">
      
      <BrowserRouter>

        <Routes>
 
          <Route path='/home' element={<HomePage/>}></Route> 
          
          <Route path='/displaylaptop' element={ <DisplayLap/> }></Route>
          <Route path='/addlaptop' element={<AddLaps lapData={lapData} setLapData={setLapData} />}></Route>
          <Route path='/editlaptop/:id' element={<EditLaps lapData={lapData} setLapData={setLapData}/>}></Route>
          
          <Route path='/displayphone' element={ <DisplayPhone/> } ></Route>
          <Route path='/addphone' element={<AddPhones phoneData={phoneData} setPhoneData={setPhoneData} />} ></Route>
          <Route path='/editphone/:id' element={<EditPhones phoneData={phoneData} setPhoneData={setPhoneData} />}></Route>
       
          <Route path='/cosmeticsformen' element={<DisplayCosMen />}></Route>
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;

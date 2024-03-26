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
import AddCosMen from './components/cosmen/addCosMen';
import { EditCosMen } from './components/cosmen/editCosMen';
import { DisplayCosWm } from './components/coswomen/DisplayCosWm';
import AddCosWm from './components/coswomen/addCosWm';
import { EditCosWm } from './components/coswomen/editCosWm';
import { DisplayClothMen } from './components/clothmen/DisplayClothMen';
import AddClothMen from './components/clothmen/addClothMen';
import { EditClothMen } from './components/clothmen/editClothMen';
import { DisplayClothWm } from './components/clothwomen/DisplayClothWm';
import AddClothWm from './components/clothwomen/addClothWm';
import { EditClothWm } from './components/clothwomen/editClothWm';



function App() {
  const [lapData, setLapData] = useState([]);
  const [phoneData, setPhoneData] = useState([]);
  const [cosMenData, setCosMenData] = useState([]);
  const [cosWmData, setCosWmData] = useState([]);
  const [clothMenData, setClothMenData] = useState([]);
  const [clothWmData, setClothWmData] = useState([]);

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
       
          <Route path='/cosmeticsformen' element={<DisplayCosMen/> }></Route>
          <Route path='/addcosmen' element={<AddCosMen cosMenData={cosMenData} setCosMenData={setCosMenData}/> }></Route>
          <Route path='/editcosmen/:id' element={<EditCosMen cosMenData={cosMenData} setCosMenData={setCosMenData}/>}></Route>

          <Route path='/cosmeticsforwomen' element={<DisplayCosWm />}></Route>
          <Route path='/addcoswomen' element={<AddCosWm cosWmData={cosWmData} setCosWmData={setCosWmData}/>}></Route>
          <Route path='/editcoswomen/:id' element={<EditCosWm cosWmData={cosWmData} setCosWmData={setCosWmData} />}></Route>

          <Route path='/clothingformen' element={<DisplayClothMen />}></Route>
          <Route path='/addclothmen' element={<AddClothMen clothMenData={clothMenData} setClothMenData={setClothMenData}/>}></Route>
          <Route path='/editclothmen/:id' element={<EditClothMen clothMenData={clothMenData} setClothMenData={setClothMenData}/>}></Route>

          <Route path='/clothingforwomen' element={<DisplayClothWm/>}></Route>
          <Route path='/addclothwomen' element={<AddClothWm clothWmData={clothWmData} setClothWmData={setClothWmData} />}></Route>
          <Route path='/editclothwomen/:id' element={<EditClothWm clothWmData={clothWmData} setClothWmData={setClothWmData}/>} ></Route>


        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;

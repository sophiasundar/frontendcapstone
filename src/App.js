import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import SignUp from './components/signup/signup';
import SignupForm from './components/signup/signUpForm';
import { ProtectedRoute } from './components/protectedRoute';
import ResultPage from './components/ResultPage';



function App() {
  const [lapData, setLapData] = useState([]);
  const [phoneData, setPhoneData] = useState([]);
  const [cosMenData, setCosMenData] = useState([]);
  const [cosWmData, setCosWmData] = useState([]);
  const [clothMenData, setClothMenData] = useState([]);
  const [clothWmData, setClothWmData] = useState([]);
  const [homePhoneData, setHomePhoneData] = useState([])

  return (
    <div className="App">
      
      <BrowserRouter>

        <Routes>
 
          <Route path='/' element={<SignUp/>}></Route>
          <Route path='/signup' element={<SignupForm/>}></Route>
          
          
          
          <Route path='/home' 
                element={
                  <ProtectedRoute>
                      <HomePage  homePhoneData={homePhoneData} setHomePhoneData={setHomePhoneData}/>
                  </ProtectedRoute>
                }
          />
          <Route path='/displaylaptop' element={ 
                          <ProtectedRoute>
                              <DisplayLap/> 
                        </ProtectedRoute>
        }></Route>

          <Route path='/addlaptop' element={
             <ProtectedRoute>
                    <AddLaps lapData={lapData} setLapData={setLapData} />
          </ProtectedRoute>
          }></Route>

          <Route path='/editlaptop/:id' element={
             <ProtectedRoute>
          <EditLaps lapData={lapData} setLapData={setLapData}/>
          </ProtectedRoute>
          }></Route>
          
          <Route path='/displayphone' element={ 
             <ProtectedRoute>
          <DisplayPhone/> 
          </ProtectedRoute>
          } ></Route>
          <Route path='/addphone' element={
             <ProtectedRoute>
          <AddPhones phoneData={phoneData} setPhoneData={setPhoneData} />
          </ProtectedRoute>
          } ></Route>
          <Route path='/editphone/:id' element={
             <ProtectedRoute>
          <EditPhones phoneData={phoneData} setPhoneData={setPhoneData} />
          </ProtectedRoute>
          }></Route>
       
          <Route path='/cosmeticsformen' element={
             <ProtectedRoute>
          <DisplayCosMen/> 
          </ProtectedRoute>
          }></Route>

          <Route path='/addcosmen' element={
            <ProtectedRoute>
          <AddCosMen cosMenData={cosMenData} setCosMenData={setCosMenData}/> 
          </ProtectedRoute>
          }></Route>

          <Route path='/editcosmen/:id' element={
            <ProtectedRoute>
          <EditCosMen cosMenData={cosMenData} setCosMenData={setCosMenData}/>
          </ProtectedRoute>
          }></Route>

          <Route path='/cosmeticsforwomen' element={
            <ProtectedRoute>
          <DisplayCosWm />
          </ProtectedRoute>
          }></Route>

          <Route path='/addcoswomen' element={
             <ProtectedRoute>
          <AddCosWm cosWmData={cosWmData} setCosWmData={setCosWmData}/>
             </ProtectedRoute>
          }></Route>

          <Route path='/editcoswomen/:id' element={
            <ProtectedRoute>
          <EditCosWm cosWmData={cosWmData} setCosWmData={setCosWmData} />
          </ProtectedRoute>
          }></Route>

          <Route path='/clothingformen' element={
            <ProtectedRoute>
          <DisplayClothMen />
            </ProtectedRoute>
          }></Route>
          <Route path='/addclothmen' element={
             <ProtectedRoute>
          <AddClothMen clothMenData={clothMenData} setClothMenData={setClothMenData}/>
             </ProtectedRoute>
          }></Route>
          <Route path='/editclothmen/:id' element={
              <ProtectedRoute>
          <EditClothMen clothMenData={clothMenData} setClothMenData={setClothMenData}/>
               </ProtectedRoute>
          }></Route>

          <Route path='/clothingforwomen' element={
            <ProtectedRoute>
          <DisplayClothWm/>
          </ProtectedRoute>
          }></Route>
          <Route path='/addclothwomen' element={
              <ProtectedRoute>
          <AddClothWm clothWmData={clothWmData} setClothWmData={setClothWmData} />
             </ProtectedRoute>
          }></Route>
          <Route path='/editclothwomen/:id' element={
               <ProtectedRoute>
          <EditClothWm clothWmData={clothWmData} setClothWmData={setClothWmData}/>
          </ProtectedRoute>
          } ></Route>
           
           <Route path='/search' element={
               <ProtectedRoute>
                 <ResultPage/>
          </ProtectedRoute>
           
          } ></Route>
          

        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from "axios";
import { API } from '../global.js';
import CosMenCard from './cosMenCard.jsx';
import NavBar from '../navBar/navBar.js';

   export function DisplayCosMen(){
       const [cosMenData, setCosMenData] = useState([]);

       const getCosMen = ()=>{
        axios.get(`${API}/cosmen`)
        .then((res)=>{
            if(res.status === 401){
               console.log(" Data Not Found !")
            }
            console.log(res.data);
            setCosMenData(res.data);
        });
       }

       useEffect(()=>{
          getCosMen();
       }, []);

       const handleDelete = (id) =>{
        console.log(id);
        axios.delete(`${API}/cosmen/${id}`).then((res)=>{
              if(res.status === 200){
                getCosMen();
              }
          })
     }

       return(
        <div>
            <NavBar/>

            {cosMenData.map((item)=>{
                return(
                    <>
                    <CosMenCard key={item._id} value={item} handleDelete={()=>handleDelete(item._id)}/>
                    </>
                )
            })
            }

        </div>
       )
   }
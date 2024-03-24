import React, { useState, useEffect } from 'react';
import axios from "axios";
import { API } from '../global.js';
import LapCard from './lapCard.jsx';
import NavBar from '../navBar/navBar.js';


    export function DisplayLap(){
        const [lapData, setLapData] = useState([]);

        const getLaps = ()=>{
             axios.get(`${API}/laptops`)
             .then((res)=>{
                 if(res.status === 401){
                    console.log(" Data Not Found !")
                 }
                 console.log(res.data);
                 setLapData(res.data);
             });
        }

        useEffect(()=>{
            getLaps();
        }, []);
             
           const handleDelete = (id) =>{
              console.log(id);
              axios.delete(`${API}/laptops/${id}`).then((res)=>{
                    if(res.status === 200){
                        getLaps();
                    }
                })
           }

        return(
            <div>
               <NavBar/>
             {lapData.map((item)=>{
                     return(
                        <>
                        <LapCard key={item._id} value={item}  handleDelete={()=>handleDelete(item._id)} />
                        </>
                     )
             })
             }


            </div>
        )
    }
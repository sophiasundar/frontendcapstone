import React, { useState, useEffect } from 'react';
import axios from "axios";
import { API } from '../global.js';
import CosWmCard from './cosWmCard.jsx';
import NavBar from '../navBar/navBar.js';

    export function DisplayCosWm(){
        const [cosWmData, setCosWmData] = useState([]);
        
        const getCosWm = ()=>{
            axios.get(`${API}/coswomen`)
            .then((res)=>{
                if(res.status === 401){
                   console.log(" Data Not Found !")
                }
                console.log(res.data);
                setCosWmData(res.data);
            });
           }

           useEffect(()=>{
            getCosWm(); 
           }, [])

           const handleDelete = (id) =>{
            console.log(id);
            axios.delete(`${API}/coswomen/${id}`).then((res)=>{
                  if(res.status === 200){
                    getCosWm();
                  }
              })

    }

    return(
        <div>
            <NavBar/>

            {
                cosWmData.map((item)=>{
                    return(
                        <>
                        <CosWmCard key={item._id} value={item} handleDelete={()=>handleDelete(item._id)} />
                        </>
                    )
                })
            }
        </div>
    )
}
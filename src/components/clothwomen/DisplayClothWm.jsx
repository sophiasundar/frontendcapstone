import React, { useState, useEffect } from 'react';
import axios from "axios";
import { API } from '../global';
import ClothWmCard from './clothWmCard';
import NavBar from '../navBar/navBar';

   export function DisplayClothWm(){
    const [clothWmData, setClothWmData] = useState([]);

    const getClothWm = ()=>{
        axios.get(`${API}/clothingwomen`)
        .then((res)=>{
            if(res.status === 401){
               console.log(" Data Not Found !")
            }
            console.log(res.data);
            setClothWmData(res.data);
        });
    }

        useEffect(()=>{
            getClothWm();
        }, []);
         
        const handleDelete = (id) =>{
            console.log(id);
            axios.delete(`${API}/clothingwomen/${id}`).then((res)=>{
                  if(res.status === 200){
                    getClothWm();
                  }
              })
  
         }

        return(
            <div>
                 
                 <NavBar/>

                 {clothWmData.map((item)=>{
                    return(
                        <>
                           <ClothWmCard key={item._id} value={item} handleDelete={()=>handleDelete(item._id)} />
                        </>
                    )
                 })}
               

            </div>
        )

   }
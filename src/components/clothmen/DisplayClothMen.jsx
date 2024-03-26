import React, { useState, useEffect } from 'react';
import axios from "axios";
import { API } from '../global';
import ClothMenCard from './clothMenCard';
import NavBar from '../navBar/navBar';

   export function DisplayClothMen(){
     const [clothMenData, setClothMenData] = useState([]);

     const getClothMen = ()=>{
        axios.get(`${API}/clothingmen`)
        .then((res)=>{
            if(res.status === 401){
               console.log(" Data Not Found !")
            }
            console.log(res.data);
            setClothMenData(res.data);
        });
    }

        useEffect(()=>{
            getClothMen();
         }, []);
  
         const handleDelete = (id) =>{
          console.log(id);
          axios.delete(`${API}/clothingmen/${id}`).then((res)=>{
                if(res.status === 200){
                  getClothMen();
                }
            })

       }

       return(
        <div>
            
            <NavBar/>

            {clothMenData.map((item)=>{
                  return(
                    <>
                    <ClothMenCard key={item._id} value={item} handleDelete={()=>handleDelete(item._id)}/>
                    </>
                  )
            })
            }


        </div>
       )
   } 
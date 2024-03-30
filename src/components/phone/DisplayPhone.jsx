import React, { useState, useEffect } from 'react';
import axios from "axios";
import { API } from '../global.js';
import PhoneCard from './phoneCard.jsx';
import NavBar from '../navBar/navBar.js';



   export function DisplayPhone(){
       const [phoneData, setPhoneData] = useState([])
       

        
         const getPhones = ()=>{
            axios.get(`${API}/phones`)
            .then((res)=>{
                if(res.status === 401){
                    console.log(" Data Not Found ! ")
                }
                console.log(res.data);
                setPhoneData(res.data);
            })
         }

         useEffect(()=>{
            getPhones()
         },[])

         const handleDelete = (id) =>{
             console.log(id);
             axios.delete(`${API}/phones/${id}`)
             .then((res)=>{
                if(res.status === 200){
                    getPhones();
                }
             })
         }

         return(
            <div>
                <NavBar/>
                


                 {
                    phoneData.map((item)=>{
                        return(
                            <>
                               <PhoneCard key={item._id} value={item} handleDelete={()=>{handleDelete(item._id)}}/>
                            </>
                        )
                    })
                 }
            </div>
         )

   }
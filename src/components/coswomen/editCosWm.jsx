import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { API } from '../global';

  export function EditCosWm(){
    const {id} = useParams()
    const [cosWm, setCosWm] = useState();

    useEffect(()=>{
           
        axios.get(`${API}/coswomen/${id}`)
        .then((res)=>{
            console.log(res.data);
            setCosWm(res.data);
        })

     },[id]);

     if(cosWm){
      return <EditCosWt cosWm={cosWm} id={id}/>
    }else {
      return "Loading...";
     }

  }

  function EditCosWt({ cosWm, id }){
    const [name,setName] = useState(cosWm.name)
    const [price,setPrice] = useState(cosWm.price)
    const [brand,setBrand] = useState(cosWm.brand)
    const [size,setSize] = useState(cosWm.size)
    const [about,setAbout] = useState(cosWm.about)
    const [images,setImages] =useState(cosWm.images)

    const [validated, setValidated] = useState(false);

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        const updateCosWm ={
            name: name,
            price:price,
            brand: brand,
            size:size,
            about:about,
            images:images,
        }
        console.log(updateCosWm)

        if(updateCosWm.name === ""){
            setValidated("VALID: Name is required");
            return;
         }else if(updateCosWm.price === ""){
            setValidated("VALID: Price is required");
            return;
         }else if(updateCosWm.brand === ""){
            setValidated("VALID: Brand is required");
            return;
         }else if(updateCosWm.size === ""){
            setValidated("VALID: Size is required");
            return;
         }else if(updateCosWm.about === ""){
            setValidated("VALID: About is required");
            return;
         }else if(updateCosWm.images === ""){
            setValidated("VALID: Images is required");
            return;
         }else{
            setValidated("")
         }

         const form = e.currentTarget;
         if (form.checkValidity() === false) {
           e.preventDefault();
           e.stopPropagation();
         }
          setValidated(true);

          fetch(`${API}/coswomen/${cosWm._id}`,{
            method: "PUT",
            body: JSON.stringify(updateCosWm),
            headers:{ "Content-Type": "application/json" },
         })
         .then((data)=> data.json())
         .then(()=> navigate("/cosmeticsforwomen"))

  } 

  return(
    <div>
        
        <h4 className='titleform' > Edit Cosmetics (WOMEN) </h4>
                 
                 <Form>
                 <h6 className="valid" >{validated}</h6>

                     <Form.Group className="mb-3" controlId="name">
                         <Form.Label>Cosmetics Name :</Form.Label>
                         <Form.Control className='ph1' type="text" placeholder="Enter The Cosmetics Name"
                               value={name}
                               onChange={(e)=>{
                                 setName(e.target.value)
                               }}    
                         />
 
                     </Form.Group>
 
                     <Form.Group className="mb-3" controlId="price">
                         <Form.Label>Cosmetics Price :</Form.Label>
                         <Form.Control type="text" placeholder="Enter The Cosmetics Price" 
                              value={price}
                              onChange={(e)=>{
                                setPrice(e.target.value)
                              }}  
                         />
                     </Form.Group>
 
                     <Form.Group className="mb-3" controlId="brand">
                         <Form.Label>Cosmetics Brand :</Form.Label>
                         <Form.Control type="text" placeholder="Enter The Cosmetics Brand" 
                             value={brand}
                             onChange={(e)=>{
                               setBrand(e.target.value)
                             }} 
                         />
                     </Form.Group>
 
                     <Form.Group className="mb-3" controlId="diplay">
                         <Form.Label>Cosmetics Size :</Form.Label>
                         <Form.Control type="text" placeholder="Enter The Cosmetics Size" 
                              value={size}
                              onChange={(e)=>{
                                setSize(e.target.value)
                              }} 
                         />
                     </Form.Group>
 
                     <Form.Group className="mb-3" controlId="about">
                         <Form.Label>Cosmetics About :</Form.Label>
                         <Form.Control type="text" placeholder="Enter The Cosmetics About" 
                               value={about}
                               onChange={(e)=>{
                                 setAbout(e.target.value)
                               }} 
                         />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="image">
                         <Form.Label>Cosmetics Image :</Form.Label>
                         <Form.Control type="text" placeholder="Enter The Cosmetics Image Link in Jpeg/png format" 
                               value={images}
                               onChange={(e)=>{
                                 setImages(e.target.value)
                               }} 
                         />
                     </Form.Group>
                     
                     <h6 className="valid" >{validated}</h6>
                     
                     <div className='addbtn'>
 
                     <Button  className='addbtn1' variant="primary"
                                 onClick={handleSubmit}
                     >
                         Edit Cosmetics
                     </Button>
 
                     <Button className='addbtn2' variant="primary"
                                 onClick={()=>{
                                   navigate('/home')
                                 }}
                     >
                         Back
                     </Button>
                     </div>
 
 
                     
                 </Form>

    </div>
  )

}
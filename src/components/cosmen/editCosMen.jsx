import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { API } from '../global';

export function EditCosMen(){
    const {id} = useParams()
    const [cosMen, setCosMen] = useState();

    useEffect(()=>{
           
        axios.get(`${API}/cosmen/${id}`)
        .then((res)=>{
            console.log(res.data);
            setCosMen(res.data);
        })

     },[id]);

     if(cosMen){
      return <EditCosmet cosMen={cosMen} id={id}/>
    }else {
      return "Loading...";
     }

    
}

 function EditCosmet({ cosMen, id }){
    const [name,setName] = useState(cosMen.name)
    const [price,setPrice] = useState(cosMen.price)
    const [brand,setBrand] = useState(cosMen.brand)
    const [size,setSize] = useState(cosMen.size)
    const [about,setAbout] = useState(cosMen.about)
    const [images,setImages] =useState(cosMen.images)

    const [validated, setValidated] = useState(false);

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        const updateCosMen ={
            name: name,
            price:price,
            brand: brand,
            size:size,
            about:about,
            images:images,
        }
        console.log(updateCosMen)

        if(updateCosMen.name === ""){
            setValidated("VALID: Name is required");
            return;
         }else if(updateCosMen.price === ""){
            setValidated("VALID: Price is required");
            return;
         }else if(updateCosMen.brand === ""){
            setValidated("VALID: Brand is required");
            return;
         }else if(updateCosMen.size === ""){
            setValidated("VALID: Size is required");
            return;
         }else if(updateCosMen.about === ""){
            setValidated("VALID: About is required");
            return;
         }else if(updateCosMen.images === ""){
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

          fetch(`${API}/cosmen/${cosMen._id}`,{
            method: "PUT",
            body: JSON.stringify(updateCosMen),
            headers:{ "Content-Type": "application/json" },
         })
         .then((data)=> data.json())
         .then(()=> navigate("/cosmeticsformen"))
    }

    return(

        <div>
            
            <h4 className='titleform' > Edit Cosmetics (Men) </h4>
                 
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

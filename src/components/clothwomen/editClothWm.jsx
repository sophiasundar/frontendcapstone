import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { API } from '../global';

export function EditClothWm(){
    const {id} = useParams()
    const [clothWm, setClothWm] = useState();

    useEffect(()=>{
           
        axios.get(`${API}/clothingwomen/${id}`)
        .then((res)=>{
            console.log(res.data);
            setClothWm(res.data);
        })

     },[id]);
     
     if(clothWm){
        return <EditClothWomen clothWm={clothWm} id={id} />
      }else {
        return "Loading...";
       }

}

function EditClothWomen({ clothWm, id }){
    const [name,setName] = useState(clothWm.name)
    const [price,setPrice] = useState(clothWm.price)
    const [brand,setBrand] = useState(clothWm.brand)
    const [fabric,setFabric] = useState(clothWm.fabric)
    const [about,setAbout] = useState(clothWm.about)
    const [images,setImages] =useState(clothWm.images)

    const [validated, setValidated] = useState(false);

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        const updateClothWm ={
            name: name,
            price:price,
            brand: brand,
            fabric:fabric,
            about:about,
            images:images,
        }
        console.log(updateClothWm)

        if(updateClothWm.name === ""){
            setValidated("VALID: Name is required");
            return;
         }else if(updateClothWm.price === ""){
            setValidated("VALID: Price is required");
            return;
         }else if(updateClothWm.brand === ""){
            setValidated("VALID: Brand is required");
            return;
         }else if(updateClothWm.fabric === ""){
            setValidated("VALID: Fabric is required");
            return;
         }else if(updateClothWm.about === ""){
            setValidated("VALID: About is required");
            return;
         }else if(updateClothWm.images === ""){
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

          fetch(`${API}/clothingwomen/${clothWm._id}`,{
            method: "PUT",
            body: JSON.stringify(updateClothWm),
            headers:{ "Content-Type": "application/json" },
         })
         .then((data)=> data.json())
         .then(()=> navigate("/clothingforwomen"))   

    }
    return(
        <div>

               <h4 className='titleform' > Edit Clothing (Women) </h4>
                 
                 <Form>
                 <h6 className="valid" >{validated}</h6>

                     <Form.Group className="mb-3" controlId="name">
                         <Form.Label>Clothing Name :</Form.Label>
                         <Form.Control className='ph1' type="text" placeholder="Enter The Name"
                               value={name}
                               onChange={(e)=>{
                                 setName(e.target.value)
                               }}    
                         />
 
                     </Form.Group>
 
                     <Form.Group className="mb-3" controlId="price">
                         <Form.Label>Clothing Price :</Form.Label>
                         <Form.Control type="text" placeholder="Enter The Price" 
                              value={price}
                              onChange={(e)=>{
                                setPrice(e.target.value)
                              }}  
                         />
                     </Form.Group>
 
                     <Form.Group className="mb-3" controlId="brand">
                         <Form.Label>Clothing Brand :</Form.Label>
                         <Form.Control type="text" placeholder="Enter The Brand" 
                             value={brand}
                             onChange={(e)=>{
                               setBrand(e.target.value)
                             }} 
                         />
                     </Form.Group>
 
                     <Form.Group className="mb-3" controlId="diplay">
                         <Form.Label>Clothing Fabric :</Form.Label>
                         <Form.Control type="text" placeholder="Enter The Fabric" 
                              value={fabric}
                              onChange={(e)=>{
                                setFabric(e.target.value)
                              }} 
                         />
                     </Form.Group>
 
                     <Form.Group className="mb-3" controlId="about">
                         <Form.Label>Clothing About :</Form.Label>
                         <Form.Control type="text" placeholder="Enter The About" 
                               value={about}
                               onChange={(e)=>{
                                 setAbout(e.target.value)
                               }} 
                         />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="image">
                         <Form.Label>Clothing Image :</Form.Label>
                         <Form.Control type="text" placeholder="Enter The Image Link in Jpeg/png format" 
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
                         Edit Clothing
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
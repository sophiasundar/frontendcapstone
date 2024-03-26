import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { API } from '../global.js';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export function EditLaps(){
     const {id} = useParams()
     const [laptops,setLaptops] = useState();

     useEffect(()=>{
           
        axios.get(`${API}/laptops/${id}`)
        .then((res)=>{
            console.log(res.data);
            setLaptops(res.data);
        })

     },[id]);

     if(laptops){
      return <EditLaptops laptops={laptops} id={id}  />
    }else {
      return "Loading...";
     }
    }

     function EditLaptops({ laptops, id }){

         const [name,setName] = useState(laptops.name)
         const [price,setPrice] = useState(laptops.price)
         const [brand,setBrand] = useState(laptops.brand)
         const [display,setDisplay] = useState(laptops.display)
         const [processor,setProcessor] = useState(laptops.processor)
         const [ram,setRam] = useState(laptops.ram)
         const [rom,setRom] = useState(laptops.rom)
         const [os,setOs] = useState(laptops.os)
         const [images,setImages] =useState(laptops.images)

         const [validated,setValidated] = useState(false)

         const navigate = useNavigate()

         const handleSubmit =(e) =>{
             const updateLaptops = {
                name: name,
                price:price,
                brand: brand,
                display:display,
                processor:processor,
                ram:ram,
                rom:rom,
                os:os,
                images:images,
             }
             console.log(updateLaptops)

             if(updateLaptops.name === ""){
                setValidated("VALID: Name is required");
                return;
             }else if(updateLaptops.price === ""){
                setValidated("VALID: Price is required");
                return;
             }else if(updateLaptops.brand === ""){
                setValidated("VALID: Brand is required");
                return;
             }else if(updateLaptops.display === ""){
                setValidated("VALID: Display is required");
                return;
             }else if(updateLaptops.processor === ""){
                setValidated("VALID: Processor is required");
                return;
             }else if(updateLaptops.ram === ""){
                setValidated("VALID: RAM is required");
                return; 
             }else if(updateLaptops.rom === ""){
                setValidated("VALID: ROM is required");
                return;
             }else if(updateLaptops.os === ""){
                setValidated("VALID: OS is required");
                return;
             }else if(updateLaptops.images === ""){
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

             fetch(`${API}/laptops/${laptops._id}`,{
                method: "PUT",
                body: JSON.stringify(updateLaptops),
                headers:{ "Content-Type": "application/json" },
             })
             .then((data)=> data.json())
             .then(()=> navigate("/displaylaptop"))
         };
        

     return(
            <div>
                <h4 className='titleform' >Edit Laptop</h4>
                 
                <Form>
                <h6 className="valid" >{validated}</h6>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Laptop Name :</Form.Label>
                        <Form.Control className='ph1' type="text" placeholder="Enter The Laptop Name"
                              value={name}
                              onChange={(e)=>{
                                setName(e.target.value)
                              }}    
                        />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Laptop Price :</Form.Label>
                        <Form.Control type="text" placeholder="Enter The Laptop Price" 
                             value={price}
                             onChange={(e)=>{
                               setPrice(e.target.value)
                             }}  
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="brand">
                        <Form.Label>Laptop Brand :</Form.Label>
                        <Form.Control type="text" placeholder="Enter The Laptop Brand" 
                            value={brand}
                            onChange={(e)=>{
                              setBrand(e.target.value)
                            }} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="diplay">
                        <Form.Label>Laptop Display :</Form.Label>
                        <Form.Control type="text" placeholder="Enter The Laptop Display" 
                             value={display}
                             onChange={(e)=>{
                               setDisplay(e.target.value)
                             }} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="processor">
                        <Form.Label>Laptop Processor :</Form.Label>
                        <Form.Control type="text" placeholder="Enter The Laptop Processor" 
                              value={processor}
                              onChange={(e)=>{
                                setProcessor(e.target.value)
                              }} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="ram">
                        <Form.Label>Laptop RAM :</Form.Label>
                        <Form.Control type="text" placeholder="Enter The Laptop RAM Specificaton" 
                              value={ram}
                              onChange={(e)=>{
                                setRam(e.target.value)
                              }} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="rom">
                        <Form.Label>Laptop ROM :</Form.Label>
                        <Form.Control type="text" placeholder="Enter The Laptop ROM Specification" 
                            value={rom}
                            onChange={(e)=>{
                              setRom(e.target.value)
                            }} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="os">
                        <Form.Label>Laptop OS :</Form.Label>
                        <Form.Control type="text" placeholder="Enter The Laptop OS" 
                             value={os}
                             onChange={(e)=>{
                               setOs(e.target.value)
                             }} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="image">
                        <Form.Label>Laptop Image :</Form.Label>
                        <Form.Control type="text" placeholder="Enter The Laptop Image Link in Jpeg/png format" 
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
                        Edit Laptop
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
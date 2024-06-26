import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { API } from '../global.js';


function AddLaps({setLapData}){
         const [name,setName] = useState("")
         const [price,setPrice] = useState("")
         const [brand,setBrand] = useState("")
         const [display,setDisplay] = useState("")
         const [processor,setProcessor] = useState("")
         const [ram,setRam] = useState("")
         const [rom,setRom] = useState("")
         const [os,setOs] = useState("")
         const [images,setImages] =useState("")
         const [validated, setValidated] = useState(false);

         const navigate = useNavigate()

         const handleSubmit = async (e) =>{
            const newLaptop ={
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
            console.log(newLaptop)

             if(newLaptop.name === ""){
                setValidated("VALID: Name is required");
                return;
             }else if(newLaptop.price === ""){
                setValidated("VALID: Price is required");
                return;
             }else if(newLaptop.brand === ""){
                setValidated("VALID: Brand is required");
                return;
             }else if(newLaptop.display === ""){
                setValidated("VALID: Display is required");
                return;
             }else if(newLaptop.processor === ""){
                setValidated("VALID: Processor is required");
                return;
             }else if(newLaptop.ram === ""){
                setValidated("VALID: RAM is required");
                return; 
             }else if(newLaptop.rom === ""){
                setValidated("VALID: ROM is required");
                return;
             }else if(newLaptop.os === ""){
                setValidated("VALID: OS is required");
                return;
             }else if(newLaptop.images === ""){
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

              fetch(`${API}/laptops`,{
                method: "POST",
                body:JSON.stringify(newLaptop),
                headers:{
                    "Content-Type": "application/json"
                },
              }).then((data)=>data.json())
              .then((res)=>{
                setLapData(res);
                console.log(res)
              })
              .then(()=>navigate("/displaylaptop"))
         }
     return(
        <div>
              <h4 className='titleform' >Add Laptop</h4>
<Form>
                <h4 className="valid" >{validated}</h4>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Laptop Name :</Form.Label>
                        <Form.Control className='ph1' type="text" placeholder="Enter The Laptop Name"
                              value={name}
                              onChange={(e)=>
                                {setName(e.target.value)}
                              }    
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Laptop Price :</Form.Label>
                        <Form.Control className='ph2' type="text" placeholder="Enter The Laptop Price" 
                             value={price}
                             onChange={(e)=>{
                               setPrice(e.target.value)
                             }}  
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="brand">
                        <Form.Label>Laptop Brand :</Form.Label>
                        <Form.Control className='ph3' type="text" placeholder="Enter The Laptop Brand" 
                            value={brand}
                            onChange={(e)=>{
                              setBrand(e.target.value)
                            }} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="diplay">
                        <Form.Label>Laptop Display :</Form.Label>
                        <Form.Control className='ph4' type="text" placeholder="Enter The Laptop Display" 
                             value={display}
                             onChange={(e)=>{
                               setDisplay(e.target.value)
                             }} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="processor">
                        <Form.Label>Laptop Processor :</Form.Label>
                        <Form.Control className='ph5' type="text" placeholder="Enter The Laptop Processor" 
                              value={processor}
                              onChange={(e)=>{
                                setProcessor(e.target.value)
                              }} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="ram">
                        <Form.Label>Laptop RAM :</Form.Label>
                        <Form.Control  className='ph6' type="text" placeholder="Enter The Laptop RAM Specificaton" 
                              value={ram}
                              onChange={(e)=>{
                                setRam(e.target.value)
                              }} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="rom">
                        <Form.Label>Laptop ROM :</Form.Label>
                        <Form.Control className='ph7' type="text" placeholder="Enter The Laptop ROM Specification" 
                            value={rom}
                            onChange={(e)=>{
                              setRom(e.target.value)
                            }} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="os">
                        <Form.Label>Laptop OS :</Form.Label>
                        <Form.Control className='ph8' type="text" placeholder="Enter The Laptop OS" 
                             value={os}
                             onChange={(e)=>{
                               setOs(e.target.value)
                             }} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="image">
                        <Form.Label>Laptop Image :</Form.Label>
                        <Form.Control className='ph9' type="text" placeholder="Enter The Laptop Image Link in Jpeg/png format" 
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
                        Add Laptop
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

export default AddLaps;
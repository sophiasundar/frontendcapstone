import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { API } from '../global';

function AddPhones({setPhoneData}){
         const [name,setName] = useState("")
         const [price,setPrice] = useState("")
         const [brand,setBrand] = useState("")
         const [resolution,setResolution] = useState("")
         const [ram,setRam] = useState("")
         const [rom,setRom] = useState("")
         const [os,setOs] = useState("")
         const [camera,setCamera] = useState("") 
         const [images,setImages] =useState("")
         const [validated, setValidated] = useState(false);

         const navigate = useNavigate()

         const handleSubmit = async (e) =>{
             const newPhone ={
                name: name,
                price:price,
                brand: brand,
                resolution: resolution,
                ram:ram,
                rom:rom,
                os:os,
                camera:camera,
                images:images,
             }
             console.log(newPhone)
         

         if(newPhone.name === ""){
            setValidated("VALID: Name is required");
            return;
         }else if(newPhone.price === ""){
            setValidated("VALID: Price is required");
            return;
         }else if(newPhone.brand === ""){
            setValidated("VALID: Brand is required");
            return;
         }else if(newPhone.resolution === ""){
            setValidated("VALID: Resolution is required");
            return;
         }else if(newPhone.ram === ""){
            setValidated("VALID: RAM is required");
            return; 
         }else if(newPhone.rom === ""){
            setValidated("VALID: ROM is required");
            return;
         }else if(newPhone.os === ""){
            setValidated("VALID: OS is required");
            return;
         }else if(newPhone.images === ""){
            setValidated("VALID: Images is required");
            return;
         }else if(newPhone.camera === ""){
          setValidated("VALID: Camera spec is required");
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

              fetch(`${API}/phones`,{
                method: "POST",
                body:JSON.stringify(newPhone),
                headers:{
                    "Content-Type": "application/json"
                },
              }).then((data)=>data.json())
              .then((res)=>{
                setPhoneData(res);
                console.log(res)
              })
              .then(()=>navigate('/displayphone'))
         }
              return(
                <div>  

              <Form>

              <h4 className='titleform' >Add Phone</h4>

                <h4 className="valid" >{validated}</h4>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Phone Name :</Form.Label>
                        <Form.Control className='ph1' type="text" placeholder="Enter The Phone Name"
                              value={name}
                              onChange={(e)=>
                                {setName(e.target.value)}
                              }    
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Phone Price :</Form.Label>
                        <Form.Control className='ph2' type="text" placeholder="Enter The Phone Price" 
                             value={price}
                             onChange={(e)=>{
                               setPrice(e.target.value)
                             }}  
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="brand">
                        <Form.Label>Phone Brand :</Form.Label>
                        <Form.Control className='ph3' type="text" placeholder="Enter The Phone Brand" 
                            value={brand}
                            onChange={(e)=>{
                              setBrand(e.target.value)
                            }} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="camera">
                        <Form.Label>Phone Camera :</Form.Label>
                        <Form.Control className='ph1' type="text" placeholder="Enter The Phone Camera Spec"
                              value={camera}
                              onChange={(e)=>
                                {setCamera(e.target.value)}
                              }    
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="resolution">
                        <Form.Label>Phone Resolution :</Form.Label>
                        <Form.Control className='ph5' type="text" placeholder="Enter The Phone Resolution" 
                              value={resolution}
                              onChange={(e)=>{
                                setResolution(e.target.value)
                              }} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="ram">
                        <Form.Label>Phone RAM :</Form.Label>
                        <Form.Control  className='ph6' type="text" placeholder="Enter The Phone RAM Specificaton" 
                              value={ram}
                              onChange={(e)=>{
                                setRam(e.target.value)
                              }} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="rom">
                        <Form.Label>Phone ROM :</Form.Label>
                        <Form.Control className='ph7' type="text" placeholder="Enter The Phone ROM Specification" 
                            value={rom}
                            onChange={(e)=>{
                              setRom(e.target.value)
                            }} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="os">
                        <Form.Label>Phone OS :</Form.Label>
                        <Form.Control className='ph8' type="text" placeholder="Enter The Phone OS" 
                             value={os}
                             onChange={(e)=>{
                               setOs(e.target.value)
                             }} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="image">
                        <Form.Label>Phone Image :</Form.Label>
                        <Form.Control className='ph9' type="text" placeholder="Enter The Phone Image Link in Jpeg/png format" 
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
                        Add Phone
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

export default AddPhones;
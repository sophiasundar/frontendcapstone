import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { API } from '../global.js';


    export function EditPhones(){
        const {id} = useParams();
        const [phones,setPhones] = useState();

        useEffect(()=>{

            axios.get(`${API}/phones/${id}`)
            .then((res)=>{
                console.log(res.data);
                setPhones(res.data);
            })

        },[id]);

        if(phones){
            return <EditPhoneFe phones={phones} id={id} />
        }else{
            return "Loading...";
        }

        
    }

        function EditPhoneFe({phones, id}){
            const [name,setName] = useState(phones.name)
            const [price,setPrice] = useState(phones.price)
            const [brand,setBrand] = useState(phones.brand)
            const [display,setDisplay] = useState(phones.display)
            const [resolution,setResolution] = useState(phones.resolution)
            const [ram,setRam] = useState(phones.ram)
            const [rom,setRom] = useState(phones.rom)
            const [os,setOs] = useState(phones.os)
            const [images,setImages] =useState(phones.images)
            
            const [validated, setValidated] = useState(false);
            
            const navigate = useNavigate()

            const handleSubmit = async (e) =>{
                const updatePhone ={
                   name: name,
                   price:price,
                   brand: brand,
                   display:display,
                   resolution: resolution,
                   ram:ram,
                   rom:rom,
                   os:os,
                   images:images,
                }
                console.log(updatePhone)

                if(updatePhone.name === ""){
                    setValidated("VALID: Name is required");
                    return;
                 }else if(updatePhone.price === ""){
                    setValidated("VALID: Price is required");
                    return;
                 }else if(updatePhone.brand === ""){
                    setValidated("VALID: Brand is required");
                    return;
                 }else if(updatePhone.display === ""){
                    setValidated("VALID: Display is required");
                    return;
                 }else if(updatePhone.resolution === ""){
                    setValidated("VALID: Resolution is required");
                    return;
                 }else if(updatePhone.ram === ""){
                    setValidated("VALID: RAM is required");
                    return; 
                 }else if(updatePhone.rom === ""){
                    setValidated("VALID: ROM is required");
                    return;
                 }else if(updatePhone.os === ""){
                    setValidated("VALID: OS is required");
                    return;
                 }else if(updatePhone.images === ""){
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

                fetch(`${API}/phones/${phones._id}`,{
                   method: "PUT",
                   body: JSON.stringify(updatePhone),
                   headers:{ "Content-Type": "application/json" },
                })   
                .then((data)=> data.json())
                .then(()=> navigate("/displayphone"))
            }
            return(
                <div>
                    <h4 className='titleform' >Edit Phone</h4>
                     <Form>
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

                    <Form.Group className="mb-3" controlId="diplay">
                        <Form.Label>Phone Display :</Form.Label>
                        <Form.Control className='ph4' type="text" placeholder="Enter The Phone Display" 
                             value={display}
                             onChange={(e)=>{
                               setDisplay(e.target.value)
                             }} 
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
                        Edit Phone
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
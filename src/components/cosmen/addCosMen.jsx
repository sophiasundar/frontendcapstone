import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { API } from '../global.js'


   function AddCosMen({setCosMenData}){
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const [brand,setBrand] = useState("")
    const [size,setSize] = useState("")
    const [about,setAbout] = useState("")
    const [images,setImages] =useState("")

    const [validated, setValidated] = useState(false);

    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        const newCosMen ={
            name: name,
            price:price,
            brand: brand,
            size:size,
            about:about,
            images:images,
        }
        console.log(newCosMen)

        if(newCosMen.name === ""){
            setValidated("VALID: Name is required");
            return;
         }else if(newCosMen.price === ""){
            setValidated("VALID: Price is required");
            return;
         }else if(newCosMen.brand === ""){
            setValidated("VALID: Brand is required");
            return;
         }else if(newCosMen.size === ""){
            setValidated("VALID: Size is required");
            return;
         }else if(newCosMen.about === ""){
            setValidated("VALID: About is required");
            return;
         }else if(newCosMen.images === ""){
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

          fetch(`${API}/cosmen`,{
            method: "POST",
            body:JSON.stringify(newCosMen),
            headers:{
                "Content-Type": "application/json"
            },
          }).then((data)=>data.json())
            .then((res)=>{
            setCosMenData(res);
            console.log(res)
          })
          .then(()=>navigate("/cosmeticsformen"))
    }
    return(
        <div>
            <h4 className='titleform' >Add Cosmetics (MEN) </h4>

            <Form>
                <h4 className="valid" >{validated}</h4>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Cosmetics Name :</Form.Label>
                        <Form.Control className='ph1' type="text" placeholder="Enter The Cosmetics Name"
                              value={name}
                              onChange={(e)=>
                                {setName(e.target.value)}
                              }    
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Cosmetics Price :</Form.Label>
                        <Form.Control className='ph2' type="text" placeholder="Enter The Cosmetics Price" 
                             value={price}
                             onChange={(e)=>{
                               setPrice(e.target.value)
                             }}  
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="brand">
                        <Form.Label>Cosmetics Brand :</Form.Label>
                        <Form.Control className='ph3' type="text" placeholder="Enter The Cosmetics Brand" 
                            value={brand}
                            onChange={(e)=>{
                              setBrand(e.target.value)
                            }} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="size">
                        <Form.Label>Cosmetics Size :</Form.Label>
                        <Form.Control className='ph4' type="text" placeholder="Enter The Cosmetics size" 
                             value={size}
                             onChange={(e)=>{
                               setSize(e.target.value)
                             }} 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="about">
                        <Form.Label>Cosmetics About :</Form.Label>
                        <Form.Control className='ph5' type="text" placeholder="Enter The Cosmetics About" 
                              value={about}
                              onChange={(e)=>{
                                setAbout(e.target.value)
                              }} 
                        />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="image">
                        <Form.Label>Cosmetics Image :</Form.Label>
                        <Form.Control className='ph9' type="text" placeholder="Enter The Cosmetics Image Link in Jpeg/png format" 
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
                        Add Cosmetics
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

   export default AddCosMen;
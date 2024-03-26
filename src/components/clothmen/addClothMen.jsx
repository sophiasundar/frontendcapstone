import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { API } from '../global.js'

    function AddClothMen({setClothMenData}){
        const [name,setName] = useState("")
        const [price,setPrice] = useState("")
        const [brand,setBrand] = useState("")
        const [fabric,setFabric] = useState("")
        const [about,setAbout] = useState("")
        const [images,setImages] =useState("")

        const [validated, setValidated] = useState(false);

        const navigate = useNavigate()

        const handleSubmit = async (e) =>{
            const newClothMen ={
                name: name,
                price:price,
                brand: brand,
                fabric: fabric,
                about:about,
                images:images,
            }
            console.log(newClothMen)

            if(newClothMen.name === ""){
                setValidated("VALID: Name is required");
                return;
             }else if(newClothMen.price === ""){
                setValidated("VALID: Price is required");
                return;
             }else if(newClothMen.brand === ""){
                setValidated("VALID: Brand is required");
                return;
             }else if(newClothMen.fabric === ""){
                setValidated("VALID: Fabric is required");
                return;
             }else if(newClothMen.about === ""){
                setValidated("VALID: About is required");
                return;
             }else if(newClothMen.images === ""){
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
            
              fetch(`${API}/clothingmen`,{
                method: "POST",
                body:JSON.stringify(newClothMen),
                headers:{
                    "Content-Type": "application/json"
                },
              }).then((data)=>data.json())
                .then((res)=>{
                setClothMenData(res);
                console.log(res)
              })
              .then(()=>navigate("/clothingformen"))
        }
        return(
            <div>
                
                <h4 className='titleform' >Add Clothing (MEN) </h4>

<Form>
    <h4 className="valid" >{validated}</h4>
        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Clothing Name :</Form.Label>
            <Form.Control className='ph1' type="text" placeholder="Enter The Name"
                  value={name}
                  onChange={(e)=>
                    {setName(e.target.value)}
                  }    
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
            <Form.Label>Clothing Price :</Form.Label>
            <Form.Control className='ph2' type="text" placeholder="Enter The Price" 
                 value={price}
                 onChange={(e)=>{
                   setPrice(e.target.value)
                 }}  
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="brand">
            <Form.Label>Clothing Brand :</Form.Label>
            <Form.Control className='ph3' type="text" placeholder="Enter The Brand" 
                value={brand}
                onChange={(e)=>{
                  setBrand(e.target.value)
                }} 
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="size">
            <Form.Label>Clothing Fabric :</Form.Label>
            <Form.Control className='ph4' type="text" placeholder="Enter The Fabric" 
                 value={fabric}
                 onChange={(e)=>{
                   setFabric(e.target.value)
                 }} 
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="about">
            <Form.Label>Clothing About :</Form.Label>
            <Form.Control className='ph5' type="text" placeholder="Enter The About" 
                  value={about}
                  onChange={(e)=>{
                    setAbout(e.target.value)
                  }} 
            />
        </Form.Group>


        <Form.Group className="mb-3" controlId="image">
            <Form.Label>Clothing Image :</Form.Label>
            <Form.Control className='ph9' type="text" placeholder="Enter The Image Link in Jpeg/png format" 
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
            Add Clothing
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

    export default AddClothMen
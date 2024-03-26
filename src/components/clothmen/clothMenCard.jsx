import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

    function ClothMenCard({value,handleDelete}){
        const [show,setShow] = useState(false);

        const toggleSummary ={
            display:show?"block":"none"
        }

        console.log(toggleSummary.display);

        const navigate = useNavigate();

        return(
            <div className='cardContainer'>
              
              <Card className='card' >
                    <div>
                <Card.Img className='cardImg' alt={value.name}  variant="top" src={value.images} /> </div>
                    {/* <Card.Body> */}
                        <Card.Title className="title" ><b>{value.name}</b></Card.Title>
                    {/* </Card.Body> */}
                          
                    <ListGroup className="list-group-flush" >
                                <ListGroup.Item> <b>Price  :  </b> {value.price} </ListGroup.Item>
                                <ListGroup.Item> <b>Brand  :  </b> {value.brand} </ListGroup.Item>
                                <ListGroup.Item> <b>Fabric : </b> {value.fabric}</ListGroup.Item>
                    </ListGroup>

                    <div className='button'>
                        <Button className="btn1" >
                          <MdEdit
                              onClick={()=>{
                                navigate(`/editclothmen/${value._id}`)
                              }}
                            />  
                        </Button>
                        <Button variant="contained" className="btn2" >
                          <MdDelete
                               onClick={()=>handleDelete(value.id)}
                            /> 
                        </Button>
                    </div>


                    <Card.Body className='list'>
                        <div className="itemSpecs" >
                            <button
                                onClick={()=>{
                                    setShow(!show)
                                    console.log(show)
                                }}
                            > <b>Click TO Know More</b> {  show?"🔽":"🔼"}
                            </button> 
                        </div>
                            { show? <div className='itemDesp' >
                            <ListGroup className="list-group-flush" >
                                <ListGroup.Item><b>About This Item :</b> {value.about}</ListGroup.Item>
                                
                            </ListGroup>
                            </div> 
                            :null}
                            
                    </Card.Body>
                    
                
                </Card>

               

            </div>
        )
    }

    export default ClothMenCard;
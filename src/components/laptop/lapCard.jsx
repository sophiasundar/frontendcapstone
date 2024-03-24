import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

   function LapCard({value,handleDelete}){

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
                                <ListGroup.Item><b>Display : </b> {value.display}</ListGroup.Item>
                    </ListGroup>

                    <div className='button'>
                        <Button className="btn1" >
                          <MdEdit
                              onClick={()=>{
                                navigate(`/laptops/edit/${value._id}`)
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
                                <ListGroup.Item><b>Processor:</b> {value.processor}</ListGroup.Item>
                                <ListGroup.Item><b>RAM</b> {value.ram} </ListGroup.Item>
                                <ListGroup.Item><b>ROM</b> {value.rom} </ListGroup.Item>
                            </ListGroup>
                            </div> 
                            :null}
                            <ListGroup className="list-group-flush" >
                                <ListGroup.Item><b>OS:</b> {value.os}</ListGroup.Item>
                            </ListGroup>
                    </Card.Body>
                    
                
                </Card>


            </div>
        )
    }

    export default LapCard;
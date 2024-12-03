import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


   function HomeCard({value}){

    
    

        return(
            <div className='cardContainer'>
                <Card className='searchCard'  >
                    <div>
                <Card.Img className='cardImg' alt={value.name}  variant="top" src={value.images} /> </div>
                    {/* <Card.Body> */}
                        <Card.Title className="title" ><b>{value.name}</b></Card.Title>
                    {/* </Card.Body> */}
                          
                    <ListGroup className="list-group-flush" >
                                <ListGroup.Item> <b>Price  :  </b> {value.price} </ListGroup.Item>
                                <ListGroup.Item> <b>Brand  :  </b> {value.brand} </ListGroup.Item>
                    </ListGroup>

                    
                    
                
                </Card>


            </div>
        )
    }

    export default HomeCard;






// recommendation

import React from 'react';
import Card from 'react-bootstrap/Card';


const  HomeCard = ({value})=>{

       

        return(
           
            <div className="scroll-wrapper d-flex overflow-auto py-2">
            
                <Card className="mx-2" style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={value.images} />
                    <Card.Body>
                    {/* <Card.Title>{value.name}</Card.Title> */}
                    <Card.Text>Just{value.price}</Card.Text>
                    </Card.Body>
                </Card>
    
      </div>
   
        )
}

export default HomeCard;
// recommendation
import React from 'react';
import Card from 'react-bootstrap/Card';


const RecomCard  = ({value})=>{
     
    console.log(value)

        return(
           
            <div className="d-flex justify-content-center">
               <Card className="mx-2 my-2" style={{ width: '16rem' }}>
                <Card.Img className='recomImg' variant="top" alt={value.name} src={value.images} />
                <Card.Body>
                    <Card.Title  className='titlerecom'>{value.name}</Card.Title>
                    <Card.Text> Just {value.price}</Card.Text>
                </Card.Body>
                </Card>

    
      </div>
   
        )
}

export default RecomCard;
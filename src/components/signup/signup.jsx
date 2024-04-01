import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import { API } from "../global";

const SignUp=()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [state,setState] = useState('login')
    const [validated,setValidated] = useState(false);
    const navigate = useNavigate();


    const data ={
        email,
        password,
      }

      const handleSubmit = async (e) =>{
        setState("Submitting...")
        e.preventDefault();
   
        if(data.email===""){
          setValidated("Email is required and valid");
          return;
      }else if(data.password==="" || data.password.length < 4){
          setValidated("Password is required and more than 5 chr");
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
    
     try{

           const response = await fetch(`${API}/users/login`, {
                 method: "POST",
                 body: JSON.stringify(data),
                 headers: {
                   "Content-Type": "application/json",
             }
             })
              let data1 = await response.json()
             if (response.ok) {
              console.log(data1)
              const authToken = localStorage.setItem("x-auth-token",data1.token);
              console.log("localStorage", authToken);
              
              alert('Successfully LoggedIn')
               navigate("/home");
           } else {
               alert('Invalid Credentials')
               navigate("/");
            }
            
          }catch(err){
             console.log("err");
             setState("");
           }
         };

       
    return(
        <div className="scontainer">

        <div className="form">
              <div className="login">
        <Col>
         <Col xs={2}>
        <Figure className="fig">
      <Figure.Image
        alt="authImage"
        src="https://www.smoothtalker.com/wp-content/uploads/2021/10/login@4x-1024x904.png"
      />
      
    </Figure>
          
            
        </Col>
    
         <Form onSubmit={handleSubmit}  >
         <h6 className="svalid">{validated}</h6>
         <Row xs={2} md={4} lg={6}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <b><Form.Label>Email address</Form.Label></b>
        <Form.Control
          aria-label="Enter Your Email Address"
          placeholder="Enter Your Email Address"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e) => setEmail(e.target.value)}
          value={data.email}
        />
      
      </Form.Group>
          </Row>
    
          <Row xs={2} md={4} lg={6}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <b><Form.Label>Password</Form.Label></b>
        
        <Form.Control
          aria-label="Enter Your Password"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        value={data.password}
        />
       
      </Form.Group>
      </Row>

    </Form>
    <Button variant="primary" type="submit" className="loginbtn"
        onClick = {(e)=>handleSubmit(e)}
    >{state}</Button>{' '}
     <Row >
    
    

     <div>
    <h6 className="hlogin">Already have an account? Just LogIn </h6>
    </div>
    
    
    </Row>
    </Col>
    </div>

    <div  className="signup">
   
    <Figure>
      <Figure.Image
        width={251}
        height={251}
        alt="welcome"
        src="https://tse1.mm.bing.net/th?id=OIP.MgkugHlSpXm930w6zLbomgHaDt&pid=Api&P=0&h=180"
      />
      
    </Figure>
      
        <Button className='sbutton' variant="primary"
             onClick={()=>{
              navigate(`/signup`)
           }
       }
        >SIGN UP</Button>
        <h6 className="hlogin">Not have an account ? Just Signup </h6>
    

    </div>
          
    
    </div>
        
        </div>
    )



}

export default SignUp
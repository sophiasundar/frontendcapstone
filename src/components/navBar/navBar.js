import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';




function NavBar(){

    

  const navigate = useNavigate()

  const  handleLogout=()=>{
    localStorage.removeItem("x-auth-token");
    console.log("Token removed:", !localStorage.getItem("x-auth-token")); 
    navigate('/')
  }
  
    return(
        <>
              <Navbar bg="info" data-bs-theme="light">
                <Container>
                <Button variant="light">
                  <Navbar.Brand href="/home" variant="light" >Item Catalog</Navbar.Brand>
                  </Button>{' '}
                 
                  <Nav className="me-auto">
                  <Button className='addbtn2' variant="primary"
                                onClick={()=>{
                                  navigate('/home')
                                }}
                    >
                        Home page
                    </Button>
                  <Button variant="dark" className='logoutbtn'  size="sm" ><Nav.Link href="/"
                            onClick={handleLogout}
                  ><b>Log Out</b></Nav.Link></Button>{' '}
                  
                  </Nav>
                </Container>
              </Navbar>

              <Navbar bg="secondary" data-bs-theme="dark">
                <Container>
                
                <Navbar.Brand variant="light" href="">Category</Navbar.Brand>
                  
                  
                  <Nav className="me-auto">

                   {/* dropdown1*/}
                  <Button className='drop1' variant="light" size="sm"><Nav.Link href="#features"> 
                   <NavDropdown title="Electronics" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/displaylaptop">Laptop</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/displayphone">
                      phones
                    </NavDropdown.Item>
                    </NavDropdown>
                    </Nav.Link>
                  </Button>{' '}

                   {/* dropdown2*/}
                   <Button className='drop2' variant="light" size="sm"><Nav.Link href="#features"> 
                   <NavDropdown title="Cosmetics" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/cosmeticsformen">Men</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/cosmeticsforwomen">
                      Women
                    </NavDropdown.Item>
                    </NavDropdown>
                    </Nav.Link>
                  </Button>{' '}

                   {/* dropdown3*/}
                   <Button className='drop3' variant="light"  size="sm"><Nav.Link href="#features"> 
                   <NavDropdown title="Clothing" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/clothingformen">Men's wear</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/clothingforwomen">
                      Women's wear
                    </NavDropdown.Item>
                    </NavDropdown>
                    </Nav.Link>
                  </Button>{' '}

                   {/* dropdown4*/}
                   <Button className='drop4' variant="light" size="sm">
                    <Nav.Link href="#features"> 
                   <NavDropdown title="Add Items" id="basic-nav-dropdown">
                     <NavDropdown.Item href="/addlaptop">Add Laptops</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/addphone">
                     Add Phones
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/addcosmen">
                     Add Cosmetics for Men
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/addcoswomen">
                     Add Cosmetics for Women
                    </NavDropdown.Item>
                    
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/addclothmen">
                     Add Clothing for Men
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/addclothwomen">
                     Add Clothing for Women
                    </NavDropdown.Item>
                    </NavDropdown>
                    
                    
                    </Nav.Link>
                  </Button>{' '}

                   </Nav>
                </Container>
              </Navbar>
             
        </>
    )
}

export default NavBar
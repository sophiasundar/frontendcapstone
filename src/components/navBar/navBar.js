import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";




function NavBar(){
  const navigate = useNavigate();
    return(
        <>
              <Navbar bg="info" data-bs-theme="light">
                <Container>
                <Button variant="light">
                  <Navbar.Brand href="/welcome" variant="light" >Item Catalog</Navbar.Brand>
                  </Button>{' '}
                  <Nav className="me-auto">
                  <Button variant="light" className='searchbtn' size="sm"><Nav.Link href="/displaylaptop"><FaSearch />   <b>Search</b></Nav.Link></Button>{' '}
                  <Button variant="dark" className='logoutbtn' size="sm"><Nav.Link href="#features"><b>Log Out</b></Nav.Link></Button>{' '}
                  
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
                    <NavDropdown.Item href="#action/3.2">
                      phones
                    </NavDropdown.Item>
                    </NavDropdown>
                    </Nav.Link>
                  </Button>{' '}

                   {/* dropdown2*/}
                   <Button className='drop2' variant="light" size="sm"><Nav.Link href="#features"> 
                   <NavDropdown title="Cosmetics" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/displaylaptop">Men</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">
                      Women
                    </NavDropdown.Item>
                    </NavDropdown>
                    </Nav.Link>
                  </Button>{' '}

                   {/* dropdown3*/}
                   <Button className='drop3' variant="light"  size="sm"><Nav.Link href="#features"> 
                   <NavDropdown title="Clothing" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/displaylaptop">Men's wear</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">
                      Women's wear
                    </NavDropdown.Item>
                    </NavDropdown>
                    </Nav.Link>
                  </Button>{' '}

                   {/* dropdown4*/}
                   <Button className='drop4' variant="light" size="sm">
                    <Nav.Link href="#features"> 
                   <NavDropdown title="Add Items" id="basic-nav-dropdown">
                     <NavDropdown.Item href="/displaylaptop">Add Laptops</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">
                     Add Phones
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">
                     Add Cosmetics for Men
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">
                     Add Cosmetics for Women
                    </NavDropdown.Item>
                    
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">
                     Add Clothing for Men
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">
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
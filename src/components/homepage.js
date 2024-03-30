import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from './global';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeCard from './homePageCard';





function HomePage( ){
  const [searchResults, setSearchResults] = useState([]); 
  const [searchTerm, setSearchTerm] = useState('');
  

    
        const handleSearch = async (e)=>{
          e.preventDefault();

          if(!searchTerm){
            console.warn('Please enter a what are you searching for');
             return;
          }


          try{
              const res = await axios.get(`${API}/search/?q=${searchTerm}`);
              setSearchResults(res.data);
          }catch(error){
            console.error('Error fetching search results:', error);
          }
      }

      useEffect(()=>{
        // const initialSearchTerm = 'query';
        setSearchTerm();
      }, []);

    return(
        <div className="conhome">
            
            
            <Navbar bg="info" data-bs-theme="light">
                <Container>
                <Button variant="light">
                  <Navbar.Brand href="/home" variant="light" >Item Catalog</Navbar.Brand>
                  </Button>{' '}
                 
                  <Nav className="me-auto">
                  <Form  onSubmit={handleSearch}>
                    <Row>
                      <Col xs="auto">
                      
                         <Form.Control
                        
                          type="text"
                          placeholder="Search and Hit Enter"
                          className=" mr-sm-2"
                           value ={searchTerm}
                           onChange = {(e)=> setSearchTerm(e.target.value)}
                          />
                          
                      </Col>  
                    </Row>
                  </Form>
                  <Button variant="dark" className='logoutbtn' size="sm"
                        
                  ><Nav.Link href="/"><b>Log Out</b></Nav.Link></Button>{' '}
                       
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



              {searchResults.map((item)=>{
                return(
                  <>
              
                  <HomeCard key={item._id} value={item} />
                  </>
                )
              })}
               
            



            <h1 className="homeh">welcome to Item catalog</h1>
            <Image className="homeImg" src='https://images.ctfassets.net/wob906kz2qeo/56FBR5kKTBM0JuWRbgqkN6/944a753bb80a3792fe85d6dc0e65391b/ItemCatalog_Blog-Email_2x.png' />
               <div className="about">
            <h3 ><b>About :</b> </h3>
            

            <div className="subhead">

            <p ><b>Purpose : </b> </p>
            <p className="pur"><b>An item catalog is primarily focused on showcasing and presenting items or products to users. 
            It serves as a digital representation or catalog of the available items, allowing users to browse, search, and view information about each item.</b></p>

            <p ><b>Functionality : </b></p> 
            <p className="fun"><b>A typical item catalog includes features such as item listings, 
            search functionality, filtering options, and item descriptions. It may also include user authentication for features like saving favorites or personalized recommendations and aslo CRUD operations.</b></p>

            <p ><b>Scope: </b></p> 
            <p className="sc"><b>The scope of an item catalog is to provide information and promote items to users, rather than managing inventory or facilitating transactions. It may be used for 
                informational or promotional purposes, such as displaying products on a website or in a digital brochure.</b></p>
        
            <p ><b>Examples: </b></p> 
            <p className="ex"><b>Examples of item catalogs include online marketplaces, digital product catalogs, library catalogs, and online galleries showcasing artwork or collections.</b></p>
            
            <p className="note"><b>Note for search: </b></p> 
            <p className="ex"><b>You can search general words related to the dsiplayed Items in the drop-down like <b>search by common name, brand name, phone, laptop, sarees, perfume, lipsticks, cotton, shirt, foundation, kajal</b> etc...</b></p>
            
            </div>
            </div>
        </div>
    )
}

export default HomePage;
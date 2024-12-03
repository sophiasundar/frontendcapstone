import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown, Button, Form, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("x-auth-token");
    window.location.reload();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) {
      console.warn('Please enter a search term');
      return;
    }
    navigate(`/search?q=${searchTerm}`);
  };

  return (
    <>
      {/* Top Navbar */}
      <Navbar bg="info" expand="lg" className="mb-3" variant="light">
        <Container fluid>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-bottom">Go to Home Page</Tooltip>}
          >
            <Navbar.Brand href="/home" className="text-light">
              Item Catalog
            </Navbar.Brand>
          </OverlayTrigger>

          <Navbar.Toggle aria-controls="navbar-content" />

          <Navbar.Collapse id="navbar-content">
            <Nav className="me-auto">
              <Form className="d-flex" onSubmit={handleSearch}>
                <Form.Control
                  type="text"
                  placeholder="Search items..."
                  className="me-2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button variant="outline-light" onClick={handleSearch}>
                  <FaSearch />
                </Button>
              </Form>
            </Nav>

            <Nav>
              <Button variant="dark" onClick={handleLogout}>
                <b>Log Out</b>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Category Navbar */}
      <Navbar bg="secondary" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand>Category</Navbar.Brand>

          <Navbar.Toggle aria-controls="category-navbar-content" />

          <Navbar.Collapse id="category-navbar-content">
            <Nav className="me-auto">
              <NavDropdown title="Electronics" id="electronics-dropdown">
                <NavDropdown.Item href="/displaylaptop">Laptops</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/displayphone">Phones</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Cosmetics" id="cosmetics-dropdown">
                <NavDropdown.Item href="/cosmeticsformen">Men</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/cosmeticsforwomen">Women</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Clothing" id="clothing-dropdown">
                <NavDropdown.Item href="/clothingformen">Men's Wear</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/clothingforwomen">Women's Wear</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Add Items" id="add-items-dropdown">
                <NavDropdown.Item href="/addlaptop">Add Laptops</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/addphone">Add Phones</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/addcosmen">Add Cosmetics for Men</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/addcoswomen">Add Cosmetics for Women</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/addclothmen">Add Clothing for Men</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/addclothwomen">Add Clothing for Women</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;

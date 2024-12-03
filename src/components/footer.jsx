import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <li><a href="#smartphones" className="text-white">Smartphones</a></li>
              <li><a href="#laptops" className="text-white">Laptops</a></li>
              <li><a href="#women-clothing" className="text-white">Women's Clothing</a></li>
              <li><a href="#men-clothing" className="text-white">Men's Clothing</a></li>
              <li><a href="#women-cosmetics" className="text-white">Women's Cosmetics</a></li>
              <li><a href="#men-cosmetics" className="text-white">Men's Cosmetics</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: support@itemcatalog.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 123 Catalog Street, Product City</p>
          </Col>

          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com" className="text-white">Facebook</a></li>
              <li><a href="https://twitter.com" className="text-white">Twitter</a></li>
              <li><a href="https://instagram.com" className="text-white">Instagram</a></li>
            </ul>
          </Col>
        </Row>

        <hr />

        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Item Catalog. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import NavBar from './navBar/navBar';
import { HomeRecom } from './homeRecom';
import Footer from './footer';

const HomePage = () => {
  return (
    <div className="conhome bg-light">
      <NavBar />

      {/* Hero Section */}
      <div className="hero-section text-center py-5">
        <Image
          className="homeImg"
          src="https://images.ctfassets.net/wob906kz2qeo/56FBR5kKTBM0JuWRbgqkN6/944a753bb80a3792fe85d6dc0e65391b/ItemCatalog_Blog-Email_2x.png"
          fluid
        />
        <h1 className="my-4">Welcome to Item Catalog</h1>
        <p>Your one-stop solution to explore and browse a wide range of products.</p>
        <Button variant="primary" className="mt-3" href="#recommendations">
          Explore Now
        </Button>
      </div>

      {/* Recommendations Section */}
      <Container id="recommendations" className="py-5">
        <h2 className="text-center mb-4">Top Recommendations</h2>
        <HomeRecom />
      </Container>

      {/* About Section */}
      <Container id="about" className="py-5">
        <h3>About Us</h3>
        <Row>
          <Col md={6}>
            <h5>Purpose</h5>
            <p>
              Our item catalog is designed to showcase and present items or products to users. It serves as a digital representation, allowing users to browse, search, and view detailed information about each item.
            </p>
          </Col>
          <Col md={6}>
            <h5>Functionality</h5>
            <p>
              The catalog features item listings, search functionality, filtering options, and detailed item descriptions. Additionally, it offers user authentication and CRUD operations for managing items.
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6}>
            <h5>Scope</h5>
            <p>
              The catalog provides information and promotes items to users rather than managing inventory or facilitating transactions. It is ideal for informational or promotional purposes.
            </p>
          </Col>
          <Col md={6}>
            <h5>Examples</h5>
            <p>
              Examples include online marketplaces, digital product catalogs, library catalogs, and online galleries showcasing artwork or collections.
            </p>
          </Col>
        </Row>
        <div className="mt-4">
          <h5>Search Tips</h5>
          <p>
            You can search for items using keywords like <strong>phones, laptops, sarees, perfumes, lipsticks, shirts</strong>, etc.
          </p>
        </div>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;

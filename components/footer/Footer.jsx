import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row className="text-center text-md-start gy-4">
          {/* About Us Section */}
          <Col xs={12} md={4}>
            <h5>About Us</h5>
            <p>
              We offer the best products to meet your needs. Stay tuned for our latest arrivals and exclusive discounts.
            </p>
          </Col>

          {/* Products Section */}
          <Col xs={12} sm={6} md={2}>
            <h5>Products</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">New Arrivals</a></li>
              <li><a href="#" className="text-white text-decoration-none">Best Sellers</a></li>
              <li><a href="#" className="text-white text-decoration-none">Discounts</a></li>
              <li><a href="#" className="text-white text-decoration-none">Gift Cards</a></li>
            </ul>
          </Col>

          {/* Contact Us Section */}
          <Col xs={12} sm={6} md={3}>
            <h5>Contact Us</h5>
            <p>Email: support@yourstore.com</p>
            <p>Phone: +123 456 789</p>
            <p>Location: 123 Market Street, City</p>
          </Col>

          {/* Social Media Icons Section */}
          <Col xs={12} md={3} className="d-flex justify-content-center justify-content-md-start gap-4">
            <a href="#" className="text-white" aria-label="Facebook">
              <FaFacebook size={28} />
            </a>
            <a href="#" className="text-white" aria-label="Instagram">
              <FaInstagram size={28} />
            </a>
            <a href="#" className="text-white" aria-label="LinkedIn">
              <FaLinkedin size={28} />
            </a>
          </Col>
        </Row>

        {/* Footer Bottom Section */}
        <hr className="bg-white mt-4" />
        <div className="text-center">
          <p className="mb-0">&copy; 2024 Your Store. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

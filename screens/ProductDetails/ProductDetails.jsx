import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Card, Accordion, Image } from 'react-bootstrap';
import './ProductDetails.css';

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {
    product: {
      name: 'PSK | Social Media Kit',
      price: '$29',
      description:
        'A comprehensive collection of 27 customizable templates for Canva and Adobe InDesign, perfect for maintaining a modern visual presence across various social media platforms.',
      category: 'Templates & Themes / Design / Social Media',
      created: 'Sep 05, 2024',
      compatibility: 'Adobe InDesign, Canva',
      size: '42.3 MB',
      imageurl: 'https://via.placeholder.com/450', // Ensure this key matches your API
      priceusd: '29' // Ensure price key is correct
    },
  };

  const handleAddToCart = () => navigate('/cart', { state: { productId: product._id } });

  const handleBuyNow = () => {
    // Pass the complete product object to the Cart component
    navigate('/cart', { state: { product } });
  };

  return (
    <Container className="mt-5" style={{marginBottom:"8rem"}}>
      <Row className="align-items-center">
        {/* Image Section */}
        <Col lg={6} className="d-flex justify-content-center">
          <Image
            src={product.imageurl}
            fluid
            style={{ maxWidth: '100%', borderRadius: '8px' }}
          />
        </Col>

        {/* Product Details Section */}
        <Col lg={6}>
          <h1 className="mb-3">{product.product}</h1>
          <h4 className="text-danger mb-3">${product.priceusd}</h4>

          <p className="text-muted">{product.description}</p>

          
          <Button variant="primary" onClick={handleBuyNow}>
            Buy Now
          </Button>

          <Accordion className="mt-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>About the Product</Accordion.Header>
              <Accordion.Body>
                This social media kit helps streamline your workflow by providing
                easy-to-use templates for Instagram and other platforms.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Product Specs</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Created: 2024-10-01</li>
                  <li>Compatible with: Windows, macOS, Linux</li>
                  <li>File Size: 120 MB</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Reviews</Accordion.Header>
              <Accordion.Body>
                <p>⭐⭐⭐⭐⭐ - "Excellent product. Very useful!"</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;

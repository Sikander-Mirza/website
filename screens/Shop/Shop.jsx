import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Spinner } from 'react-bootstrap';
import './Shop.css'; // Add custom styling here

const Shop = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]); // State for all products
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
  const [loading, setLoading] = useState(true); // State for loading

  // Fetch Products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://task-crypto.vercel.app/getproducts');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data); // Assuming the API returns an array of products
        setFilteredProducts(data); // Initialize filtered products
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Stop loading after fetch
      }
    };

    fetchProducts();
  }, []);

  // Handle Search by Name and Description
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = products.filter((product) =>
      product.product.toLowerCase().includes(value) || product.description.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  // Navigate to Product Details Page
  const handleProductClick = (product) => {
    navigate('/productdetails', { state: { product } }); // Pass the whole product object
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Shop</h1>

      {/* Bootstrap Search Input */}
      <Row className="mb-4 d-flex justify-content-end">
        <Col md={4}>
          <Form>
            <Form.Control
              type="text"
              placeholder="Search by product name or description..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
          </Form>
        </Col>
      </Row>

      {/* Loading Indicator */}
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} className="mb-4">
                <Card
                  className="h-100 product-card"
                  onClick={() => handleProductClick(product)}
                  style={{ cursor: 'pointer' }}
                >
                  <Card.Img variant="top" src={product.imageurl} />
                  <Card.Body>
                    <Card.Title className="font-weight-bold">{product.product}</Card.Title> {/* Product name */}
                    <Card.Text>{product.description}</Card.Text> {/* Product description */}
                    <h5 className="price">${product.priceusd}</h5> {/* Price */}
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col className="text-center">
              <p className="no-products">No products found.</p>
            </Col>
          )}
        </Row>
      )}
    </Container>
  );
};

export default Shop;

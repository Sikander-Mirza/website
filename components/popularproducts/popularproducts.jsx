import React, { useState, useEffect } from 'react';
import { Card, Button, Carousel, Row, Col, Container, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './popularproducts.css'; // Import custom CSS for styling

const PopularProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); // State to hold product data
  const [loading, setLoading] = useState(true); // State to manage loading

  // Function to fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://task-crypto.vercel.app/getproducts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data); // Set fetched products in state
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false); // Stop loading after fetch
    }
  };

  // useEffect to fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to handle product clicks
  const handleProductClick = (product) => {
    navigate('/productdetails', { state: { product } }); // Pass the whole product object
  };

  // Helper: Group products into batches of 3 per slide
  const chunkProducts = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Chunk the products for the carousel
  const productChunks = chunkProducts(products, 3); // 3 products per slide

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Popular Products</h2>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Carousel indicators={false} controls={true} interval={3000}>
          {productChunks.length > 0 ? (
            productChunks.map((chunk, index) => (
              <Carousel.Item key={index}>
                <Row className="justify-content-center">
                  {chunk.map((product) => (
                    <Col key={product._id} md={4} className="mb-4">
                      <Card
                        className="h-100 product-card"
                        onClick={() => handleProductClick(product)}
                        style={{ cursor: 'pointer' }}
                      >
                        <Card.Img
                          variant="top"
                          src={product.imageurl} // Assuming imageUrl is the correct field
                          style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <Card.Body>
                          <Card.Title className="font-weight-bold">{product.product}</Card.Title> {/* Product name */}
                          <Card.Subtitle className="text-muted mb-2">
                            {product.description} {/* Short description */}
                          </Card.Subtitle>
                        </Card.Body>
                        <Card.Footer>
                          <Button variant="primary" className="float-end btn-danger">
                            ${product.priceusd} {/* Product price */}
                          </Button>
                        </Card.Footer>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </Carousel>
      )}
    </Container>
  );
};

export default PopularProducts;

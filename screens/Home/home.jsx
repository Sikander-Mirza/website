import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import NewProducts from '../../components/newproducts/newPrducts';
import FeatureProducts from '../../components/featureproducts/featureProducts';
import PopularProducts from '../../components/popularproducts/popularproducts';
import home1 from "../../src/assets/home1.jpeg"
import home2 from "../../src/assets/home3.jpg"
const Home = () => {
  return (
    <Container fluid className="p-5 bg-light">
      <Row className="align-items-center">
        {/* Left Side Text Section */}
        <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
          <h1 className="display-4 fw-bold text-danger">Welcome to Digi-Flex</h1>
          <p className="lead text-secondary">
            Discover our amazing products and services designed to make your life better.
            We believe in providing the best solutions with top-notch quality and customer satisfaction.
          </p>
          <button className="btn btn-danger mt-3">Get Started</button>
        </Col>

        {/* Right Side Image Slider */}
        <Col lg={6}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={home1}
                alt="First slide"
              />
              
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={home2}
                alt="Second slide"
              />

            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/600x400"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third Slide</h5>
                <p>Join us today to experience the best services.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <NewProducts/>
      <FeatureProducts/>
      <PopularProducts/>
    </Container>
  );
};

export default Home;

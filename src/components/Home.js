
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome to our website!</h1>
          <p>This is the home page.</p>
          <Button variant="primary">Learn more</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

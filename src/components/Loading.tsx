import { Container, Spinner } from 'react-bootstrap';
import React from 'react';

const Loading: React.FC = () => {
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <Spinner animation="border" role="status" />
      <p className="mt-3">CARREGANDO</p>
    </Container>
  );
};

export default Loading;
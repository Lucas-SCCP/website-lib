import React from 'react';

import { Container, Spinner } from 'react-bootstrap';

export const Loading: React.FC = () => {
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
import { Container, Row, Col } from 'react-bootstrap';
import { SocialIcons } from './SocialIcons';

export function Footer() {
  return (
    <footer className='footer'>
      <Container style={{ background: '#000', padding: '30px', fontSize: '14px', color: '#BBB' }}>
        <Row className='align-items-center'>
          <Col xs={12} sm={12} md={12} lg={12} className='d-flex justify-content-center' style={{ marginBottom: '30px' }}>
            <SocialIcons />
          </Col>

          <Col xs={12} sm={12} md={12} lg={12} className='d-flex justify-content-center'>
            <span>Seg a Sex - 05h às 00h</span>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} className='d-flex justify-content-center' style={{ marginBottom: '20px' }}>
            <span>Sab, Dom e Feriado - 08h às 18h**</span>
          </Col>

          <Col xs={12} sm={12} md={12} lg={12} className='d-flex justify-content-center'>
            Rua Alberto Segalla, 1-80
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} className='d-flex justify-content-center' style={{ marginBottom: '20px' }}>
            Jardim Infante Dom Henrique, Bauru 17012-634 
          </Col>
          
          <Col xs={12} sm={12} md={12} lg={12} className='d-flex justify-content-center'>
            CNPJ: 59.425.580/0001-01
          </Col>
          
          <Col xs={12} sm={12} md={12} lg={12}>
            <hr className='footer-divider' />
            <p className='text-center mb-0'>© {new Date().getFullYear()} CT Clean Foods</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
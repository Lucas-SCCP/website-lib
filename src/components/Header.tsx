import { useState } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

export interface HeaderProps {
  logo: string;
}

export const Header: React.FC<HeaderProps> = ({ logo }) => {
  const [menu, setMenu] = useState<any>(null);

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Container>
            <Row style={{ textAlign: 'center' }}>
              <Col xs={12} md={12} lg={12} style={{ padding: '20px' }}>
                <img
                  src={`/images/${logo}`}
                  width='200'
                  className='d-inline-block align-top'
                  alt='Logo'
                  style={{ textAlign: 'center' }}
                />
                <br />
                <span className='title' style={{ display: 'none' }}>Site Template</span>
              </Col>
            </Row>
          </Container>
      </Col>
      {Array.isArray(menu) && menu.length > 0 && (
        <Col className='cor-primaria'>
          <Container>
            <Navbar expand='lg'>
              1
            </Navbar>
          </Container>
        </Col>
      )}
      </Row>
    </Container>
  );
};

export default Header;
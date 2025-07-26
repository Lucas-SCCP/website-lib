import { useState } from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import type { WebsiteType } from '../types/WebsiteType'

export function Header({ website }: { readonly website: WebsiteType }) {
  const [menu, setMenu] = useState<string>(null)

  return (
    <Container fluid>
      <Row id="header">
        <Col xs={12} md={12} lg={12}>
          <Container>
            <Row style={{ textAlign: 'center' }}>
              <Col xs={12} md={12} lg={12} style={{ padding: '20px' }}>
                <img
                  src={`/images/${website.logo}`}
                  width="200"
                  className="d-inline-block align-top"
                  alt="Logo"
                  style={{ textAlign: 'center' }}
                />
                <br />
                <span className="title" style={{ display: 'none' }}>
                  Site Template
                </span>
              </Col>
            </Row>
          </Container>
        </Col>
        {Array.isArray(menu) && menu.length > 0 && (
          <Col style={{ backgroundColor: '#FFCC00', borderColor: '#FFCC00', color: '#000' }}>
            <Container>
              <Navbar expand="lg">1</Navbar>
            </Container>
          </Col>
        )}
      </Row>
    </Container>
  )
}

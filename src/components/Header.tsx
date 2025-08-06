import { Container, Row, Col } from 'react-bootstrap'
import type { WebsiteType } from '../types/WebsiteType'

export function Header({ website }: { readonly website: WebsiteType }) {
  const headerProperties = website.properties.header
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
                  style={{ textAlign: headerProperties.logoAlign }}
                />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

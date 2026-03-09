import { Container, Row, Col } from 'react-bootstrap'
import type { WebsiteType } from '../types/WebsiteType'

export function Header({ website }: { readonly website: WebsiteType }) {
  const headerProperties = website.header.properties
  const headerStyles = website.header.styles
  const domain = website.domain.replace(/\./g, '')
  return (
    <Container fluid={headerStyles.fluid || undefined} style={{ backgroundColor: headerStyles.backgroundColor }}>
      <Row id="header">
        <Col xs={3} md={3} lg={3} style={{ display: headerProperties.showLogo ? 'block' : 'none', ...headerStyles }}>
          <img
            src={`https://noisdev-website-images.s3.sa-east-1.amazonaws.com/${domain}/${website.logo}`}
            width="200"
            className="d-inline-block align-top"
            alt="Logo"
            style={{ textAlign: headerProperties.logoAlign }}
          />
        </Col>
        <Col lg={2}>
          Social Icons
        </Col>
        <Col lg={3}>
          Email
        </Col>
        <Col lg={2}>
          Ligações
        </Col>
        <Col lg={2}>
          Localização
        </Col>
      </Row>
    </Container>
  )
}

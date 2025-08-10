import { Container, Row, Col } from 'react-bootstrap'
import type { WebsiteType } from '../types/WebsiteType'

export function Header({ website }: { readonly website: WebsiteType }) {
  const headerProperties = website.header.properties
  const headerStyles = website.header.styles
  const domain = website.domain.replace(/\./g, '')
  return (
    <Container fluid={headerStyles.fluid || undefined} style={{ backgroundColor: headerStyles.backgroundColor }}>
      <Row id="header">
        <Col xs={12} md={12} lg={12} style={headerStyles}>
          <img
            src={`https://noisdev-website-images.s3.sa-east-1.amazonaws.com/${domain}/${website.logo}`}
            width="200"
            className="d-inline-block align-top"
            alt="Logo"
            style={{ textAlign: headerProperties.logoAlign }}
          />
        </Col>
      </Row>
    </Container>
  )
}

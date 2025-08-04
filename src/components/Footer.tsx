import DOMPurify from 'dompurify'
import { Container, Row, Col } from 'react-bootstrap'
import { SocialIcons } from './SocialIcons'
import { WebsiteType } from '../types/WebsiteType'
import type { SocialPropertiesType } from '../types/SocialPropertiesType'
import type { FooterPropertiesType } from '../types/FooterPropertiesType'

export function Footer({ website }: { readonly website: WebsiteType }) {
  const social: SocialPropertiesType = website.properties?.social
  const footer: FooterPropertiesType = website.properties?.footer
  return (
    <footer className="footer">
      <Container style={{ background: '#000', padding: '30px', fontSize: '14px', color: '#BBB' }}>
        <Row className="align-items-center">
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            className="d-flex justify-content-center"
            style={{ marginBottom: '30px' }}
          >
            <SocialIcons social={social} />
          </Col>

          <Col
            xs={12} sm={12} md={12} lg={12}
            className="d-flex flex-column align-items-center"
            style={{ padding: '20px' }}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(footer.text1) }}
          />

          <Col
            xs={12} sm={12} md={12} lg={12}
            className="d-flex flex-column align-items-center"
            style={{ padding: '20px' }}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(footer.text2) }}
          />

          <Col
            xs={12} sm={12} md={12} lg={12}
            className="d-flex justify-content-center"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(footer.text3) }}
          />

          <Col xs={12} sm={12} md={12} lg={12}>
            <hr className="footer-divider" />
            <p className="text-center mb-0">© {new Date().getFullYear()} {website.name}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

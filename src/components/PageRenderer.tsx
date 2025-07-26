import { Suspense } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import { ConstructorService } from '../services/ConstructorService'
import type { ComponentType } from '../types/ComponentType'

export function PageRenderer({ ga4, title, components }: { readonly ga4: string; readonly title: string; readonly components: ComponentType[] }) {
  const constructorService = new ConstructorService()
  return (
    <Suspense fallback={<div>Carregando elementos...</div>}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />
        <meta property="og:image" content={title} />
      </Helmet>
      <Container fluid style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/images/background_ctcleanfoods.png')`, backgroundSize: 'contain', backgroundPosition: 'top', width: '100%' }}>
        <Row id="page" style={{ padding: '20px' }}>
          <Col xs={12} sm={12} md={12} lg={{ span: 4, offset: 4 }} style={{ padding: '50px', border: '3px solid #FFCC00', backgroundColor: '#1b1b1b', color: '#fff', textAlign: 'center' }}>
            {components.map((component) => (
              <Row id="component" key={component.id}>
                {constructorService.createComponent(component)}
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </Suspense>
  )
}

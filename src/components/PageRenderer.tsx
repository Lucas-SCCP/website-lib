import { Suspense } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';

import type { ComponentType } from '../types/ComponentType';

import { ConstructorService } from '../services/ConstructorService';
import { AnalyticsService } from '../services/AnalyticsService';

export const PageRenderer: React.FC<{ ga4: string, title: string, components: Array<ComponentType> }> = ({ ga4, title, components }) => {
  const constructorService = new ConstructorService();
  return (
    <Suspense fallback={<div>Carregando elementos...</div>}>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={title} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={title} />
        <meta property='og:image' content={title} />
      </Helmet>
      <Container>
        <Row id='page' style={{ padding: '20px' }}>
          <Col xs={12} sm={12} md={12} lg={{ span: 6, offset: 3 }} className='destaque border-primaria'>
            {components.map((component, index) => 
              <Row id='component' key={component.id}>
                {constructorService.createComponent(component)}
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </Suspense>
  )
};

export default PageRenderer;
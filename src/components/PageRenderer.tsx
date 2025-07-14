import { Suspense } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import { ConstructorService } from '../services/ConstructorService';
import { AnalyticsService } from '../services/AnalyticsService';

interface Element {
  id: number;
  element_type_id: number;
  component_id: number;
  component_parent: number | null;
  size: number;
  sort: number;
  content: string;
  properties: {
    text: string
    style: {
      color: string,
      fontSize: string,
      textAlign: string,
      fontWeight: string,
    }
  };
}

interface PageRendererProps {
  ga4: string;
  title: string;
  components: Array<{
    id: number;
    name: string;
    page_id: number;
    component_type_id: number;
    size: number;
    sort: number;
    properties: JSON;
    enabled: boolean;
    elements: {
      line: number,
      content: Element[];
    };
  }>;
}

export const PageRenderer: React.FC<PageRendererProps> = ({ ga4, title, components }) => {
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
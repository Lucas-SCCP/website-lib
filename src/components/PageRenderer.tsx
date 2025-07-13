import { Suspense } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import { CreateComponent } from '../services/ConstructorService';

interface PageRendererProps {
  title: string;
  components: Array<{
    id: string;
    type: string;
    props: Record<string, any>;
  }>;
}

export const PageRenderer: React.FC<PageRendererProps> = ({ title, components }) => {
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
                {CreateComponent(component)}
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </Suspense>
  )
};

export default PageRenderer;
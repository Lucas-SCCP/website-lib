import { Row, Col, Carousel } from 'react-bootstrap';
import type { ComponentType } from '../types/ComponentType';

export function CarouselComponent({ component }: { component: ComponentType}) {
  return (
    <Row>
      <Col>
        <Carousel indicators={false} className="slider">
          {Array.isArray(component.elements) &&
            component.elements.map((element: any, index: number) => (
              <Carousel.Item key={element.id || index}>
                <img
                  src={element.content?.src || ''}
                  alt={element.content?.title || ''}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                />
              </Carousel.Item>
            ))}
        </Carousel>
      </Col>
    </Row>
  );
}
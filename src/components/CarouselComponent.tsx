import { Row, Col, Carousel } from 'react-bootstrap';
import type { ComponentType } from '../types/ComponentType';
import type { ElementType } from '../types/ElementType';

export function CarouselComponent({ component }: { component: ComponentType}) {
  return (
    <Row>
      <Col>
        <Carousel indicators={false} className="slider">
          {Array.isArray(component.elements) &&
            component.elements.content.map((element: ElementType, index: number) => (
              <Carousel.Item key={element.id || index}>
                <img
                  src={element.properties.name || ''}
                  alt={element.properties.title || ''}
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
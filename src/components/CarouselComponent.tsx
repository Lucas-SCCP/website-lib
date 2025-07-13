import { Row, Col, Carousel } from 'react-bootstrap';

interface CarouselElement {
  id: string;
  size: number;
  content: string;
  title: string;
}

interface CarouselComponentProps {
  component: {
    id: string;
    size: number;
    elements: {
      content: Record<string, any>;
    };
  };
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ component }) => {
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
};

export default CarouselComponent;
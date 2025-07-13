import { Row, Col } from 'react-bootstrap';
import { CreateElement } from '../services/ConstructorService';

interface TextComponentProps {
  component: {
    id: string;
    size: number;
    elements: {
      content: Record<string, any>;
    };
  };
}

export const TextComponent: React.FC<TextComponentProps> = ({ component }) => {
  return (
    <Col key={component.id} xs={12} md={12} lg={component.size}>
      <Row id="element">
        {Object.values(component.elements.content).map((content: any) =>
          CreateElement(content)
        )}
      </Row>
    </Col>
  )
};

export default TextComponent;
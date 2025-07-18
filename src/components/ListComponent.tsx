import { Row, Col } from 'react-bootstrap';
import { ConstructorService } from '../services/ConstructorService';
import ElementType from '../constants/ElementType'

interface ListComponentProps {
  component: {
    id: string;
    size: number;
    elements: {
      content: Record<string, any>;
    };
  };
}

export const ListComponent: React.FC<ListComponentProps> = ({ component }) => {
  const constructorService = new ConstructorService();

  const contents = Object.values(component.elements.content).sort((a, b) => a.sort - b.sort)
  
  const items = []
  for (let i = 0; i < contents.length; i++) {
    const current = contents[i]
    if (current.element_type_id === ElementType.Icon) {
      const next = contents[i + 1]
      if (next && next.element_type_id === ElementType.Text) {
        items.push({ icon: current, text: next })
        i++
      } else {
        items.push({ icon: current, text: '' })
      }
    }
  }

  return (
    <Col key={component.id} xs={12} md={12} lg={component.size} className='itens'>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map(({ icon, text }, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
            <span>
              {constructorService.createElement(icon)}
            </span>
            <span className='itens-text'>
              {constructorService.createElement(text)}
            </span>
          </li>
        ))}
      </ul>
    </Col>
  )
};

export default ListComponent;
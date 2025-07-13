import ComponentFactory from '../factories/ComponentFactory';
import ElementFactory from '../factories/ElementFactory';

export const CreateWebsite = async () => {
  return 'CREATE WEBSITE';
}

export const CreatePage = () => {
  return 'CREATE PAGE';
}

export const CreateComponent = (component: any) => {
  return ComponentFactory.create(component);
}

export const CreateElement = (element: any) => {
  return ElementFactory.create(element);
}

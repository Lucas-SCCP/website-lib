import type { ComponentType } from "./ComponentType";

export interface PageType {
  id: number;
  website_id: number;
  title: string;
  name: string;
  path: string;
  menu: number;
  menu_order: number;
  enabled: boolean;
  components: ComponentType[];
}
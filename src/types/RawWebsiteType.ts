export type RawWebsiteType = {
  id: number;
  name: string;
  domain: string;
  domain_stage: string;
  logo: string;
  enabled: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  pages: Array<{
    id: number;
    website_id: number;
    title: string;
    name: string;
    path: string;
    menu: number;
    menu_order: number;
    enabled: boolean;
    components: Array<{
      id: number;
      page_id: number;
      component_type_id: number;
      properties: JSON;
      name: string;
      size: number;
      sort: number;
      enabled: boolean;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
      elements: {
        line: number;
        content: [{
          id: number;
          component_id: number;
          element_type_id: number;
          size: number;
          component_parent: number | null;
          sort: number;
          created_at: string;
          updated_at: string;
          deleted_at: string | null;
          properties: {
            title: string,
            name: string,
            text: string,
            placeholder: string,
            type?: string,
            validateType?: string,
            loadingMessage?: string,
            action?: string,
            successMessageId?: number,
            successActionId?: number,
            href?: string,
            message?: string,
            variant?: string,
            visibilityAfter?: boolean,
            hideButtonAfter?: boolean,
            loadingTime?: number,
            mask: string,
            required?: boolean,
            style: {
              color: string,
              fontSize: string,
              textAlign: string,
              fontWeight: string,
              display: string,
              height: string,
              alignItems: string,
              marginTop: string,
              marginLeft: string
            }
          };
        }]
      };
    }>
  }>
};

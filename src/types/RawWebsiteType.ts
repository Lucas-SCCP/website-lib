export type RawWebsiteType = {
  id: number
  name: string
  domain: string
  domain_stage: string
  logo: string
  properties: {
    header: {
      logoAlign: 'left' | 'right' | 'center'
    }
    footer: {
      text1: string
      text2: string
      text3: string
    }
    social: {
      facebook: {
        path: string
      }
      linktree: {
        path: string
      }
      instagram: {
        path: string
      }
    }
  }
  styles: {
    backgroundColor: string
    color: string
  }
  enabled: boolean
  published_at: string | null
  created_at: string
  updated_at: string
  deleted_at: string | null
  pages: Array<{
    id: number
    website_id: number
    title: string
    name: string
    path: string
    menu: number
    menu_order: number
    enabled: boolean
    components: Array<{
      id: number
      page_id: number
      component_type_id: number
      properties: JSON
      name: string
      size: number
      sort: number
      enabled: boolean
      created_at: string
      updated_at: string
      deleted_at: string | null
      elements: {
        line: number
        content: [
          {
            id: number
            component_id: number
            element_type_id: number
            size: number
            component_parent: number | null
            sort: number
            created_at: string
            updated_at: string
            deleted_at: string | null
            properties: {
              name: string
              title: string
              message: string
              type: string
              startHidden: boolean

              path?: string

              mask?: string
              placeholder?: string
              required?: boolean
              inputValidateId?: number

              loadingTime?: number
              hideOnClick?: boolean
              actionId?: number
              successActionId?: number
              errorActionId?: number
              successMessageId?: number
              errorMessageId?: number
            }
            styles: {
              alignItems?: string
              backgroundColor?: string
              borderColor?: string
              borderRadius?: string
              borderStyle?: string
              borderWidth?: string
              color?: string
              display?: string
              float?: 'left' | 'right' | 'none' | 'inline-start' | 'inline-end'
              fontSize?: string
              fontWeight?: string
              height?: string
              marginTop?: string
              marginLeft?: string
              marginRight?: string
              marginBottom?: string
              objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
              paddingTop?: string
              paddingLeft?: string
              paddingRight?: string
              paddingBottom?: string
              textAlign?: 'left' | 'right' | 'center' | 'justify' | 'start' | 'end'
              width?: string
            }
          }
        ]
      }
    }>
  }>
}

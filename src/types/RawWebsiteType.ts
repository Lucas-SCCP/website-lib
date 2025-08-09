export type RawWebsiteType = {
  id: number
  name: string
  domain: string
  domainStage: string
  logo: string
  properties: {
    loadingMessage: string
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
    backgroundImage: string
  }
  enabled: boolean
  publishedAt: string | null
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  pages: Array<{
    id: number
    websiteId: number
    title: string
    name: string
    path: string
    menu: number
    menuOrder: number
    enabled: boolean
    properties: {
      size: {
        xs: {
          span: number
          offset?: number
        }
        sm: {
          span: number
          offset?: number
        }
        md: {
          span: number
          offset?: number
        }
        lg: {
          span: number
          offset?: number
        }
      }
    }
    styles: {
      backgroundColor: string
      color: string
      backgroundImage: string
    }
    components: Array<{
      id: number
      pageId: number
      componentTypeId: number
      name: string
      properties: {
        size: {
          xs: {
            span: number
            offset?: number
          }
          sm: {
            span: number
            offset?: number
          }
          md: {
            span: number
            offset?: number
          }
          lg: {
            span: number
            offset?: number
          }
        }
      }
      sort: number
      enabled: boolean
      createdAt: string
      updatedAt: string
      deletedAt: string | null
      elements: {
        line: number
        content: [
          {
            id: number
            componentId: number
            elementTypeId: number
            componentParent: number | null
            sort: number
            properties: {
              name: string
              title: string
              message: string
              type: string
              startHidden: boolean
              size: {
                xs: {
                  span: number
                  offset?: number
                }
                sm: {
                  span: number
                  offset?: number
                }
                md: {
                  span: number
                  offset?: number
                }
                lg: {
                  span: number
                  offset?: number
                }
              }

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
            createdAt: string
            updatedAt: string
            deletedAt: string | null
          }
        ]
      }
    }>
  }>
}

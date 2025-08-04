import type { WebsitePropertiesType } from './WebsitePropertiesType'

export interface SocialPropertiesType extends WebsitePropertiesType {
  instagram: {
    path: string
  },
  facebook: {
    path: string
  },
  linktree: {
    path: string
  }
}

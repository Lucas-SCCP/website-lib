import type { HeaderPropertiesType } from './HeaderPropertiesType'
import type { SocialPropertiesType } from './SocialPropertiesType'
import type { FooterPropertiesType } from './FooterPropertiesType'

export interface WebsitePropertiesType {
  loadingMessage: string
  header: HeaderPropertiesType
  footer: FooterPropertiesType
  social: SocialPropertiesType
}

import type { PropertiesType } from './PropertiesType'
import type { HeaderPropertiesType } from './HeaderPropertiesType'
import type { SocialPropertiesType } from './SocialPropertiesType'
import type { FooterPropertiesType } from './FooterPropertiesType'

export interface WebsitePropertiesType extends PropertiesType {
  header: HeaderPropertiesType
  footer: FooterPropertiesType
  social: SocialPropertiesType
}

import { Row, Col } from 'react-bootstrap'
import { IconType } from 'react-icons'
import { FaFacebookF, FaInstagram, FaLink } from 'react-icons/fa'
import type { SocialPropertiesType } from '../types/SocialPropertiesType'

export function SocialIcons({ social }: { readonly social: SocialPropertiesType }) {
  const elements = [
    {
      id: 1,
      url: social.facebook.path,
      icon: FaFacebookF as IconType,
      description: 'Logo do Facebook'
    },
    {
      id: 2,
      url: social.instagram.path,
      icon: FaInstagram as IconType,
      description: 'Logo do Instagram'
    },
    {
      id: 3,
      url: social.linktree.path,
      icon: FaLink as IconType,
      description: 'Logo do Linktree'
    }
  ]

  return (
    <Row>
      {elements.map((element) => (
        <Col key={element.id} className="text-center social-icons" style={{ color: '#FFCC00' }}>
          <a href={element.url} target="_blank" rel="noreferrer" aria-label={element.description}>
            <element.icon />
          </a>
        </Col>
      ))}
    </Row>
  )
}

import { Row, Col } from 'react-bootstrap'
import { IconType } from 'react-icons'
import { FaFacebookF, FaInstagram, FaLink } from 'react-icons/fa'

export function SocialIcons() {
  const elements = [
    {
      id: 1,
      url: 'https://www.facebook.com/',
      icon: FaFacebookF as IconType,
      description: 'Logo do Facebook'
    },
    {
      id: 2,
      url: 'https://www.instagram.com/ct.cleanfoods',
      icon: FaInstagram as IconType,
      description: 'Logo do Instagram'
    },
    {
      id: 3,
      url: 'https://linktr.ee/',
      icon: FaLink as IconType,
      description: 'Logo do Linktree'
    }
  ]

  return (
    <Row>
      {elements.map((element, index) => (
        <Col key={element.id} className="text-center social-icons texto-primaria">
          <a href={element.url} target="_blank" rel="noreferrer" aria-label={element.description}>
            <element.icon />
          </a>
        </Col>
      ))}
    </Row>
  )
}

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { PageType } from '../types/PageType'

export function Menu({ page }: { readonly page: PageType }) {
  console.log('Menu renderizado', page)
  if (page.menu === undefined) {
    return <div>Carregando menu</div>
  }

  if (!page.menu) {
    return null
  }

  const menuType = page.menuType || 'link'

  console.log('Menu type:', menuType)

  let menu = null
  if (menuType === 'sections') {
    menu = page.menuSections.map((section) => ({
      type: 'section' as const,
      section: section.section,
      name: section.name,
      order: section.order,
      styles: section.styles
    }))
  }

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='menu' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menu.map((element) => {
              if (element.type === 'link') {
                return (
                  <Nav.Link key={element.id} href={element.path} style={{ color: '#FFF' }}>
                    {element.name}
                  </Nav.Link>
                )
              } else if (element.type === 'dropdown') {
                return (
                  <NavDropdown key={element.id} title={element.name} id="basic-nav-dropdown" className="menu">
                    {element.items.map((item) => (
                      <NavDropdown.Item key={item.id} href={item.path}>
                        {item.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                )
              } else if (element.type === 'section') {
                return (
                  <Nav.Link key={element.id} href={`#${element.section}`} style={{ color: '#FFF' }}>
                    {element.name}
                  </Nav.Link>
                )
              }
              return null
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

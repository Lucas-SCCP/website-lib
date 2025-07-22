import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

interface MenuLink {
  id: string | number
  type: 'link'
  name: string
  path: string
}

interface MenuDropdownItem {
  name: string
  path: string
}

interface MenuDropdown {
  id: string | number
  type: 'dropdown'
  name: string
  items: MenuDropdownItem[]
}

type MenuElement = MenuLink | MenuDropdown

interface MenuProps {
  menu?: MenuElement[] | null
}

export function Menu({ menu }: MenuProps) {
  if (menu === undefined) {
    return <div>Carregando menu</div>
  }

  if (menu === null) {
    return null
  }

  return (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="menu">
        <Nav className="mx-auto">
          {menu.map((element) => {
            // @todo: criar factory para tipo de menu
            if (element.type === 'link') {
              return (
                <Nav.Link key={element.id} href={element.path} style={{ color: '#FFF' }}>
                  {element.name}
                </Nav.Link>
              )
            } else if (element.type === 'dropdown') {
              return (
                <NavDropdown key={element.id} title={element.name} id="basic-nav-dropdown" className="menu">
                  {element.items.map((item, idx) => (
                    <NavDropdown.Item key={idx} href={item.path}>
                      {item.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              )
            }
            return null
          })}
        </Nav>
      </Navbar.Collapse>
    </>
  )
}

import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import type { WebsiteType } from '../types/WebsiteType'

export function MainLayout({ website }: { readonly website: WebsiteType }) {
  return (
    <div id="main-layout" style={{ backgroundColor: website.styles.backgroundColor, color: website.styles.color }}>
      <Header website={website} />
      <Outlet />
      <Footer />
    </div>
  )
}

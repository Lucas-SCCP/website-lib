import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import type { WebsiteType } from '../types/WebsiteType'

export function SiteLayout({ website }: { readonly website: WebsiteType }) {
  console.log('SiteLayout renderizado')
  return (
    <div id="site-layout" style={{ backgroundColor: website.styles.backgroundColor, color: website.styles.color }}>
      <Header website={website} />
      <Outlet />
      <Footer website={website} />
    </div>
  )
}

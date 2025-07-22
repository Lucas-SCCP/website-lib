import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import type { WebsiteType } from '../types/WebsiteType';

export function MainLayout({ website }: { website: WebsiteType }) {
  return (
    <>
      <Header website={website}/>
      <main className='background-image'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
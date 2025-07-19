import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

export const MainLayout: React.FC<{ logo: string }> = ({ logo }) => {
  return (
    <>
      <Header
        logo={logo}
      />
        <main className='background-image'>
          <Outlet />
        </main>
      <Footer />
    </>
  )
};

export default MainLayout;
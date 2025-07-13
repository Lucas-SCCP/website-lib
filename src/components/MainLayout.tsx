import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

interface MainLayoutProps {
  logo: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ logo }) => {
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
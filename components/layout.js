import Navbar from './navigation';
import Footer from './footer';
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='container'>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

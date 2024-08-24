import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Preloader from "../Components/Preloader/Preloader";
import Home from "../Pages/Home/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Layout = () => {
  return (
    <div>
      <Preloader />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default Layout;

import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Preloader from "../Components/Preloader/Preloader";
import Home from "../Pages/Home/Home";

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

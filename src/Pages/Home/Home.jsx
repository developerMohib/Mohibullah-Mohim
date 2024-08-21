import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Contact from "../../Components/Contact/Contact";
import Resume from "../../Components/Resume/Resume";
import Service from "../../Components/Service/Service";

const Home = () => {
  return (
    <div className="container mx-auto px-6 py-4">
      <Banner />
      <Resume />
      <About />
      <Service />
      <Contact />
    </div>
  );
};

export default Home;

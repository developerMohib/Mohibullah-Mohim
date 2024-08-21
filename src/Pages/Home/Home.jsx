
import About from '../../Components/About/About';
import Contact from '../../Components/Contact/Contact';
import Resume from '../../Components/Resume/Resume';
import Service from '../../Components/Service/Service';

const Home = () => {
    return (
        <div>
           <Resume/>
           <About/>
           <Service/>
           <Contact/>
        </div>
    );
};

export default Home;
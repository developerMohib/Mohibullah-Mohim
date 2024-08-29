import { Typewriter } from "react-simple-typewriter";
import banner from "/mohibullah-mohim-hero.jpg";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import { NavHashLink } from "react-router-hash-link";

const Hero = () => {

  return (
    <div id="home"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-anchor-placement="center-bottom"
      className="flex items-center justify-center bg-gray-900 p-5"
    >
      <div className="grid md:grid-cols-5 grid-cols-1 items-center gap-10 md:px-10">
        <div className="md:col-span-3">
          <h1 className="mb-2 text-3xl font-bold text-white">
            <span className="text-green-500">Hi, </span>I am Junior{" "}
            <span className="text-red-700 font-bold">
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "MERN Stack Developer",
                  "Front End Developer",
                  "Web Developer",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>

          <p className="my-6 leading-7 text-white">
            I m a dedicated front-end developer with a knack for creating
            dynamic and visually appealing web applications. With a strong
            foundation in HTML, CSS, JavaScript and Next Js (js framework
            React). I specialize in building responsive, user-friendly
            interfaces. <br />I thrive on turning design concepts into reality
            and continuously learning about new technologies to enhance user
            experience and dedicated to Frontend React Developer with a passion
            for transforming complex problems into intuitive user interfaces
            using Next js.
          </p>
          <div className="flex justify-center space-x-5">
          <NavHashLink to="/#contact" smooth className="flex w-full items-center justify-center gap-1 rounded-2xl bg-rose-500 p-5 py-3 font-semibold text-white hover:bg-rose-700">
              Hire Me <IoMdHeartEmpty className="h-6 w-6 animate-ping" />
            </NavHashLink>
            <a
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white hover:bg-gray-300 p-5 py-3 font-semibold"
              href="https://drive.google.com/uc?export=download&id=1mddJnRMxpfGIffMp8qN6TwEihNgXQlH0"
              download
            >
              Resume <FiDownload className="h-6 w-6 animate-bounce" />
            </a>
          </div>
        </div>
        <div className="md:col-span-2 mx-auto">
          <img
            src={banner}
            alt="Mohibullah Mohim"
            className="md:size-96 size-72 rounded-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

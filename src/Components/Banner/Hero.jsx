import { Typewriter } from "react-simple-typewriter";
import banner from "/mohibullah-mohim-hero.jpg"

const Hero = () => {
  return (
    <div className="flex items-center justify-center bg-gray-900 p-5">
      <div className="grid md:grid-cols-5 grid-cols-1 items-center gap-10 md:px-10">
        <div className="md:col-span-3" >
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
            interfaces. <br/>I thrive on turning design concepts into reality and
            continuously learning about new technologies to enhance user
            experience and dedicated to Frontend React Developer with a passion
            for transforming complex problems into intuitive user interfaces
            using Next js.
          </p>
          <div className="flex justify-center space-x-5">
            <button className="flex w-full items-center justify-center gap-1 rounded-2xl bg-rose-500 p-5 py-3 font-semibold text-white hover:bg-rose-700">
              Follow
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white p-5 py-3 font-semibold">
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="md:col-span-2" >
          <img
            src={banner}
            alt=""
            className="md:size-96 size-72 rounded-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

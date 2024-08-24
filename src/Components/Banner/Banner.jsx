import { Typography } from "antd";
const { Text } = Typography;
import { FaArrowDown } from "react-icons/fa6";

const Banner = () => {
  return (
    <section id="#home" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom" className="text-black body-font relative">
      <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div>
            <span className="flex justify-between">
              <img className="animate-spin-slow w-8" src="/graphql.png" alt="" />
              <img className="animate-spin w-8" src="/redux.png" alt="" />
            </span>
            <Text data-aos='fade-up' data-aos-duration="2000" code>
              Your new idea will make me a happy. So keep rocking !
            </Text>
          </div>
          <h1 className="title-font tracking-wide sm:text-2xl md:text-4xl xl:text-6xl mb-4 font-bold ">
            Let s explore your idea and build into real one
          </h1>
          <p className="mb-8 leading-relaxed ">
            As a Web developer, I gonna want to raise myself a pro developer by
            learning new update thing day to day. i think a developer has no
            limit to learn new thing.
          </p>
          <div data-aos="fade-right" className="flex justify-center">
            <button className="inline-flex text-white bg-blue-500 py-2 px-4 focus:outline-none hover:bg-opacity-80 rounded text-sm">
              Book a demo
            </button>
          </div>
        </div>
        <div data-aos="fade-up-left"
          id="pattern"
          className="w-32 sm:w-40 lg:max-w-xl lg:w-full md:w-32 xl:w-5/6 bg-contain bg-no-repeat md:ml-40 xl:mr-16"
        >
          <div className="w-full flex gap-3 justify-center items-center my-10">
            <img
              className="h-20 w-auto rounded-xl animate-spin-slow"
              alt="react logo"
              src="/react.png"
            />
            <img
              className="w-20 h-auto rounded-xl"
              alt="nextjs logo"
              src="/next.png"
            />
            <img
              className="w-20 h-auto rounded-xl"
              alt="typescript"
              src="/ts.png"
            />
          </div>
          <div className="w-full h- flex gap-3 justify-center items-center my-2">
            <img
              className="h-auto w-20 rounded-xl"
              alt="Js logo"
              src="/js.png"
            />
            <img
              className="h-auto w-[84px] rounded-xl"
              alt="nodeJs logo"
              src="/node-js.png"
            />
            <img
              className="w-auto h-[120px] rounded-xl"
              alt="express js"
              src="/express.png"
            />
            <img className="h-28 rounded-xl animate-bounce" alt="mongodb" src="/mongodb.png" />
          </div>
          <div className="w-full flex gap-0 justify-center items-center">
            <img
              className="h-auto w-28 rounded-xl"
              alt="TailwindCSS"
              src="/tailwind.png"
            />
            <img
              className="h-auto w-24 rounded-xl"
              alt="Material Ul"
              src="/mui.png"
            />
            <img
              className="w-20 h-auto rounded-xl"
              alt="Framer"
              src="/framer.png"
            />
          </div>
          <div className="w-full flex gap-3 justify-center my-2">
            <img
              className="w-auto h-20 rounded-xl"
              alt="Firebase"
              src="/Firebase.png"
            />
          </div>
        </div>
      </div>      
      <button className="border border-slate-400 p-5 rounded-full hover:bg-orange-500 animate-bounce absolute left-1/2 md:bottom-0 -bottom-5-5"> <FaArrowDown/> </button>
    </section>
  );
};

export default Banner;

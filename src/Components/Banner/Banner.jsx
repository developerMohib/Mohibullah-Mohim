import {  Typography } from 'antd';
const { Text } = Typography;

const Banner = () => {
  return (
    <section id='#home' className="text-black body-font">
      <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div>
          <Text code>Your new idea will make me a happy. So keep rocking !</Text>
          </div>
          <h1 className="title-font tracking-wide sm:text-2xl md:text-4xl xl:text-6xl mb-4 font-bold ">
            Let s explore your idea and build into real one
          </h1>
          <p className="mb-8 leading-relaxed ">
            As a Web developer, I gonna want to raise myself a pro developer by learning new update thing day to day. i think a developer has no limit to learn new thing.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-blue-500 py-2 px-4 focus:outline-none hover:bg-opacity-80 rounded text-sm">
              Book a demo
            </button>
          </div>
        </div>
        <div
          id="pattern"
          className="w-32 sm:w-40 lg:max-w-xl lg:w-full md:w-32 xl:w-5/6 bg-contain bg-no-repeat md:ml-40 xl:mr-16"
        >
          <div className="w-full flex gap-3 justify-center items-center my-10">
            <img
              className="h-20 w-auto rounded-xl"
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
            <img
              className="h-28 rounded-xl"
              alt="mongodb"
              src="/mongodb.png"
            />
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
    </section>
  );
};

export default Banner;

import { Typography } from "antd";
import Aos from "aos";
import { useEffect, useRef, useState } from "react";
const { Text } = Typography;
import { FaArrowDown } from "react-icons/fa6";
import Swal from "sweetalert2";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
      Aos.refresh();
    } else {
      document.body.classList.remove("modal-open");
    }

    // Cleanup: Remove the class when the component unmounts
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isModalOpen]);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    e.target.reset();
    const userData = { name, email, message };
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Success! Your message has been sent.",
      showConfirmButton: false,
      timer: 1500,
    });
    setIsModalOpen(false);
    try {
      await fetch(`${import.meta.env.VITE_baseURL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-anchor-placement="center-bottom"
      className="text-black body-font relative"
    >
      <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div>
            <span className="flex justify-between">
              <img
                className="animate-spin-slow w-8"
                src="/graphql.png"
                alt=""
              />
              <img className="animate-spin w-8" src="/redux.png" alt="" />
            </span>
            <Text data-aos="fade-up" data-aos-duration="2000" code>
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
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex text-white bg-blue-500 py-2 px-4 focus:outline-none hover:bg-opacity-80 rounded text-sm"
            >
              Book me now
            </button>
          </div>

          {isModalOpen && (
            <form onSubmit={handlesubmit}>
              <div
                className="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
                id="modal"
                data-aos="fade-in"
                data-aos-duration="600"
              >
                <div
                  ref={modalRef}
                  role="alert"
                  className="container mx-auto w-11/12 md:w-2/3 max-w-lg modal-content"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                >
                  <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                    {/* Modal content */}
                    <div className="w-full flex justify-start text-gray-600 mb-3"></div>
                    <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
                      Drop Your Fascinating Idea{" "}
                    </h1>
                    {/* Name part Start */}
                    <label
                      htmlFor="name"
                      className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                    >
                      Name
                    </label>
                    <div className="relative mb-5 mt-2">
                      <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                        <RiUser3Line className="text-black " />
                      </div>
                      <input
                        id="name"
                        type="text"
                        className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
                        placeholder="Your Name"
                      />
                    </div>
                    {/* Name part end */}

                    {/* Email part start */}
                    <label
                      htmlFor="email"
                      className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                    >
                      Email
                    </label>
                    <div className="relative mb-5 mt-2">
                      <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                        <MdOutlineMailOutline className="text-black " />
                      </div>
                      <input
                        id="email"
                        type="email"
                        className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
                        placeholder="mohibullahmohim2020@gmail.com"
                      />
                    </div>
                    {/* Email part End */}

                    {/* Message Part Start */}
                    <label
                      htmlFor="message"
                      className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                    >
                      Your Query
                    </label>
                    <div className="relative mb-5 mt-2">
                      <textarea
                        id="message"
                        name="message"
                        className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-24 flex items-center pl-3 text-sm border-gray-300 rounded border "
                        placeholder="Your Query"
                      ></textarea>
                    </div>
                    {/* Message Part Start */}
                    <div className="flex items-center justify-start w-full">
                      <button
                        type="submit"
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                      >
                        Submit
                      </button>
                      <button
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Cancel
                      </button>
                    </div>
                    <button
                      className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                      onClick={() => setIsModalOpen(false)}
                    >
                      {/* Close icon */}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>

        <div
          data-aos="fade-up-left"
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
            <img
              className="h-28 rounded-xl animate-bounce"
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
      <button className="border border-slate-400 p-5 rounded-full hover:bg-orange-500 animate-bounce absolute left-1/2 md:bottom-0 -bottom-5-5">
        {" "}
        <FaArrowDown />{" "}
      </button>
    </section>
  );
};

export default Banner;

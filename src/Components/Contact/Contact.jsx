import Swal from "sweetalert2";

const Contact = () => {
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
      timer: 1500
    });
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
    <>
      <section data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom" className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/2 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 border-none "              
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28911.550461359584!2d91.38333297438518!3d25.069893628722102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750daf49ba21823%3A0x3180c8d4ddeb5b9b!2sSunamganj!5e0!3m2!1sen!2sbd!4v1724336359905!5m2!1sen!2sbd"
              loading="lazy"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            ></iframe>
            <div className="bg-white flex flex-wrap py-6 rounded shadow-md w-full ">
              <div className="lg:w-1/2 px-6 ">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">SP Bangla, Sunamganj</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  href="mailto:mohibullahmohim2020@gmail.com"
                  className="leading-relaxed hover:text-red-400"
                >
                  mohibullahmohim2020@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <a
                  className="leading-relaxed hover:text-red-400"
                  href="tel:+8801706439736"
                >
                  +8801706439736
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Feel Free and touch me with your beautiful idea !
            </p>
            <form onSubmit={handlesubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Your Query
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
              >
                Button
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              Your new idea will make me a happy. So keep rocking !
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

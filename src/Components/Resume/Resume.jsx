import { Link } from "react-router-dom";
import { Done_work } from "../../utils/doneWork";
import { ImSpinner9 } from "react-icons/im";
import { useState } from "react";

console.log("done eork", Done_work);
const Resume = () => {
  const [loading,setLoading]=useState(false);
  return (
    <>
      <div className="md:grid grid-cols-3 gap-4">
        {Done_work?.slice(0, 3).map((work, index) => (
          <div className="grid-cols-1" key={index}>
            <a href="#" className="group relative block bg-black">
              <img
                alt=""
                src={work.Image}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                  {work.projectName}
                </p>

                <Link
                  to={work.sourceCode}
                  className="text-xl font-bold text-white sm:text-2xl"
                >
                  Source Code
                </Link>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">{work.about}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}        
      </div>
  
      <div className="text-center my-5 ">
          <button> {loading ? <ImSpinner9 className="animate-spin"/> : 'Load More'} </button>
        </div>
    </>
  );
};

export default Resume;

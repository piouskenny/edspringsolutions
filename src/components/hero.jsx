import Navbar from "./navbar";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div
        className=" bg-gradient-to-r hover:bg-gradient-to-l from-cyan-600 to-blue-600 w-full
        h-fit
         text-white
        text-center
        md:px-32 md:pb-10 md:pt-10 pt-40 pb-28 px-6 
      
      "
        //  md:grid md:grid-cols-2
        // bg-[#426c91]
      >
        <div className="md:col-span-1 md:mt-12  md:mb-10">
          <h1 className="text-7xl md:text-9xl font-medium">
            EdSpr<span className="text-black">i</span>ng
            <span className="block md:text-5xl md:mt-4 text-3xl mt-3 ">Solutions</span>
          </h1>

          <h1 className="md:text-xl font-medium my-3 text-gray-200">
            The Perfect Place for Education Consult
          </h1>

          <a href="#contact">
            <button className="bg-white-900 px-4 mt-6 py-2 border-md border rounded-lg md:rounded-xl hover:bg-white hover:text-blue-400">
              Schedule a meeting now &rarr;
            </button>
          </a>
        </div>
        {/* <div className="md:col-span-1">
          <img src="https://img.freepik.com/free-photo/attractive-african-businessman-glasses-suit-holding-papers_273609-9306.jpg?w=740&t=st=1677107850~exp=1677108450~hmac=f64e30c0d6c8699678271093f9d47bbe5f1eb4439644e000eda27ff2555e697c" className="md:rounded-full pt-12 md:pt-0 rounded-lg" alt="" />
        </div> */}
      </div>
    </>
  );
};

export default Hero;

import Navbar from "./navbar";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-[#426c91] w-full h-2/4 text-white
        text-center
        md:px-32 md:pb-10 md:pt-10 pt-28 pb-12 px-6 
      "
        //  md:grid md:grid-cols-2
      >
        <div className="md:col-span-1 md:mt-12  md:mb-10">
          <h1 className="text-4xl md:text-6xl font-medium">
            The Perfect Place for Education Consult
          </h1>

          <p className="text-gray-300 md:mt-6 my-6 text-md">
            Lorem ipsum dolor sit amet velit illum asperiores mollitia odit
            eligendi.
          </p>

          <a href="#">
            <button className="bg-white-900 px-4 mt-6 py-2 border-md border rounded-lg md:rounded-xl hover:bg-white hover:text-blue-400">
              Contact Us &rarr;
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

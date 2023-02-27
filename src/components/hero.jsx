import Navbar from "./navbar";
import HeroImage from "./hero-edited.png";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-no-repeat w-full
        h-fit
         text-white
        text-center
      "
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        <div
          className="bg-black bg-opacity-40 md:bg-opacity-10
         md:px-10 md:pb-40 md:pt-20 pt-40 pb-28 px-6
         h-screen"
        >
          <div id="content" className="md:mt-20 md:mb-0 text-center mt-[8%]">
            {" "}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-[100px] h-[15x0px] text-blue-400 text-center"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg> */}
            <h1 className="text-7xl md:text-9xl font-bold text-center text-blue-400 cursor-pointer hover:text-green-400">
              EdSpring <span className="text-green-400  hover:text-blue-500">
               Solutions
              </span>
            </h1>
            <h1 className="md:text-xl font-medium text-md text-white mt-6 md:mt-10">
              Transforming Education with Innovative Solutions, Improving
              Student Outcomes
            </h1>
            <a href="#contact">
              <button className="cursor-pointer transform hover:scale-125 text-white  px-4 mt-10 py-2 border-md border  border-blue-400 rounded-lg md:rounded-xl  hover:border-blue-500">
                Schedule a meeting now &rarr;
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

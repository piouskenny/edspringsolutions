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
          <div
            id="content"
            className="md:mt-20  md:mb-0 text-center mt-[20%]"
          >
            <h1 className="text-5xl md:text-9xl font-bold text-center text-blue-400 ">
              EdSpring Solutions
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

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

        //  md:grid md:grid-cols-2
        // bg-[#426c91]
      >
        {/* <img src={HeroImage} alt="" /> */}
        <div
          className="bg-black bg-opacity-40 md:bg-opacity-10
         md:px-32 md:pb-30 md:pt-10 pt-40 pb-28 px-6
        "
        >
          <div className="md:col-span-1 md:mt-20  md:mb-0 text-center ">
            <h1 className="text-7xl md:text-9xl font-bold text-center text-blue-400 ">
              
                EdSpr<span className="text-green-400">i</span>ng
              

              <span className="block md:text-5xl md:mt-4 text-3xl mt-1 text-orange-400 ">
                Solutions
              </span>
            </h1>

            <h1 className="md:text-xl font-medium my-3 text-lg text-white">
              Transforming Education with Innovative Solutions, Improving
              Student Outcomes
            </h1>

            <a href="#contact">
              <button className="cursor-pointer transform hover:scale-110 text-white  px-4 mt-6 py-2 border-md border  border-green-500 rounded-lg md:rounded-xl  hover:border-blue-500">
                Schedule a meeting now &rarr;
              </button>
            </a>
          </div>
        </div>

        {/* <div className="md:col-span-1">
          <img src="https://img.freepik.com/free-photo/attractive-african-businessman-glasses-suit-holding-papers_273609-9306.jpg?w=740&t=st=1677107850~exp=1677108450~hmac=f64e30c0d6c8699678271093f9d47bbe5f1eb4439644e000eda27ff2555e697c" className="md:rounded-full pt-12 md:pt-0 rounded-lg" alt="" />
        </div> */}
      </div>
    </>
  );
};

export default Hero;

import Navbar from "./navbar";
import HeroImage from "./hero-gif.gif";

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
          backgroundSize: "cover", 
        }}
      >
        <div
          className="bg-gray-900 bg-opacity-60 md:bg-opacity-70
         md:px-10 md:pb-40 md:pt-20  px-6 md:bg-cover bg-contain
         h-[60vh]
         md:h-screen"
    
        >
          <div id="content" className="md:mt-28 md:mb-0 text-center pt-24 pb-10 md:pt-0">
            <h1 className="text-6xl md:text-9xl font-bold text-center text-blue-400 cursor-pointer hover:text-green-400">
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


// import Navbar from "./navbar";
// import HeroVideo from "./hero-video.mp4";

// const Hero = () => {
//   return (
//     <>
//       <Navbar />
//       <div
//         className="bg-cover bg-no-repeat bg-fixed w-full h-fit text-white text-center"
//         style={{
//           backgroundVideo: `url(${HeroVideo})`,
//         }}
//       >
//         <div
//           className="z-0 bg-black bg-opacity-40 md:bg-opacity-10 md:px-10 md:pb-40 md:pt-20 pt-40 pb-28 px-6 h-screen"
//         >
//           <div id="content" className="md:mt-20 md:mb-0 text-center mt-[8%]">
//             <h1 className="text-7xl md:text-9xl font-bold text-center text-blue-400 cursor-pointer hover:text-green-400">
//               EdSpring <span className="text-green-400  hover:text-blue-500">
//                Solutions
//               </span>
//             </h1>
//             <h1 className="md:text-xl font-medium text-md text-white mt-6 md:mt-10">
//               Transforming Education with Innovative Solutions, Improving
//               Student Outcomes
//             </h1>
//             <a href="#contact">
//               <button className="cursor-pointer transform hover:scale-125 text-white  px-4 mt-10 py-2 border-md border  border-blue-400 rounded-lg md:rounded-xl  hover:border-blue-500">
//                 Schedule a meeting now &rarr;
//               </button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;

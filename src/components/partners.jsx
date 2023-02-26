import Port1 from "../assets/portfolios/Port1.png";
import Port2 from "../assets/portfolios/Port2.png";
import Port3 from "../assets/portfolios/Port3.png";

const Partners = () => {
  return (
    <>
      <section
        id="porfolios"
        className="bg-gradient-to-r hover:bg-gradient-to-l from-green-200 to-blue-200 w-fulltext-white md:mt-6 md:px-32 px-10 py-6 md:py-16"
      >
        <div className="md:mx-40">
          <h1 className="text-4xl text-center text-gray-800 font-semibold">
            Portfolios
          </h1>
        </div>

        <div className="port md:hidden text-center">
          <div className="flex justify-center items-center gap-40">
            <img
              className="md:w-40 md:h-40 h-[60px] w-[100px] object-center"
              src={Port1}
              alt="Partner 1"
            />

            <img
              className="md:w-40 md:h-40 h-[60px] w-[100px]object-center my-6"
              src={Port3}
              alt="Partner 3"
            />
            
          </div>
          <div className="flex justify-center items-center">
          <img
            className="md:w-40  md:h-40 h-[40px]"
            src={Port2}
            alt="Partner 2"
          />
          </div>

        </div>

        <div className="flex justify-center items-center mt-6">
          <div className=" hidden md:grid grid-cols-3 gap-12 items-center">
            <div className="col-span-1  ">
              <img className="w-30 h-40" src={Port1} alt="Partner 1" />
            </div>

            <div className="col-span-1  ml-16">
              <img className="w-fit h-40" src={Port3} alt="Partner 3" />
            </div>

            <div className="col-span-1">
              <img className="w-fit h-20" src={Port2} alt="Partner 2" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;

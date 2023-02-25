import Port1 from "../assets/portfolios/port1.jpeg";
import Port2 from "../assets/portfolios/port2.jpeg";
import Port3 from "../assets/portfolios/port3.jpeg";

const Partners = () => {
  return (
    <>
      <section
        id="about"
        className="bg-white  text-white md:mt-6 md:px-32 px-10 py-6"
      >
        <div className="md:mx-40">
          <h1 className="text-2xl text-center text-gray-800 font-semibold">
            Portfolios
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-6 justify-center items-center">
          <div className="col-span-1">
            <img
              className="w-40 h-40 object-center"
              src={Port1}
              alt="Partner 1"
            />
          </div>

          <div className="col-span-1">
            <img
              className="w-40 h-20 object-center"
              src={Port2}
              alt="Partner 2"
            />
          </div>
          <div className="col-span 1">
            <img
              className="w-40 h-40 object-center"
              src={Port3}
              alt="Partner 3"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;

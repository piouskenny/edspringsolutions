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
            Meet Our Partners
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-screen h-full object-cover object-center"
                src={Port1}
                alt="Partner 1"
              />
              <div className="p-4">
                <p className="text-gray-600">Liberty's Promise</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src={Port2}
                alt="Partner 2"
              />
              <div className="p-4">
                <p className="text-gray-600">Jack and Jill</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src={Port3}
                alt="Partner 3"
              />
              <div className="p-4">
                <p className="text-gray-600">
                  Creative Minds International Public Chapter School
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;

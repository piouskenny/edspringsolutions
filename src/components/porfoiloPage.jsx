import Port1 from "../assets/portfolios/Port1.png";
import Port2 from "../assets/portfolios/Port2.png";
import Port3 from "../assets/portfolios/Port3.png";
import Port4 from "../assets/portfolios/port4.png";
import Port5 from "../assets/portfolios/port5.png";
import Navbar from './navbar';
import Footer from './footer';

const PortfolioPage = () => {
  return (
    <>
    <Navbar/>
      <section
        id="porfolios"
        className=" w-fulltext-white md:mt-6 md:px-32 px-10 py-6 md:py-16"
      >
        <div className="md:mx-40">
          <h1 className="text-4xl text-center text-blue-500 font-medium">
            Portfolio
          </h1>
        </div>

        <div className="grid grid-cols-3 text-center gap-12 my-10 items-center">
          <div className="col-1">
            <img
              className="md:w-40 md:h-40 h-[60px] w-[100px] object-center"
              src={Port1}
              alt="Partner 1"
            />
          </div>
          <div className="col-1">
            <img
              className="md:w-40 md:h-40 h-[60px] w-[100px] object-center"
              src={Port3}
              alt="Partner 1"
            />
          </div>
          <div className="col-1">
            <img
              className="md:w-40 md:h-40 h-[60px] w-[100px] object-center"
              src={Port4}
              alt="Partner 1"
            />
          </div>
          <div className="col-1">
            <img
              className="md:w-[15rem] md:h-[15rem] h-[60px] w-[100px] object-center"
              src={Port5}
              alt="Partner 1"
            />
          </div>
          <div className="col-1">
            <img className="w-fill h-fill" src={Port2} alt="Partner 2" />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default PortfolioPage;
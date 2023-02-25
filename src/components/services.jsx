import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section
        id="services"
        className="text-white md:px-20 w-full md:py-10 px-20 pt-20 pb-10"
      >
        <h1 className="text-black text-center text-4xl mb-6">Services</h1>

        <div className="lg:grid lg:grid-cols-4 lg:gap-4 md:grid md:grid-cols-2 md:gap-6  ">
          <div className="w-full md:w-fit p-4 md:col-span-1 lg:col-span-1">
            <div className="bg-white shadow-xl  rounded-lg overflow-hidden">
              <img
                className="w-screen h-full object-cover object-center"
                src="https://img.freepik.com/free-photo/happy-african-american-bank-manager-shaking-hands-with-client-after-successful-agreement-office_637285-1150.jpg?w=740&t=st=1677255898~exp=1677256498~hmac=5d4673ed516b13791e70d13a7d7ccddf84ddb17214209534cc11aa3721f64718"
                alt="Partner 1"
              />
              <div className="p-4 mb-4">
                <h1 className="font-bold md:py-2  text-gray-900 my-1">
                  Capacity Building
                </h1>
                <br />
                <Link
                  to="/buildingComponents"
                  target="_parent"
                  className="text-sm bg-white px-4 py-2 border-lg border border-black rounded-lg md:rounded-xl  text-black hover:bg-white hover:text-blue-400"
                >
                  Read More &rarr;
                </Link>
                
              </div>
            </div>
          </div>

          <div className="w-full md:w-fit p-4 md:col-span-1 lg:col-span-1">
            <div className="bg-white shadow-xl  rounded-lg overflow-hidden">
              <img
                className="w-screen h-full object-cover object-center"
                src=" https://img.freepik.com/free-photo/happy-african-american-bank-manager-shaking-hands-with-client-after-successful-agreement-office_637285-1150.jpg?w=740&t=st=1677255898~exp=1677256498~hmac=5d4673ed516b13791e70d13a7d7ccddf84ddb17214209534cc11aa3721f64718"
                alt="Partner 1"
              />
              <div className="p-4">
                <h1 className="font-bold md:py-2 mb-6 text-gray-900">
                  System & Program Planning
                </h1>
       
                <br />
                <Link
                  to="/systemandprogramPlanning"
                 target="_parent"
                  className="text-sm bg-white px-4 mt-6 py-2 border-lg border border-black rounded-lg md:rounded-xl  text-black hover:bg-white hover:text-blue-400"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-fit p-4 md:col-span-1 lg:col-span-1">
            <div className="bg-white shadow-xl  rounded-lg overflow-hidden">
              <img
                className="w-screen h-full object-cover object-center"
                src=" https://img.freepik.com/free-photo/happy-african-american-bank-manager-shaking-hands-with-client-after-successful-agreement-office_637285-1150.jpg?w=740&t=st=1677255898~exp=1677256498~hmac=5d4673ed516b13791e70d13a7d7ccddf84ddb17214209534cc11aa3721f64718"
                alt="Partner 1"
              />
              <div className="p-4">
                <h1 className="font-bold md:py-2  text-gray-900">
                  Special Education Advocacy for Families
                </h1>
                <br />
                <Link to="/specialeducation" 
                 className="text-sm bg-white px-4 mt-6 py-2 border-lg border border-black rounded-lg md:rounded-xl  text-black hover:bg-white hover:text-blue-400"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-fit p-4 md:col-span-1 lg:col-span-1">
            <div className="bg-white shadow-xl  rounded-lg overflow-hidden">
              <img
                className="w-screen h-full object-cover object-center"
                src=" https://img.freepik.com/free-photo/happy-african-american-bank-manager-shaking-hands-with-client-after-successful-agreement-office_637285-1150.jpg?w=740&t=st=1677255898~exp=1677256498~hmac=5d4673ed516b13791e70d13a7d7ccddf84ddb17214209534cc11aa3721f64718"
                alt="Partner 1"
              />
              <div className="p-4">
                <h1 className="font-bold md:py-2  text-gray-900">
                  Special Education and Section 504 Compliance
                </h1>
                <br />
                <Link to="/specialeducation" 
                 className="text-sm bg-white px-4 mt-6 py-2 border-lg border border-black rounded-lg md:rounded-xl  text-black hover:bg-white hover:text-blue-400"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

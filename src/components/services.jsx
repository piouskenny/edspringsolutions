import {Link} from 'react-router-dom';

const Services = () => {
  return (
    <>
      <section
        id="services"
        className="bg-[#426c91] text-white md:px-32 w-full md:py-10  pt-20 pb-10"
      >
        <h1 className="text-white text-center text-2xl mb-6">Services</h1>
        <div className="lg:grid lg:grid-cols-4 lg:gap-4 md:grid md:grid-cols-2 md:gap-6  ">
          <div className="text-center md:col-span-1 lg:col-span-1 bg-gray-100 text-gray-800 rounded-md md:rounded-xl mx-6 md:mx-0 my-4 md:my-0 md:h-46 md:w-60">
            <div className="py-10">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                  />
                </svg>
              </div>

              <h1 className="font-bold md:py-2">Capacity Building</h1>
              <Link to="/buildingComponents" className="text-gray-800 text-sm">Read More...</Link>
            </div>
          </div>
          <div className= "md:col-span-1 lg:col-span-1 text-center bg-gray-100 text-gray-800 rounded-md md:rounded-xl mx-6 md:mx-0 my-4 md:my-0  md:h-46 md:w-60">
            <div className="py-10">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  />
                </svg>
              </div>
              <h1 className="font-bold md:py-2">System & Program Planning</h1>
              <Link to="/systemandprogramPlanning" className="text-gray-800 text-sm">Read More...</Link>
            </div>
          </div>
          <div className="text-center md:col-span-1 lg:col-span-1 bg-gray-100 text-gray-800 rounded-md md:rounded-xl mx-6 md:mx-0 my-4 md:my-0  md:h-46 md:w-60">
            <div className="py-10">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h1 className="font-bold md:py-2">
                Special Education Advocacy for Families
              </h1>
              <Link to="/specialeducation" className="text-gray-800 text-sm">Read More...</Link>
            </div>
          </div>
          <div className="text-center md:col-span-1 lg:col-span-1 bg-gray-100 text-gray-800 rounded-md md:rounded-xl mx-6 md:mx-0 my-4 md:my-0  md:h-46 md:w-60">
            <div className="py-10">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <h1 className="font-bold md:py-2">
                Special Education and Section 504 Compliance
              </h1>
              <a href="#" className="text-gray-800 text-sm">Read More...</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

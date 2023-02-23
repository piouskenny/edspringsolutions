const Services = () => {
  return (
    <>
      <section
        id="services"
        className="bg-blue-800  text-white md:px-32 w-full md:py-10  py-6 "
      >
        <h1 className="text-white text-center text-2xl mb-6">Services</h1>
        <div className="md:grid grid-cols-4 gap-4">
          <div className="text-center col-span-1 bg-blue-700 rounded-md md:rounded-xl mx-6 md:mx-0 my-4 md:my-0">
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

              <h1 className="md:py-2">Dolor</h1>
              <p className="text-gray-300">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="col-span-1 text-center bg-blue-700 rounded-md md:rounded-xl mx-6 md:mx-0 my-4 md:my-0">
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
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <h1 className="md:py-2">Dolor</h1>
              <p className="text-gray-300">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="text-center col-span-1 bg-blue-700 rounded-md md:rounded-xl mx-6 md:mx-0 my-4 md:my-0">
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
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h1 className="md:py-2">Dolor</h1>
              <p className="text-gray-300">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div className="text-center col-span-1 bg-blue-700 rounded-md md:rounded-xl mx-6 md:mx-0 my-4 md:my-0">
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
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <h1 className="md:py-2">Dolor</h1>
              <p className="text-gray-300">Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

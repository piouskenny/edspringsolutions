const Focus = () => {
  return (
    <>
      <section
        id="about"
        className="bg-white  text-white md:mt-6 md:px-32 px-10 py-6"
      >
        <div className="md:mx-40">
          <h1 className="text-2xl  text-center text-gray-800 font-semibold">
            Focus Areas
          </h1>
        </div>

        <div className="md:grid md:grid-cols-2 md:mt-6 md:mb-6">
          <div className="md:col-span-1">
            <h2 className="text-gray-800 font-bold text-lg mb-4">
              Our Areas of Focus
            </h2>
            <div className="my-4">
              <p className="md:text-md text-gray-700 font-bold mt-1">
                Focus Area 1
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt quasi quae est odit ut dignissimos reiciendis aliquid
                tempora facilis similique!
              </p>
            </div>
            <div className="my-4">
              <p className="md:text-md text-gray-700 font-bold mt-1">
                Focus Area 2
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt quasi quae est odit ut dignissimos reiciendis aliquid
                tempora facilis similique!
              </p>
            </div>
            <div className="my-4">
              <p className="md:text-md text-gray-700 font-bold mt-1">
                Focus Area 3
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt quasi quae est odit ut dignissimos reiciendis aliquid
                tempora facilis similique!
              </p>
            </div>
          </div>

          <div className="md:col-span-1">
            <img src="" alt="Image PlaceHolder" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Focus;

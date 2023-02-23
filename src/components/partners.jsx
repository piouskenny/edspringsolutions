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

        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-56 object-cover object-center"
                src="https://source.unsplash.com/random/400x400"
                alt="Partner 1"
              />
              <div className="p-4">
                <h2 className="font-bold text-2xl mb-2 text-gray-700">Partner 1</h2>
                <p className="text-gray-600">Role of Partner 1</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-56 object-cover object-center"
                src="https://source.unsplash.com/random/400x400"
                alt="Partner 2"
              />
              <div className="p-4">
                <h2 className="font-bold text-2xl mb-2 text-gray-700">Partner 2</h2>
                <p className="text-gray-600">Role of Partner 2</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-56 object-cover object-center"
                src="https://source.unsplash.com/random/400x400"
                alt="Partner 3"
              />
              <div className="p-4">
                <h2 className="font-bold text-2xl mb-2 text-gray-700">Partner 3</h2>
                <p className="text-gray-600">Role of Partner 3</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;

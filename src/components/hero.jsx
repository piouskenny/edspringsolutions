const Hero = () => {
  return (
    <>
      <div className="bg-blue-900 w-full h-2/4 text-white md:grid md:grid-cols-2 md:px-32 md:pb-20 md:pt-20 pt-10 pb-10 px-6">
        <div className="md:col-span-1 ">
            <h1 className="text-3xl md:text-5xl font-medium">The Perfect Place for Education Consult</h1>

            <p className="text-gray-400 md:mt-6 text-md">Lorem ipsum dolor sit amet velit illum asperiores mollitia odit eligendi.</p>

            <a href="#">
                <button className="bg-blue-400 px-4 mt-6 py-2 rounded-lg md:rounded-full hover:bg-white hover:text-blue-400">Contact Us &rarr;</button>
            </a>
        </div>
        <div className="md:col-span-1"></div>
      </div>
    </>
  );
};

export default Hero;

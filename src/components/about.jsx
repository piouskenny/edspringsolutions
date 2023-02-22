const About = () => {
  return (
    <>
      <section id="about" className="bg-white  text-white md:mt-6 md:px-32 px-10 py-6">
        <div className="md:mx-40">
          <h1 className="text-2xl text-center text-gray-800 font-semibold">
            About Ed Spring Solutions
          </h1>
          <p className="md:text-md text-gray-600 mt-4">
            primarily Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cumque dolor alias quas facere. Consectetur fuga alias minus quod
            temporibus amet eos recusandae earum animi ut veniam ratione
            voluptas, ipsum rerum.
          </p>
        </div>

        <div className="md:grid md:grid-cols-2 md:mt-6 md:mb-6">
          <div className="md:col-span-1">
            <img src="" alt="Image PlaceHolder" />
          </div>
          <div className="md:col-span-1">
            <h2 className="text-gray-800 font-bold text-lg">History</h2>
            <p className="md:text-md text-gray-600 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              soluta saepe nulla quae, repellat officiis perspiciatis dolorum
              possimus alias quis quo ad pariatur est vel nemo optio? Recusandae
              cum voluptatem pariatur deleniti repellat minima quia cumque,
              maiores eaque assumenda placeat quod sed, expedita animi quo ad
              itaque error aut quis!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

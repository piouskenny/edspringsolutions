import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-white text-white lg:mt-6 md:px-32 px-10 pt-20 pb-10"
      >
        <div className="lg:mx-40">
          <h1 className="text-4xl text-center text-gray-800 font-semibold">
            About EdSpring
            <span className="font-light block">Solutions</span>
          </h1>
          <p className="md:text-xl  text-gray-600 text-lg mt-12">
            At EdSpring Solutions, we utilize evidence-based practices and
            solution-oriented approaches in promoting high-quality education for
            all students through our educational service. Our team is commited
            to staying up-to-date with the latest research and best practices in
            education, and we integrate this knowledge into our work with
            clients to achieve the desired results.
          </p>

          <Link to="/aboutMore" target="_parent">
            <button className="bg-white px-4 mt-6 py-2 border-lg border border-black rounded-lg md:rounded-xl text-black hover:bg-white hover:text-blue-400">
              Read More About Us &rarr;
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;

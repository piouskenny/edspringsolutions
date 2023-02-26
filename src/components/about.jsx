import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-white text-white lg:mt-6  px-10 pt-20 md:pt-6 pb-10"
      >
        <div className="lg:mx-20">
          <h1 className="text-4xl text-center text-gray-800 font-semibold">
            About EdSpring
            <span className="font-light block">Solutions</span>
          </h1>
          <p className="md:text-xl  text-gray-600 text-lg mt-12">
            Improving student outcomes is a complex and multifaceted challenge
            that requires a collaborative effort across the entire education
            ecosystem. At EdSpring Solutions, we believe in a holistic approach
            that takes into account the complex interplay of factors that affect
            student achievement, and we partner with our clients to proffer
            actionable solutions that support the achievement of all students.
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

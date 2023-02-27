import DrTaiwo from "../assets/portfolios/drTaiwo.jpeg";
import { Link } from "react-router-dom";

const Founder = () => {
  return (
    <>
      <section
        id="founder"
        className="text-white lg:mt-6 lg:px-32 px-10  pb-10"
      >
        <h2 className="text-blue-500 text-3xl mb-6  text-center md:text-start">
          Meet the <span className="my-3 ">Founder</span>
        </h2>
        <div className="lg:grid lg:grid-cols-2 md:flex items-center  ">
          <div className="lg:col-span-1 lg:mt-0">
            <img
              src={DrTaiwo}
              alt="Founders Image"
              className="
            md:h-[500px] md:w-[500px] 
            h-full w-full"
            />
          </div>
          <div className="lg:col-span-1 lg:mt-10">
            <p className="md:text-xl font-light text-gray-600 text-lg mt-12">
              Dr. Emmanuel Taiwo is an education leader and consultant with over
              15 years of dedicated experience promoting excellence and equity
              in education for all students. He possesses a broad range of
              expertise, including special education, inclusive education,
              teaching multilingual learners, culturally sustaining pedagogy,
              Multi-Tiered System of Supports (MTSS), behavior supports and
              interventions, differentiated instruction, Universal Design for
              Learning (UDL), school leadership, and compliance. Having worked
              in both K–12 and higher education settings, Dr. Taiwo is deeply
              committed to empowering stakeholders in education to achieve
              equitable learning outcomes for all students, with a focus on
              driving systemic change and creating opportunities for all
              students to flourish.
              <Link to="/aboutMore/#founder">
                <button className="block bg-white px-4 mt-6 py-2bg-white px-4 mt-6 py-2 border-lg border border-blue-500 rounded-lg md:rounded-xl text-blue-500 hover:bg-white hover:text-blue-400">
                  More About Dr. Emmanuel &rarr;
                </button>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Founder;

import { Link } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";
const AboutMore = () => {
  return (
    <>
    <Navbar/>
      <section
        id="about"
        className="bg-gray-200 text-white lg:mt-0 md:px-32 px-10 pt-10 pb-10"
      >
        <div className="lg:mx-20 px-20 py-10 bg-white shadow-md">
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
          <div className="">

          <p className="lg:text-xl text-gray-600 mt-6">
            <span className="font-bold">Equity:</span> We recognize that
            systemic barriers exist in education, and we strive to address these
            inequities through our services. We believe every student deserves
            access to a high-quality education, regardless of background or
            circumstances.
          </p>
          <p className="lg:text-xl text-gray-600 mt-6">
            <span className="font-bold">EquityCollaborative Partnership:</span>{" "}
            We value collaborative partnerships with our clients. We work
            closely with our clients to understand their unique needs and goals,
            and we partner with them to develop effective solutions that improve
            educational outcomes.
          </p>
          <p className="lg:text-xl text-gray-600 mt-6">
            <span className="font-bold">EquityEvidence-Based Practices:</span>{" "}
            We stay up-to-date with the latest research and best practices in
            education and use this knowledge to inform our services. We believe
            that evidence-based practices are essential to achieving the best
            outcomes for students.
          </p>
          <p className="lg:text-xl text-gray-600 mt-6">
            <span className="font-bold">Equity Innovation:</span> We believe
            that new ideas and approaches can drive positive change in
            education, and our team thinks outside the box and develop
            innovative solutions to complex challenges. We believe that through
            innovation, we can improve educational outcomes and make a positive
            impact on students' lives.
          </p>
        </div>
        </div>


      </section>
      <Footer/>
    </>
  );
};

export default AboutMore;

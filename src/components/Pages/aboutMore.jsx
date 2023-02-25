import { Link } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";
import DrTaiwo from "./drTaiwo.jpeg";
const AboutMore = () => {
  return (
    <>
      <Navbar />
      <section
        id="about"
        className="bg-gray-200 text-white lg:mt-0 md:px-32 px-2 pt-10 pb-10"
      >
        <div className="lg:mx-20 px-10 py-10 bg-white shadow-md">
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
              systemic barriers exist in education, and we strive to address
              these inequities through our services. We believe every student
              deserves access to a high-quality education, regardless of
              background or circumstances.
            </p>
            <p className="lg:text-xl text-gray-600 mt-6">
              <span className="font-bold">
                Collaborative Partnership:
              </span>{" "}
              We value collaborative partnerships with our clients. We work
              closely with our clients to understand their unique needs and
              goals, and we partner with them to develop effective solutions
              that improve educational outcomes.
            </p>
            <p className="lg:text-xl text-gray-600 mt-6">
              <span className="font-bold">Evidence-Based Practices:</span>{" "}
              We stay up-to-date with the latest research and best practices in
              education and use this knowledge to inform our services. We
              believe that evidence-based practices are essential to achieving
              the best outcomes for students.
            </p>
            <p className="lg:text-xl text-gray-600 mt-6">
              <span className="font-bold">Innovation:</span> We believe
              that new ideas and approaches can drive positive change in
              education, and our team thinks outside the box and develop
              innovative solutions to complex challenges. We believe that
              through innovation, we can improve educational outcomes and make a
              positive impact on students' lives.
            </p>
            <h2 id="#founder" className="text-gray-800 text-3xl mb-2 mt-12  text-start">
              The <span className="underline ">Founder</span>
            </h2>
            <div className="lg:col-span-1 lg:mt-0">
              <img
                src={DrTaiwo}
                alt="Founders Image"
                className="h-fill w-fill mt-12"
              />
            </div>
            <div className="">
              <p className="md:text-xl font-light text-gray-600 text-lg mt-4">
                Dr. Emmanuel Taiwo is an education leader and consultant with
                over 17 years of dedicated experience promoting excellence and
                equity in education for all students. He possesses a broad range
                of expertise, including special education, inclusive education,
                teaching multilingual learners, culturally sustaining pedagogy,
                Multi-Tiered System of Supports (MTSS), behavior supports and
                interventions, differentiated instruction, Universal Design for
                Learning (UDL), school leadership, and compliance. Having worked
                in both K–12 and higher education settings, Dr. Taiwo is deeply
                committed to empowering stakeholders in education to achieve
                equitable learning outcomes for all students, with a focus on
                driving systemic change and creating opportunities for all
                students to flourish. As a passionate advocate for inclusive
                education, Dr. Taiwo has made significant contributions to the
                field through his research, publications, and numerous
                presentations at national and international conferences. He is a
                member of several professional organizations and holds a
                doctorate in Special Education from John Hopkins University,
                Baltimore, USA.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="founder"
        className="text-white lg:mt-6 lg:px-32 px-10  pb-10"
      >
        <div className="lg:grid lg:grid-cols-2 gap-6 md:flex items-center "></div>
      </section>
      <Footer />
    </>
  );
};

export default AboutMore;

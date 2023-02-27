import Navbar from "../navbar";
import Footer from "../footer";
import ComponetImage from "./cpmponents.jpg";
const BuidingComponents = () => {
  return (
    <>
      <Navbar />
      <div className="md:px-32 md:pb-10 md:pt-10 pt-28 pb-12 px-6 bg-white h-fit">
        <h1 className="text-center text-orange-400 uppercase font-medium text-4xl">
          Services
        </h1>
        <h1 className="font-bold text-center text-3xl my-6 text-blue-500">
          Building Components
        </h1>

        <div className="grid grid-cols-2 gap-20">
          <div className="col-span-1">
            <p className="block my-6">
              <span className="font-bold block">
                Professional Learning Opportunities for Instructional Staff:
              </span>
              For instructional staff to create nurturing learning experiences
              for students, they require continuous professional learning
              opportunities tailored to their specific needs and roles. Research
              has established that effective professional development for
              educators can improve student learning outcomes, with some studies
              showing gains of up to 21 percentile points. Teachers in the
              United States spend an average of 89 hours per year on
              professional development. However, many teachers reported feeling
              unsatisfied with the quality and relevance of the training they
              received.{" "}
              <a
                href="https://s3.amazonaws.com/edtech-production/reports/Gates-PDMarketResearch-Dec5.pdf "
                className="text-blue-600"
              >
                According to a survey conducted by the Bill and Melinda Gates
                Foundation, only 29% of teachers were very satisfied with the
                professional development they received.{" "}
              </a>
              This suggests a gap between the types of professional development
              opportunities offered and what teachers need to improve their
              effectiveness in the classroom. To address this issue, we ensure
              that our professional development offerings are grounded in
              research and are designed to be relevant, differentiated,
              engaging, and effective.
            </p>

            <p className="block my-6">
              <span className="font-bold block">
                Leadership Support and Coaching:
              </span>
              Leadership coaching for school administration is becoming
              increasingly important as schools face a range of complex
              challenges and shifting educational landscapes. To this end,
              school administrators require professional learning opportunities
              in leading equitable schools that ensure all students have access
              to high-quality education. This included meeting the needs of
              students with disabilities, leading schools to support diverse
              learners, equitably serving all students, and meeting the needs of
              English learners. Unfortunately, while the evidence points to the
              efficacy of coaching support for school administration, fewer than
              one quarter (23%) of principals reported having a mentor or coach
              in the past 2 years—and this percentage was lower for principals
              in high-poverty schools (10%),{" "}
              <a
                href="https://learningpolicyinstitute.org/product/elementary-school-principals-professional-learning-report"
                className="text-blue-600"
              >
                {" "}
                according to a study conducted by the National Association of
                Elementary School Principals (NAESP) and the Learning Policy
                Institute (LPI).
              </a>
              EdSpring Solutions can provide valuable support and coaching to
              school leaders as they work to create equitable learning outcomes
              for all students.
            </p>
          </div>
          <div className="col-span-1">
            <img
              src="https://img.freepik.com/free-photo/still-life-graphics-arrangement_23-2148991190.jpg?w=360&t=st=1677497151~exp=1677497751~hmac=7748304d4db9cbff7aae0bd14c5a0b854117b1e1be6868d6f98e415ff9240b4e"
              alt=""
            />
            
            <p className="text-xs text-gray-500 opacity-40">
              Image by{" "}
              <a href="https://www.freepik.com/free-photo/still-life-graphics-arrangement_14959280.htm#query=growth&position=3&from_view=search&track=sph">
                Freepik
              </a>
            </p>
          </div>
        </div>

        <p className="block my-6">
          <span className="font-bold block text-xl text-center">
            Components of High Quality Principal Professional Learning
          </span>
        </p>

        <div className="flex justify-center">
          <img src={ComponetImage} alt="" />
        </div>
        <p className="font-medium text-gray-500 mt-2">
          Source: Learning Policy Institute.
        </p>

        <div className="my-6  bg-gray-100 mx-0 p-12">
          <h1 className="text-2xl my-4 font-bold text-center">
            Training and Coaching Offerings{" "}
          </h1>
          <div className="lg:grid md:grid-cols-3 gap-4 my-12">
            <div className="col-span-2">
              <h1 className="font-medium text-lg mt-4">
                Our professional learning opportunities are delivered through a
                variety of formats:
              </h1>
              <h1 className="font-bold text-lg mt-4">&rarr; Training</h1>
              <ul className="list-decimal">
                <li>On-site professional development sessions</li>
                <li>
                  Online courses: Self-paced, on-demand learning opportunities
                  that you can access anytime
                </li>
                <li>
                  Live or recorded training sessions and workshops facilitated
                  by an EdSpring Solutions specialist
                </li>
              </ul>

              <h1 className="font-bold text-lg mt-4">&rarr; Coaching</h1>
              <ul className="list-decimal">
                <li>
                  In-person and virtual instructional practice-based coaching
                </li>
                <li>In-person and virtual leadership support and coaching </li>
              </ul>
            </div>
            <div className="col-span-1 md:mt-0 mt-6 ">
              <div className="bg-[#ead1dc] px-12 py-10  ">
                <ul className="list-disc">
                  <li>Educators</li>
                  <li>School Administrators</li>
                  <li>Service Providers</li>
                  <li>Paraprofessionalss</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:grid grid-cols-2 gap-4">
          <div className="my-6 col-span-1 ">
            <h1 className="text-xl uppercase mb-4 font-bold">
              EdSpring Solutions professional learning offerings are designed to
              be:
            </h1>
            <ul className="my-6">
              <li className="my-2">&rarr; Relevant</li>
              <li className="my-2">&rarr; Engaging</li>
              <li className="my-2">&rarr; Coherent</li>
              <li className="my-2">&rarr; Targeted</li>
              <li className="my-2">&rarr; Data-driven</li>
              <li className="my-2">&rarr; Differentiated</li>
              <li className="my-2">&rarr; Collaborative</li>
            </ul>
          </div>

          <div className="my-6 col-span-1 ">
            <h1 className="text-xl uppercase mb-4 font-bold">Focus Areas</h1>
            <ul className="my-6">
              <li className="my-2">
                &rarr; Special Education Support and Services
              </li>
              <li className="my-2">
                &rarr; English Learners (Multilingual Learners)
              </li>
              <li className="my-2">&rarr; Inclusion and Inclusive Practices</li>
              <li className="my-2">&rarr; Classroom Management</li>
              <li className="my-2">
                &rarr; Evidence-Based Behavior Interventions
              </li>
              <li className="my-2">
                &rarr; Multi-Tiered System of Supports (MTSS)
              </li>
              <li className="my-2">&rarr; Differentiated Instruction</li>
              <li className="my-2">
                &rarr; Universal Design for Learning (UDL)
              </li>
              <li className="my-2">&rarr; Trauma-Informed Teaching</li>
              <li className="my-2">
                &rarr; Culturally Responsive and Sustaining Education
              </li>
              <li className="my-2">&rarr; Co-Teaching and Collaboration </li>
              <li className="my-2">&rarr; Social-Emotional Learning (SEL)</li>
              <li className="my-2">&rarr; Early Childhood Education</li>
              <li className="my-2">&rarr; Technology Integration </li>
              <li className="my-2">&rarr; Special Education Compliance </li>
              <li className="my-2">&rarr; Section 504 Compliance </li>
              <li className="my-2">&rarr; English Learners (EL) Compliance </li>
              <li className="my-2">&rarr; Parent Engagement </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BuidingComponents;

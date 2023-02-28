import Navbar from "../navbar";
import Footer from "../footer";

const SpecialEducation = () => {
  return (
    <>
      <Navbar />
      <div className="md:px-32 md:pb-10 md:pt-10 pt-28 pb-12 px-6 bg-white h-fit">
        <h1 className="text-center text-orange-400 uppercase font-medium text-2xl">
          Services
        </h1>
        <h1 className="font-bold text-center text-3xl my-6 text-blue-500">
          Special Education Advocacy for Families
        </h1>

        <div className="lg:grid md:grid-cols-3 gap-4 my-12">
          <div className="col-span-2">
            <p className="my-6">
              Navigating the special education process can be overwhelming and
              challenging for parents and caregivers of children with special
              needs. In a study conducted by the National Center for Learning
              Disabilities, over 90% of parents reported that they face
              challenges in understanding the special education process,
              including how to advocate for their child's needs and how to work
              effectively with school personnel. At EdSpring Solutions, we are
              committed to empowering parents with information and support they
              need to effectively advocate for their children.
            </p>

            <p className="my-6">
              Our consultants work with families to help them understand their
              rights under IDEA and provide guidance on issues such as obtaining
              evaluations and assessments, developing effective IEPs, attending
              IEP meetings, addressing behavioral concerns, and so on.
            </p>
          </div>
          <div className="col-span-1 md:mt-0 mt-6 ">
            <div className="bg-[#ead1dc] px-12 py-10  ">
              <p>
                Some common challenges that parents and caregivers may face
                include:
              </p>
              <ul className="list-disc">
                <li>
                  Understanding their rights under federal and state laws
                  governing special education{" "}
                </li>
                <li>
                  Navigating the eligibility process for special education
                  services{" "}
                </li>
                <li>
                  Understanding the various types of services and supports
                  available to their child
                </li>
                <li>
                  Communicating effectively with teachers and other school staff
                  about their child's needs and progress
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpecialEducation;

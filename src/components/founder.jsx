import DrTaiwo from "../assets/portfolios/drTaiwo.jpeg";

const Founder = () => {
  return (
    <>
      <section
        id="founder"
        className="text-white lg:mt-6 lg:px-32 px-10  pb-10"
      >
        <h2 className="text-gray-800 text-4xl mb-6  text-start">
          Meet the <span className="underline my-3 ">Founder</span>
        </h2>
        <div className="lg:grid lg:grid-cols-2 gap-6 md:flex items-center ">
          <div className="lg:col-span-1 lg:mt-0">
            <img src={DrTaiwo} alt="Founders Image" className="h-full w-full" />
          </div>
          <div className="lg:col-span-1 lg:mt-10">
            <p className="md:text-xl  text-gray-600 text-lg mt-12">
              Dr. Emmanuel Taiwo is an education leader and consultant with over
              17 years of dedicated experience promoting excellence and equity
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
              students to flourish. As a passionate advocate for inclusive
              education, Dr. Taiwo has made significant contributions to the
              field through his research, publications, and numerous
              presentations at national and international conferences. He is a
              member of several professional organizations and holds a doctorate
              in Special Education from John Hopkins University, Baltimore, USA.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Founder;

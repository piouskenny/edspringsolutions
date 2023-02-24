const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-white text-white lg:mt-6 md:px-32 px-10 pt-20 pb-10"
      >
        <div className="lg:mx-40">
          <h1 className="text-2xl text-center text-gray-800 font-semibold">
            About EdSpring Solutions
          </h1>
          <p className="md:text-md text-gray-600 mt-4">
            At EdSpring Solutions, we utilize evidence-based practices and
            solution-oriented approaches in promoting high-quality education for
            all students through our educational service. Our team is commited
            to staying up-to-date with the latest research and best practices in
            education, and we integrate this knowledge into our work with
            clients to achieve the desired results.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 ">
          <div className="lg:col-span-1">
            <img
              src="https://img.freepik.com/free-vector/strategic-consulting-concept-illustration_114360-9336.jpg?w=740&t=st=1677107782~exp=1677108382~hmac=281c074b11e168b7e15b3b8613bc9ac6cdc4f93c480d29ff93fc1b5b6871e5ea"
              alt="Image PlaceHolder"
            />
          </div>
          <div className="lg:col-span-1 lg:mt-10">
            <h2 className="text-gray-800 font-bold text-lg"></h2>
            <p className="lg:text-lg text-gray-600 mt-1">
              <span className="font-bold">Equity:</span> We recognize that
              systemic barriers exist in education, and we strive to address
              these inequities through our services. We believe every student
              deserves access to a high-quality education, regardless of
              background or circumstances.
            </p>
            <p className="lg:text-lg text-gray-600 mt-6">
              <span className="font-bold">
                EquityCollaborative Partnership:
              </span>{" "}
              We value collaborative partnerships with our clients. We work
              closely with our clients to understand their unique needs and
              goals, and we partner with them to develop effective solutions
              that improve educational outcomes.
            </p>
            <p className="lg:text-lg text-gray-600 mt-6">
              <span className="font-bold">EquityEvidence-Based Practices:</span>{" "}
              We stay up-to-date with the latest research and best practices in
              education and use this knowledge to inform our services. We
              believe that evidence-based practices are essential to achieving
              the best outcomes for students.
            </p>
            <p className="lg:text-lg text-gray-600 mt-6">
              <span className="font-bold">Equity Innovation:</span> We believe
              that new ideas and approaches can drive positive change in
              education, and our team thinks outside the box and develop
              innovative solutions to complex challenges. We believe that
              through innovation, we can improve educational outcomes and make a
              positive impact on students' lives.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

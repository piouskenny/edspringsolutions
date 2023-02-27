import { Link } from "react-router-dom";
import Planning from "../assets/img/point-papar.jpg";
import Building from "../assets/img/book-bible.jpg";
import bgCard from "../assets/img/classroom-close.jpg";

// const servicesItems = [
//   {
//     title: "Capacity Building",
//     image:
//       `${Building}`,
//     link: "/buildingComponents",
//   },
//   {
//     title: "System & Program Planning",
//     image:
//       `${Planning}`,
//     link: "/systemandprogramPlanning",
//   },
//   {
//     title: "Special Education Advocacy for Families",
//     image:
//       "https://img.freepik.com/free-photo/cute-family-playing-summer-field_1157-37659.jpg?w=740&t=st=1677317372~exp=1677317972~hmac=6646a52f23f58b41a757df212e9c8325575ead339b6dead2e2b2b38c30bde67e",
//     link: "/specialeducation",
//   },
//   {
//     title: "Special Education and Section 504 Compliance",
//     image:
//       "https://img.freepik.com/free-photo/multiethnic-team-people-working-call-center-office-using-audio-headset-telecommunications-help-clients-people-answering-call-phone-helpline-giving-assistance-workstation_482257-41880.jpg?w=900&t=st=1677317508~exp=1677318108~hmac=0f79a1676fdd1c43272d572e937a80828758483066ad8d880e445a246e082afc",
//     link: "/specialeducation504",
//   },
// ];

// const ServiceCard = ({ title, image, link }) => (
//   <div className="max-w-sm rounded overflow-hidden shadow-lg">
//     <img className="w-full" src={image} alt={title} />
//     <div className="px-6 py-4">
//       <div className="font-bold text-xl text-blue-500 my-5 ">{title}</div>
//       <Link
//         to={link}
//         target="_parent"
//         className="text-sm bg-white px-4 py-2 border-lg border border-green-500 rounded-lg md:rounded-xl text-green-500 hover:bg-white hover:text-orange-400"
//       >
//         Read More &rarr;
//       </Link>
//     </div>
//   </div>
// );

const Services = () => {
  return (
    <>
      <section
        id="services"
        className="text-white md:px-28 w-full md:py-10 px-4 pt-20 pb-10 bg-opacity-60"
        style={{
          backgroundImage: `url(${bgCard})`,
          backgroundBlendMode: "overlay",
          // backgroundColor: "rgba(0, 0, 139, 0.5)",
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-blue-500 text-center font-bold text-4xl mb-6">
          Services
        </h1>

        {/* <div className="container mx-auto md:grid my-10 md:grid-cols-4 grid-rows-auto gap-4 ">
          
          {servicesItems.map((service) => (
            <div key={service.title}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div> */}

        
        <div className="lg:grid lg:grid-cols-4 lg:gap-4 md:grid md:grid-cols-2 md:gap-6 ">
          <div className="w-full md:w-fit p-4 md:col-span-1 lg:col-span-1">
            <div className="bg-white shadow-xl  rounded-lg overflow-hidden">
              <img
                className="w-screen h-full object-cover object-center"
                src={Building}
                alt="Partner 1"
              />
              <div className="p-4 mb-2">
                <h1 className="font-bold md:py-2  text-blue-500 my-1  mb-6 md:mb-0">
                Building Components
                </h1>
                <Link
                  to="/buildingComponents"
                  target="_parent"
                  className="text-sm bg-white px-4 py-2 border-lg border border-green-500 rounded-lg md:rounded-xl  text-green-500 hover:bg-white hover:text-orange-400"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-fit p-4 md:col-span-1 lg:col-span-1">
            <div className="bg-white shadow-xl  rounded-lg overflow-hidden">
              <img
                className="w-screen h-full object-cover object-center"
                src={Planning}
                alt="Partner 1"
              />
              <div className="p-4">
                <h1 className="font-bold md:py-2  text-blue-500 mb-6 md:mb-0">
                  System & Program Planning
                </h1>

                <Link
                  to="/systemandprogramPlanning"
                  target="_parent"
                  className="text-sm bg-white px-4 py-2 border-lg border border-green-500 rounded-lg md:rounded-xl  text-green-500 hover:bg-white hover:text-orange-400"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-fit p-4 md:col-span-1 lg:col-span-1">
            <div className="bg-white shadow-xl  rounded-lg overflow-hidden">
              <img
                className="w-screen h-full object-cover object-center"
                src="https://img.freepik.com/free-photo/cute-family-playing-summer-field_1157-37659.jpg?w=740&t=st=1677317372~exp=1677317972~hmac=6646a52f23f58b41a757df212e9c8325575ead339b6dead2e2b2b38c30bde67e"
                alt="Partner 1"
              />
              <div className="p-4">
                <h1 className="font-bold md:py-2  text-blue-500  mb-6 md:mb-0">
                  Special Education Advocacy for Families
                </h1>
                <Link
                  to="/specialeducation"
                  target="_parent"
                  className="text-sm bg-white px-4 py-2 border-lg border border-green-500 rounded-lg md:rounded-xl  text-green-500 hover:bg-white hover:text-orange-400"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-fit p-4 md:col-span-1 lg:col-span-1">
            <div className="bg-white shadow-xl  rounded-lg overflow-hidden">
              <img
                className="w-screen h-full object-cover object-center"
                src=" https://img.freepik.com/free-photo/multiethnic-team-people-working-call-center-office-using-audio-headset-telecommunications-help-clients-people-answering-call-phone-helpline-giving-assistance-workstation_482257-41880.jpg?w=900&t=st=1677317508~exp=1677318108~hmac=0f79a1676fdd1c43272d572e937a80828758483066ad8d880e445a246e082afc"
                alt="Partner 1"
              />
              <div className="p-4">
                <h1 className="font-bold md:py-2 mt-6 text-blue-500  mb-6 md:mb-0">
                  Special Education and Section 504 Compliance
                </h1>
                <Link
                  to="/specialeducation504"
                  className="text-sm bg-white px-4 py-2 border-lg border border-green-500 rounded-lg md:rounded-xl  text-green-500 hover:bg-white hover:text-orange-400"
                >
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

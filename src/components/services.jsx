import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section
        id="services"
        className="text-white md:px-28 w-full md:py-10 px-4 pt-20 pb-10"
      >
        <h1 className="text-blue-500 text-center font-bold text-4xl mb-6">
          Services
        </h1>

        <div className="lg:grid lg:grid-cols-4 lg:gap-4 md:grid md:grid-cols-2 md:gap-6  ">
          <div className="w-full md:w-fit p-4 md:col-span-1 lg:col-span-1">
            <div className="bg-white shadow-xl  rounded-lg overflow-hidden">
              <img
                className="w-screen h-full object-cover object-center"
                src="https://mail.google.com/mail/u/0?ui=2&ik=5c3abbead2&attid=0.4&permmsgid=msg-f:1758866084248837250&th=1868bf627f225c82&view=fimg&disp=thd&attbid=ANGjdJ_HzDpVFdJTjwT-b_nPyPmIDxt_xiLBAWlu4Vvym6mu2U1DQF16WPbmWTZ6z3lYTdC2Tfnh0sQk3hBfx_x8_T8d_7Oy9lFx1ZIY3qtaoh5xwNoDEBk6Eia0UH8&ats=2524608000000&sz=w1364-h608"
                alt="Partner 1"
              />
              <div className="p-4 mb-4">
                <h1 className="font-bold md:py-2  text-gray-900 my-1">
                  Capacity Building
                </h1>
                <br />
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
                src="https://mail.google.com/mail/u/0?ui=2&ik=5c3abbead2&attid=0.5&permmsgid=msg-f:1758866084248837250&th=1868bf627f225c82&view=fimg&disp=thd&attbid=ANGjdJ8Hpim54G911rDSZrm8JhMtmBCkSvcPshAcTM7WNId6UbPJV75KTQIYUKq8KfumwCVQ588tG06kNfzrUZ-1Ptr9WetKqFyyHr24hFds7DLFrORK7_doKgJbeu0&ats=2524608000000&sz=w1364-h665"
                alt="Partner 1"
              />
              <div className="p-4">
                <h1 className="font-bold md:py-2 mb-6 text-gray-900">
                  System & Program Planning
                </h1>

                <br />
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
                <h1 className="font-bold md:py-2  text-gray-900">
                  Special Education Advocacy for Families
                </h1>
                <br />
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
                <h1 className="font-bold md:py-2  text-gray-900">
                  Special Education and Section 504 Compliance
                </h1>
                <br />
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

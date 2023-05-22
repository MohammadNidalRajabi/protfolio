import React from "react";
import frontend from "../../assets/images/front-end.png";
const Services = () => {
  return (
    <section className="h-full" id="services">
      <div className="contianer lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            What do I help
          </h2>

          <p
            data-aos="fade-left"
            data-aos-duration="1500"
            className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7 "
          >
           I am developing and implementing a responsive and mobile-friendly user interface for your web application. Using React.js and related technologies, I will create clean, efficient, maintainable, well-structured, and easy-to-understand code.
          </p>
        </div>
        {/*//////*/}
        <div className="flex flex-col justify-center  sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/** vertical line running through the middle */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full right-1/2 transform -translate-x-2/2"></div>

              {/**right card */}
              <div className="mt-6 sm:MT-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group  hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Fontend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          Develop and implement the user interface of the web
                          application so that the application is responsive and
                          mobile-friendly.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontend} alt="" />
                    </figure>
                  </div>
                </div>
                <div></div>
              </div>

              {/**left card */}
              <div className="mt-6 sm:MT-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group  hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Fontend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          Clean, efficient, and maintainable code using React.js
                          and related technologies, such as JSX, CSS, and
                          JavaScript, well structured and easy to understand, so
                          that it can be maintained and scaled over time.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontend} alt="" />
                    </figure>
                  </div>
                </div>
                <div></div>
              </div>

              {/**left card */}
              <div className="mt-6 sm:MT-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group  hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl">
                          Fontend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]">
                          Thorough testing to ensure that the web application is
                          free of bugs and runs smoothly, and responsible for
                          fixing any bugs that arise during development. <br/> Ability
                          to communicate effectively with both technical and
                          non-technical stakeholders.<br/> Responsive to feedback and
                          changes in requirements.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontend} alt="" />
                    </figure>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

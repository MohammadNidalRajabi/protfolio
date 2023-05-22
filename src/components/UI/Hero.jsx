import React from "react";
import heroImg from "../../assets/images/NR.png";
import CountUp from "react-countup";
const Hero = () => {
  return (
    <section
      data-aos="fade-left"
      data-aos-duration="1200"
      className="w-full pt-0 mt-20"
      id="about"
    >
      <div className="container pt-1">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row ">
          {/**=========== hero left content =========== */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8 rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I,m Mohammad NR <br />
              Front End developer using React js
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button onClick={() => {
                  const recipient = "mohammadworkrajbe.ps@gmail.com";
                  const subject = "";
                  const body = "";

                  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

                  window.open(url);
                }} className="bg-primaryColor text-white font-[500] flex items-center gap-5 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  {" "}
                  <i className="ri-mail-line"> Hire me</i>{" "}
                </button>
              </a>
              <a
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
                href="#portgolio"
              >
                See Portfolio
              </a>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <p
                data-aos="fade-left"
                data-aos-duration="1500"
                className="flex gap-2 text-headingColor font-[500] mt-10 text-[500] leading-7 sm:pl-14 sm:pr-10"
              >
                <span>
                  <i className="ri-apps-2-line"></i>
                </span>
                I am developing and implementing a responsive and
                mobile-friendly user interface for your web application. Using
                React.js and related technologies, I will create clean,
                efficient, maintainable, well-structured, and easy-to-understand
                code.<br />  testing will be performed to ensure a bug-free and
                smooth-running application.<br /> I am committed to effective
                communication with technical and non-technical stakeholders,
                remaining responsive to feedback and adaptable to changes in
                requirements.
              </p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-9 mt-14"
            >
              <span className="text-smallTextColor text-[18px] font-[600]">
                Follow me:
              </span>
              <span className="text-smallTextColor text-[25px] font-[600]">
                <a href="https://www.linkedin.com/in/moahammad-rajbe-856343245/">
                  <i className="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span className="text-smallTextColor text-[25px] font-[600] ">
                <a href="https://github.com/MohammadNidalRajabi?tab=repositories">
                  <i className="ri-github-line"></i>
                </a>
              </span>
              <span className="text-smallTextColor text-[25px] font-[600] ">
              <a
                  href="https://api.whatsapp.com/send/?phone=970597235743"
                >
                  <i class="ri-whatsapp-line"></i>
                </a>
              </span>
            </div>
          </div>
          {/**=========== hero left end ============= */}
          {/**=========== hero img ============= */}
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="basis-1/3 mt-10 sm:mt-0"
          >
            <figure>
              <img src={heroImg} alt="" />
            </figure>
          </div>
          {/**=========== hero img end ============= */}
          {/**=========== hero content right ============= */}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={1} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Years of Experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={5} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Happay clients
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={5} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Project Completed
              </h4>
            </div>
          </div>
          {/**=========== hero content right end ============= */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

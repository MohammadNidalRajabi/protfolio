import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#12141e] pt-12">
      {/* footer top*/}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white fotn-[600] mb-5 md:text-[2rem]">
              Do You want to make beautiful products?
            </h2>
            <a href="#contact">
              <button  onClick={() => {
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
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
            If your request is met, please contact me to discuss your project.
            </p>
            <br/>
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
            Phone Number: +972597235743
            </p>
            <br/>
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
            Email: mohammadworkrajbe.ps@gmail.com
            </p>

            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow Me:
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  className="text-gray-400 font-[300] text-[18px] hover:text-white"
                  href="https://www.linkedin.com/in/moahammad-rajbe-856343245/"
                >
                  <i className="ri-linkedin-box-fill"></i>
                </a>
                
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center ">
                <a
                  className="text-gray-400 font-[300] text-[18px] hover:text-white"
                  href="https://github.com/MohammadNidalRajabi?tab=repositories"
                >
                  <i className="ri-github-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center ">
              <a
                  className="text-gray-400 font-[300] text-[18px] hover:text-white"
                  href="https://api.whatsapp.com/send/?phone=970597235743"
                >
                  <i class="ri-whatsapp-line"></i>
                </a>
              </span>
            </div>

          </div>
        </div>
      </div>
      {/* footer top end */}
      {/* footer bottom*/}
      <div className="bg-[#1b1e29] py-3 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center justify-center gap-[10px]">
                <span className="flex items-center justify-center w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-whit font-[500] text-[18px] text-white ">
                   M
                </span>
                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px]">MohammadNR</h2>
                  <p className="text-gray-400 text-[14px] font-[500]">Personal</p>
                </div>
                
              </div>
            </div>
            <p className="text-gray-400 text-[14px ]">Copyright 2023 by MohammadNR - All right reserved.</p>
          </div>
        </div>
        
      </div>
      
    </footer>
  );
};

export default Footer;

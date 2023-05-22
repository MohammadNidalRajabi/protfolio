import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <div data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200" className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">Get in touch</h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
            className="border rounded w-full h-full shadow-2xl "
                title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8308.226779400135!2d35.105295085621805!3d31.532925784530246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502e427ecc463fb%3A0xbe464d5c6a2f134c!2z2KfZhNiu2YTZitmE!5e1!3m2!1sar!2s!4v1684764312370!5m2!1sar!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

            <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
                <form className="w-full">
                <div className="mb-5">
                    <input type="text" placeholder="Enter Your Name" className="w-full p-3 focus:outline-none rounded-[5px]" />
                    
                </div>
                <div className="mb-5">
                    <input type="email" placeholder="Enter Your Email" className="w-full p-3 focus:outline-none rounded-[5px]" />
                    
                </div>
                <div className="mb-5">
                    <input type="text" placeholder="Subject" className="w-full p-3 focus:outline-none rounded-[5px]" />
                    
                </div>
                <div className="mb-5">
                    <textarea rows={3}  type="text" placeholder="Write Your Message" className="w-full p-3 focus:outline-none rounded-[5px]" />
                    
                </div>
                <button className=" text-white w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor  hover:bg-headingColor  text-center ease-linear duration-150">Send Message</button>
                </form>
                
            </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

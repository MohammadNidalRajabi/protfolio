import React, { useEffect, useState } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";
const Protfolio = () => {
    const [nextItems,setNextItem]=useState(6);
    const [portfolios,setPortfolios]=useState(data);
    const [showModle,setShowModle]=useState(false);
    const [activeID,setActiveID]=useState(false);
    const loadMoreHandlaer=()=>{
        setNextItem(nextItems=>nextItems+3);
    };
    const showModalHandler=id=>{
      setShowModle(true);
      setActiveID(id);
    };
    const [selectTab,setSelectTab]=useState("All");
    useEffect(()=>{
         if(selectTab==="All")
         {
            setPortfolios(data);
         }
         if(selectTab==="Web ReactJS")
         {
            const filerDataWeb=data?.filter(item=>item.category==='Web ReactJS')
            setPortfolios(filerDataWeb);
         }
         if(selectTab==="Mobile React Native")
         {
            const filerDataMobile=data?.filter(item=>item.category==='Mobile React Native')
            setPortfolios(filerDataMobile);
         }
    },[selectTab]);
  return (
    <section data-aos="fade-up" data-aos-duration="1200" id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              {" "}
              My recent projects
            </h3>
          </div>
          <div className="flex gap-3">
            <button onClick={()=>setSelectTab("All")} className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
              All
            </button>
            <button onClick={()=>setSelectTab("Web ReactJS")} className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
              Web React JS
            </button>
            <button onClick={()=>setSelectTab("Mobile React Native")} className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
              Mobile React Native
            </button>
          </div>
        </div>

        <div className="flex items-center justify-strat gap-4 flex-wrap mt-12 ">
          {portfolios?.slice(0,nextItems)?.map((item, index) => {
            return (
              <div
                data-aos="fade-zoom"
                data-aos-duration="1200"
                data-aos-delay="50"
                key={index}
                className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
              >
                <figure>
                  <img className="rounded-[8px]" src={item?.imgUrl} alt="" />
                </figure>
                <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                  <div className="w-full h-full flex items-center justify-center">
                    <button onClick={()=>showModalHandler(item?.id)} className="text-white bg-headingColor hover:bg-smallTextColor py-4 px-4 rounded-[8px] font-[500] ease-in duration-200">
                      See Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-6">
            {
                nextItems<portfolios.length && data.length > 6 && (
<button onClick={loadMoreHandlaer} className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200">
            Load More
          </button>
                )
            }
          
        </div>
      </div>
      {
        showModle && <Modal setShowModle={setShowModle} activeID={activeID}/>
      }
    </section>
  );
};

export default Protfolio;

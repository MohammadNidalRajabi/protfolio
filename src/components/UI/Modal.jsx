import React from "react";
import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShowModle }) => {
  const portfolio = portfolios?.find((portfolio) => portfolio?.id === activeID);

  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
      <div className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div>
            <figure>
            <img className="rounded-[8px]" src={portfolio?.imgUrl} alt="" />
            </figure>
        </div>
        <br/>
        <a href={portfolio?.siteUrl} className="bg-primaryColor text-white py-2 px-4 my-10 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">{portfolio?.siteUrl!==1?"Live Site":"Github Site"} </a>
        <div>
            <h2 className="text-2xl text-headingColor font-[700] my-5">{portfolio?.title}</h2>
            <p className="text-[15px] leading-7 text-smallTextColor">{portfolio?.description}</p>
            <div className="mt-5 mb-3 flex items-center gap-3 flex-wrap">
                <h4 className="text-headingColor text-[18px] text-[700]">
                    Technologies:
                </h4>
                {
                    portfolio?.technologies?.map((item,index)=>{
                        return <span key={index} className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-7  cursor-pointer hover:bg-smallTextColor hover:text-white">
                            {item}                            
                        </span>

                    })
                }
                
            </div>
           
        </div>
        <button onClick={()=>setShowModle(false)} className="w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center leading-0 rounded-[3px] cursor-pointer hover:bg-red-600 hover:text-white ">&times;</button>
      </div>
    </div>
  );
};

export default Modal;

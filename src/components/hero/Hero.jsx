
import React from "react";

import cardLogo from "../../assets/Group 71.jpg";
import PhoneCard from "../../assets/Group 33.svg";
import BrainIcon from "../../assets/Group 29.svg";
import DesktopComputerIcon from "../../assets/Group 31.svg";
import PhoneIcon from "../../assets/Vector (3).svg";
import NetworkIcon from "../../assets/Group 32.svg";
import StarIcon from "../../assets/Vector (2).svg";
import  CircleLines  from "../../assets/Group 16.svg";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-[#F5F5F5] overflow-visible">
      <div className="container mx-auto px-4 py-16 md:py-20 flex flex-col-reverse lg:flex-row items-center">
   
        <div className="w-full lg:w-1/2 flex justify-center my-10 lg:mb-0">
            
              <img src={CircleLines} alt="" className=" hidden absolute -top-[150px] -left-[170px] z-0 w-[600px] lg:block opacity-[7%] " />
          
          <div className="relative z-1 bg-white border border-[#D7D4E0] rounded-3xl p-8 shadow-xl max-w-[300px] h-[400px] flex items-center justify-center mt-12">
           
        
           
    
            <div className="flex flex-col items-center justify-center ">
        
              <img src={cardLogo} alt="Teknova Logo" className="mb-4 w-[80%] " />

       
            </div>
           
            <motion.img
    src={PhoneCard}
    className="absolute w-[60px] h-[60px] text-purple-500 -top-9 -left-9"
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  />

  <motion.img
    src={NetworkIcon}
    className="absolute w-[60px] h-[60px] text-purple-500 top-10 -right-10"
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
  />

  <motion.img
    src={BrainIcon}
    className="absolute w-[60px] h-[60px] text-purple-500 bottom-12 -left-10"
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
  />

  <motion.img
    src={DesktopComputerIcon}
    className="absolute w-[60px] h-[60px] text-purple-500 -bottom-9 -right-10"
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
  />
          </div>
        </div>

      
        <div className="w-full lg:w-1/2 text-right">
      

          <div className="inline-flex justify-center items-center w-[216px] h-[58px] bg-[#6161FF] rounded-full my-6">
            
              <p className=" text-white text-[18px] "> شركة رقمية رائدة </p>
              <img src={StarIcon} alt="star-icon" className="ml-3" />
          
          </div>

       
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-normal bg-gradient-to-r from-[#120E23] to-[#7056CC] bg-clip-text text-transparent">
            نبتكر أفضل التقنيات
            <br />
            <span className="text-4xl text-[#8C6AF9] lg:text-[56px] leading-[1.75] ">لنصنع المستقبل الحديث</span>
          </h1>


          <p className="text-sm mt-6 text-[#7B7790] max-w-[737px] sm:text-[18px] leading-relaxed font-medium">
            نحن شركة متخصصة في الحلول البرمجية والتقنية المتقدمة نقدم خبرتنا
            لبناء أنظمة ذكية ومبتكرة تسهم في تطوير أعمال الشركات وتعزيز حضورها
            الرقمي باحترافية واستدامة.
          </p>

   
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
            <button className="border-2 border-[#362963] text-[#362963] hover:bg-[#362963] hover:text-white transition-all  font-medium rounded-full px-6 py-3 flex items-center justify-center cursor-pointer">
              اكتشف خدماتنا
            </button>

            <button className="bg-[#7E60E2] hover:bg-[#9985d8] text-white font-medium rounded-full px-6 py-3 flex items-center justify-center cursor-pointer">
              ابدأ مشروعك الآن
              <img src={PhoneIcon} className="w-5 h-5 ml-1 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

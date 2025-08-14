
// import React from "react";

// import cardLogo from "../../assets/Group 71.jpg";
// import PhoneCard from "../../assets/Group 33.svg";
// import BrainIcon from "../../assets/Group 29.svg";
// import DesktopComputerIcon from "../../assets/Group 31.svg";
// import PhoneIcon from "../../assets/Group 1.svg"
// import NetworkIcon from "../../assets/Group 32.svg";
// import StarIcon from "../../assets/Vector (2).svg";
// import  CircleLines  from "../../assets/Group 16.svg";

// import { motion } from "framer-motion";

// const HeroSection = () => {
//   return (
//     <section className="relative bg-[#F5F5F5] overflow-visible">
//       <div className="container mx-auto mt-10 px-4 py-16 md:py-20 flex flex-col-reverse lg:flex-row items-center">
   
//         <div className="w-full lg:w-[48%] flex justify-center my-10 lg:mb-0">
            
//               <img src={CircleLines} alt="" className=" hidden absolute -top-[175px] -left-[140px] z-0 w-[600px] lg:block opacity-[7%] " />
          
//           <div className="relative z-1 bg-white border border-[#D7D4E0] rounded-3xl p-8 shadow-xl max-w-[300px] h-[400px] flex items-center justify-center mt-12">
           
        
           
    
//             <div className="flex flex-col items-center justify-center ">
        
//               <img src={cardLogo} alt="Teknova Logo" className="mb-4 w-[80%] " />

       
//             </div>
           
//             <motion.img
//     src={PhoneCard}
//     className="absolute w-[60px] h-[60px] text-purple-500 -top-9 -left-9"
//     animate={{ y: [0, -10, 0] }}
//     transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//   />

//   <motion.img
//     src={NetworkIcon}
//     className="absolute w-[60px] h-[60px] text-purple-500 top-10 -right-10"
//     animate={{ y: [0, -10, 0] }}
//     transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
//   />

//   <motion.img
//     src={BrainIcon}
//     className="absolute w-[60px] h-[60px] text-purple-500 bottom-12 -left-10"
//     animate={{ y: [0, -10, 0] }}
//     transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
//   />

//   <motion.img
//     src={DesktopComputerIcon}
//     className="absolute w-[60px] h-[60px] text-purple-500 -bottom-9 -right-10"
//     animate={{ y: [0, -10, 0] }}
//     transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
//   />
//           </div>
//         </div>

      
//         <div className="w-full lg:w-[52%] text-right lg:mr-14">
      

//           <div className="inline-flex justify-center items-center px-5 py-3 bg-[#6161FF] rounded-full my-6">
            
//               <p className=" text-white text-[18px] "> شركة رقمية رائدة </p>
//               <img src={StarIcon} alt="star-icon" className="ml-3" />
          
//           </div>

//        <div className="flex flex-col items-end">
//           <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-normal bg-gradient-to-r from-[#120E23] to-[#7056CC] bg-clip-text text-transparent">
//             نبتكر أفضل التقنيات
//             <br />
//             <span className="text-4xl text-[#8C6AF9] lg:text-[48px] leading-[1.75] ">لنصنع المستقبل الحديث</span>
//           </h1>


//           <p dir="rtl" className="text-sm mt-12 text-[#7B7790] max-w-[537px] sm:text-[18px] leading-[1.75] font-medium">
//             نحن شركة متخصصة في الحلول البرمجية والتقنية المتقدمة, نقدم خبراتنا
//             لبناء أنظمة ذكية ومبتكرة تسهم في تطوير أعمال الشركات وتعزيز حضورها
//             الرقمي باحترافية واستدامة.
//           </p>

//    </div>
//           <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
//             <button className="border-2 border-[#362963] text-[#362963] hover:bg-[#362963] hover:text-white transition-all  font-medium rounded-full px-6 py-3 flex items-center justify-center cursor-pointer">
//               اكتشف خدماتنا
//             </button>

//             <button className="bg-[#7E60E2] hover:bg-[#53419E] transition-all text-white font-medium rounded-full px-6 py-3 flex items-center justify-center cursor-pointer">
//               ابدأ مشروعك الآن
//               <img src={PhoneIcon} className="w-5 h-5 ml-1 text-white" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React from "react";
import cardLogo from "../../assets/Group 71.jpg";
import PhoneCard from "../../assets/Group 33.svg";
import BrainIcon from "../../assets/Group 29.svg";
import DesktopComputerIcon from "../../assets/Group 31.svg";
import PhoneIcon from "../../assets/Group 1.svg";
import NetworkIcon from "../../assets/Group 32.svg";
import StarIcon from "../../assets/Vector (2).svg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-visible">
      <div className="w-[90%] mx-auto mt-10 px-4 sm:px-6 lg:px-9 py-16 md:py-20 flex flex-col-reverse lg:flex-row items-center lg:justify-between">
        <div className="w-full lg:w-[48%] flex justify-center my-10 lg:mb-0">
          <div className="relative z-40 bg-white border border-[#D7D4E0] rounded-3xl p-8 shadow-xl  sm:max-w-[300px] sm:h-[400px] flex items-center justify-center mt-12">
            <div className="flex flex-col items-center justify-center">
              <img src={cardLogo} alt="Teknova Logo" className="mb-4 w-[80%]" />
            </div>
           
            <motion.img src={PhoneCard} className="absolute w-[60px] h-[60px] text-purple-500 -top-9 -left-9" animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
            <motion.img src={NetworkIcon} className="absolute w-[60px] h-[60px] text-purple-500 top-10 -right-10" animate={{ y: [0, -10, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} />
            <motion.img src={BrainIcon} className="absolute w-[60px] h-[60px] text-purple-500 bottom-12 -left-10" animate={{ y: [0, -10, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }} />
            <motion.img src={DesktopComputerIcon} className="absolute w-[60px] h-[60px] text-purple-500 -bottom-9 -right-10" animate={{ y: [0, -10, 0] }} transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }} />
          </div>
        </div>

        <div className="w-full lg:w-[52%] text-right">
          <div className="inline-flex justify-center items-center px-5 py-3 bg-[#6161FF] rounded-full my-6">
            <p className="text-white text-[18px]"> شركة رقمية رائدة </p>
            <img src={StarIcon} alt="star-icon" className="ml-3" />
          </div>

          <div className="flex flex-col items-end">
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-normal bg-gradient-to-r from-[#120E23] to-[#7056CC] bg-clip-text text-transparent">
              نبتكر أفضل التقنيات
              <br />
              <span className="text-4xl text-[#8C6AF9] lg:text-[48px] leading-[1.75]">لنصنع المستقبل الحديث</span>
            </h1>

            <p dir="rtl" className="text-sm mt-12 text-[#7B7790] max-w-[537px] sm:text-[18px] leading-[1.75] font-medium">
              نحن شركة متخصصة في الحلول البرمجية والتقنية المتقدمة, نقدم خبراتنا
              لبناء أنظمة ذكية ومبتكرة تسهم في تطوير أعمال الشركات وتعزيز حضورها
              الرقمي باحترافية واستدامة.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
            <button className="border-2 border-[#362963] text-[#362963] hover:bg-[#362963] hover:text-white transition-all font-medium rounded-full px-6 py-3 flex items-center justify-center cursor-pointer">
              اكتشف خدماتنا
            </button>
            <button className="bg-[#7E60E2] hover:bg-[#53419E] transition-all text-white font-medium rounded-full px-6 py-3 flex items-center justify-center cursor-pointer">
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

// import React from "react";
// import cardLogo from "../../assets/Group 71.jpg";
// import PhoneCard from "../../assets/Group 33.svg";
// import BrainIcon from "../../assets/Group 29.svg";
// import DesktopComputerIcon from "../../assets/Group 31.svg";
// import PhoneIcon from "../../assets/Group 1.svg";
// import NetworkIcon from "../../assets/Group 32.svg";
// import StarIcon from "../../assets/Vector (2).svg";
// import CircleLines from "../../assets/Group 16.svg";
// import { motion } from "framer-motion";

// const HeroSection = () => {
//   return (
   
//     <section className="relative bg-white overflow-hidden">
      
    
//       <div
//         aria-hidden="true"
//         className="absolute top-[-10rem] left-[-15rem] z-0 w-[40rem] h-[40rem] bg-purple-200/40 rounded-full blur-[150px]"
//       />
//       <div
//         aria-hidden="true"
//         className="absolute top-[10rem] left-[0rem] z-0 w-[35rem] h-[35rem] bg-indigo-200/30 rounded-full blur-[150px]"
//       />

    
//       <div className="relative z-10 w-[90%] mx-auto mt-10 px-4 sm:px-6 lg:px-9 py-16 md:py-20 flex flex-col-reverse lg:flex-row items-center lg:justify-between">
        
     
//         <div className="w-full lg:w-[48%] flex justify-center my-10 lg:mb-0">
//           <img src={CircleLines} alt="" className="hidden absolute -top-[175px] -left-[140px] z-0 w-[600px] lg:block opacity-[7%]" />
//           <div className="relative z-10 bg-white border border-[#D7D4E0] rounded-3xl p-8 shadow-xl max-w-[300px] h-[400px] flex items-center justify-center mt-12">
//             <div className="flex flex-col items-center justify-center">
//               <img src={cardLogo} alt="Teknova Logo" className="mb-4 w-[80%]" />
//             </div>
            
//             <motion.img src={PhoneCard} className="absolute w-[60px] h-[60px] -top-9 -left-9" animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
//             <motion.img src={NetworkIcon} className="absolute w-[60px] h-[60px] top-10 -right-10" animate={{ y: [0, -10, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }} />
//             <motion.img src={BrainIcon} className="absolute w-[60px] h-[60px] bottom-12 -left-10" animate={{ y: [0, -10, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }} />
//             <motion.img src={DesktopComputerIcon} className="absolute w-[60px] h-[60px] -bottom-9 -right-10" animate={{ y: [0, -10, 0] }} transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }} />
//           </div>
//         </div>


//         <div className="w-full lg:w-[52%] text-right">
//           <div className="inline-flex justify-center items-center px-5 py-3 bg-[#6161FF] rounded-full my-6">
//             <p className="text-white text-[18px]">شركة رقمية رائدة</p>
//             <img src={StarIcon} alt="star-icon" className="ml-3" />
//           </div>

//           <div className="flex flex-col items-end">
//             <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-normal bg-gradient-to-r from-[#120E23] to-[#7056CC] bg-clip-text text-transparent">
//               نبتكر أفضل التقنيات
//               <br />
//               <span className="text-4xl text-[#8C6AF9] lg:text-[48px] leading-[1.75]">لنصنع المستقبل الحديث</span>
//             </h1>
//             <p dir="rtl" className="text-sm mt-12 text-[#7B7790] max-w-[537px] sm:text-[18px] leading-[1.75] font-medium">
//               نحن شركة متخصصة في الحلول البرمجية والتقنية المتقدمة, نقدم خبراتنا
//               لبناء أنظمة ذكية ومبتكرة تسهم في تطوير أعمال الشركات وتعزيز حضورها
//               الرقمي باحترافية واستدامة.
//             </p>
//           </div>

//           <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
//             <button className="border-2 border-[#362963] text-[#362963] hover:bg-[#362963] hover:text-white transition-all font-medium rounded-full px-6 py-3 flex items-center justify-center cursor-pointer">
//               اكتشف خدماتنا
//             </button>
//             <button className="bg-[#7E60E2] hover:bg-[#53419E] transition-all text-white font-medium rounded-full px-6 py-3 flex items-center justify-center cursor-pointer">
//               ابدأ مشروعك الآن
//               <img src={PhoneIcon} className="w-5 h-5 ml-1 text-white" />
//             </button>
//           </div>
//         </div>
        
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
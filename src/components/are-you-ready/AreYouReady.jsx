import React from 'react'
import PhoneIcon from "../../assets/Group 1.svg"


const AreYouReady = () => {
  return (
    <div id='request-a-service' className='w-full bg-[#F5F5F5] py-12 lg:py-0 lg:h-96'>
      <div className='bg-white w-[90%] mx-auto text-center flex flex-col items-center justify-center rounded-4xl shadow-2xl 
                     py-8 px-6 
                     md:py-12 md:px-12 
                     lg:pt-4 lg:h-80 lg:px-[100px]'>
        
    
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#362963] to-[#7056CB] font-black 
                      text-4xl leading-tight mb-4
                      sm:text-5xl 
                      lg:text-[56px] lg:leading-[1.75] lg:mb-2'>
          جاهز لبدء مشروعك؟
        </h1>
        
     
        <p className='text-[#362963] font-medium 
                     text-base w-full mb-6
                     sm:text-lg sm:mb-8
                     md:text-xl md:w-4/5
                     lg:w-[657px] lg:mb-0'>
          دعنا نعمل معاً لتحويل أفكارك إلى واقع رقمي مذهل
        </p>
        
  
        <button className="bg-[#7E60E2] hover:bg-[#53419E] transition-all cursor-pointer text-white font-medium rounded-full 
                          px-5 py-2 flex items-center justify-center
                          sm:px-6 sm:py-3
                          lg:mt-[56px]">
          ابدأ مشروعك الآن
          <img src={PhoneIcon} className="w-5 h-5 ml-2 text-white" />
        </button>
      </div>
    </div>
  )
}

export default AreYouReady
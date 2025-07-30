import React from 'react'
import teamImage from "../../assets/Rectangle 1552.jpg"
const AboutUs = () => {
  return (
    <>
      <section id='about-us' className='h-[800px] bg-[#F5F5F5]'>
    <div className='w-full text-center h-80 mt-4'>
      <h1 className='text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#6161ff] to-[#8c6af9] font-bold text-4xl lg:text-[48px] text-center leading-normal mb-2'>من نحن؟</h1>
      <div className="h-1 w-32 mx-auto mt-2 bg-gradient-to-r from-[#6161ff] to-[#8c6af9] rounded-full" /> 
      <p className='w-[657px] mx-auto text-sm lg:text-xl text-center text-[#7B7790] font-medium mt-8'> .هي شركة تقنية تقدّم حلولًا رقمية متكاملة تشمل البرمجة، التصميم، الاستشارات، التدريب، والدعم الفني، من خلال فريق احترافي يعمل بأسلوب مرن Teknova شركة  </p>
    </div>
    <div id='our-team'>
        <div
          className="w-full h-[400px] bg-center bg-cover flex flex-col  justify-start items-center py-6"
          style={{ backgroundImage: `url(${teamImage})` }}
        >
      <h1 className=' text-5xl text-white  font-bold text-[48px] text-center  mb-2'> فريقنا</h1>
          <div className="h-1 w-32 mx-auto mt-2 bg-white  rounded-full" /> 

          <div className="max-w-[433px] h-[58px] mb-8 mt-[28px]">
            <div className="max-w-[431px] h-[58px] bg-[#6161ff] rounded-[42px] flex items-center justify-center">
              <p dir='rtl' className="text-white text-sm px-4 text-center">
                <span className="font-semibold">في </span>
                <span className="font-extrabold">Teknova</span>
                <span className="font-semibold">
                  ، لا نصنع البرمجيات فقط، بل نصنع الفارق
                </span>
              </p>
            </div>
          </div>
          <p className="max-w-[957px] text-[#efedf8] text-sm lg:text-xl text-center ">
            يقف خلف شركتنا فريق متكامل من المبدعين الشباب، اجتمعوا من مختلف
            أنحاء سوريا المحررة، يحملون رؤية واحدة: بناء مستقبل رقمي مزدهر يخدم
            الإنسان ويليق بالوطن.
          </p>

        </div>
        </div>
      </section>
   </>
  )
}

export default AboutUs
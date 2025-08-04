import React from 'react'
import StarIcon from "../../assets/Vector (2).svg"
import RocketIcon from "../../assets/Group 61.svg"
import HeartIcon from "../../assets/Group 63.svg"
import UsersIcon from "../../assets/Group 64.svg"
import DollarIcon from "../../assets/Group 65.svg"

const services = [
    {
      title: "رضا العملاء",
      icon: HeartIcon,
      description: "أولوية قصوى لنا",
    },
    {
      title: "فريق متخصص",
      icon: UsersIcon,
      description: "خبراء في مجالاتهم",
    },
    {
      title: "أسعار تنافسية",
      icon: DollarIcon,
      description: "أفضل قيمة مقابل السعر",
    },
    {
      title: "تسليم سريع",
      icon: RocketIcon,
      description: "نلتزم بمواعيد التسليم المحددة",
    },
]

const WhyUs = () => {
  return (
    <div className='w-full text-center  pb-16 lg:pb-0 lg:h-[600px]'>
      

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16">
        
          <div className="inline-flex justify-center items-center w-[180px] sm:w-[200px] lg:w-[216px] h-[50px] sm:h-[55px] lg:h-[58px] bg-[#6161FF] rounded-full mb-6 lg:mb-4">
              <p className="text-white text-base sm:text-lg lg:text-[18px]">لماذا تختار تكنوفا؟</p>
              <img src={StarIcon} alt="star-icon" className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" />
          </div>

    
          <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#120E23] to-[#7056CC] font-black text-3xl sm:text-4xl lg:text-[48px] text-center leading-snug sm:leading-normal lg:leading-[1.75] mb-4 lg:mb-2'>
              نحن نبتكر المستقبل الرقمي
          </h1>


          <p className='mx-auto text-xl leading-[1.75] text-[#7B7790] font-medium mt-6 lg:mt-8 w-full sm:w-[90%] md:w-[80%] lg:w-[600px] px-2 sm:px-0'>
              نتميز بخبرة عالية وتقنيات حديثة لتقديم حلول رقمية استثنائية تساعدك على تحقيق أهدافك
          </p>

        
          <div className="grid gap-6 sm:gap-8 grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto mt-12 lg:mt-[62px] px-2 sm:px-4">
              {services.map(({ title, description, icon }, idx) => (
                  <div
                      key={idx}
                      className='flex flex-col justify-center items-center'
                  >
                      <div>
                          <img src={icon} alt={title} className='w-10 h-10 lg:w-auto lg:h-auto' />
                      </div>
                      <h3 className="font-bold text-[#4A3F75] text-md lg:text-[19px] mb-2">{title}</h3>
                      <p className="text-sm lg:text-[15px] text-gray-600 leading-relaxed">{description}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  )
}

export default WhyUs
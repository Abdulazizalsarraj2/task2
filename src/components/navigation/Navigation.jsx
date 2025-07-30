import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavigationLogo from "../../assets/Group 3.svg"
import PhoneIcon from "../../assets/Vector (3).svg"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center py-4 px-4 mx-auto bg-[#f5f5f5] relative z-10 sm:px-6 lg:px-8">
      <div className="fixed top-4 w-[90%] bg-white rounded-full shadow-md px-4 py-2 flex items-center justify-between flex-row-reverse gap-2 sm:px-6 lg:px-8 lg:gap-4">
    
        <div dir='rtl' className="flex items-center gap-2">
          <img src={NavigationLogo} alt="Teknova Logo" className="w-8 h-6 sm:w-10 sm:h-8 lg:w-20 lg:h-16" />
          <div className="leading-tight">
            <h1 className="text-[#362963] font-bold text-xl sm:text-2xl lg:text-[32px]">تكنوفا</h1>
            <p className="text-xs text-[#8C6AF9] sm:text-sm">حلول رقمية متطورة</p>
          </div>
        </div>

       
        <ul className="hidden lg:flex items-center gap-6 text-sm lg:text-[18px] text-gray-800 font-medium flex-row-reverse">
          <li className="hover:text-[#6A35FF] cursor-pointer">
            <a href='#'>الرئيسية</a>
          </li>
          <li className="hover:text-[#6A35FF] cursor-pointer">
            <a href='#our-services'>خدماتنا</a>
          </li>
          <li className="hover:text-[#6A35FF] cursor-pointer">
            <a href='#about-us'>من نحن</a>
          </li>
          <li className="hover:text-[#6A35FF] cursor-pointer">
            <a href='#our-team'>الفريق</a>
          </li>
          <li className="hover:text-[#6A35FF] cursor-pointer">
            <a href='#'>الأعمال</a>
          </li>
          <li className="hover:text-[#6A35FF] cursor-pointer">
            <a href='#request-a-service'>اطلب خدمة</a>
          </li>
          <li className="hover:text-[#6A35FF] cursor-pointer">
            <a href='#contact-us'>تواصل معنا</a>
          </li>
        </ul>

        
        <button dir='rtl' className="hidden lg:flex items-center gap-2 bg-[#9E7BFF] text-white text-sm px-6 py-2 rounded-full shadow hover:bg-[#835eff] transition-all">
          <img src={PhoneIcon} alt="phone-icon" className='w-4 ml-1' />
          <span className="material-icons text-base">ابدأ الآن</span>
        </button>

     
        <div className="lg:hidden">
          <button className='cursor-pointer p-1' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

   
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-20 w-[calc(100%-2rem)] max-w-md bg-white rounded-xl mx-auto shadow-md px-6 py-4 z-40 right-1/2 transform translate-x-1/2">
          <ul className="flex flex-col items-end gap-4 text-sm text-gray-800 font-medium">
            <li className="hover:text-[#6A35FF] cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
              <a href='#'>الرئيسية</a>
            </li>
            <li className="hover:text-[#6A35FF] cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
              <a href='#our-services'>خدماتنا</a>
            </li>
            <li className="hover:text-[#6A35FF] cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
              <a href='#about-us'>من نحن</a>
            </li>
            <li className="hover:text-[#6A35FF] cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
              <a href='#our-team'>الفريق</a>
            </li>
            <li className="hover:text-[#6A35FF] cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
              <a href='#'>الأعمال</a>
            </li>
            <li className="hover:text-[#6A35FF] cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
              <a href='#request-a-service'>اطلب خدمة</a>
            </li>
            <li className="hover:text-[#6A35FF] cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
              <a href='#contact-us'>تواصل معنا</a>
            </li>
            <button dir='rtl' className="flex items-center gap-2 bg-[#9E7BFF] text-white text-sm px-4 py-2 rounded-full shadow hover:bg-[#835eff] transition-all w-fit mt-2">
              <img src={PhoneIcon} alt="phone-icon" className='w-3 h-3 ml-1' />
              <span className="material-icons text-sm">ابدأ الآن</span>
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
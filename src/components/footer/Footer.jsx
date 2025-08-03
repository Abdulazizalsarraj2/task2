// import React from 'react';
// import {
//   Mail,
//   PhoneCall,
//   Facebook,
//   Instagram,
//   MessageCircle
// } from 'lucide-react';

// import FooterLogo from "../../assets/Group 81.svg"

// export default function Footer() {
//   return (
//     <footer
//       id='contact-us'
//       className="w-full bg-gradient-to-b from-[#8C6AF9] to-[#53419E] text-white pt-14 pb-8 text-sm"
//       dir="rtl"
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 rounded-[30px]">
     
//         <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start pb-10 gap-12 lg:gap-4">

//           <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start gap-6 text-center lg:text-end">
//             <img src={FooterLogo} alt='footer-logo' className='w-[150px]' />
//             <div className="flex flex-col items-center lg:items-start gap-6 text-sm">
//               <a href="mailto:adelkharzoum@gmail.com" className="flex items-center gap-2 opacity-90 hover:opacity-100 transition">
//                 <Mail size={16} /> adelkharzoum@gmail.com
//               </a>
//               <a href="tel:+963993656197" className="flex items-center gap-2 opacity-90 hover:opacity-100 transition">
//                 <PhoneCall size={16} /> 963 993 656 197+
//               </a>
//             </div>
//           </div>

      
//           <div className="hidden lg:block border-l border-white/30 h-64 mx-8"></div>

    
//           <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-end gap-6">
//             <h3 className="text-base font-semibold lg:translate-x-[80px]">روابط مهمة</h3>
//             <div className="flex gap-14 text-white/90 text-center lg:text-end">
//               <ul className="flex flex-col space-y-6">
//                 <li><a href="#" className="hover:text-white transition">الرئيسية</a></li>
//                 <li><a href="#about-us" className="hover:text-white transition">من نحن</a></li>
//                 <li><a href="#our-team" className="hover:text-white transition">الفريق</a></li>
//                 <li><a href="#our-services" className="hover:text-white transition">خدماتنا</a></li>
//               </ul>
//               <ul className="flex flex-col space-y-6">
//                 <li><a href="#" className="hover:text-white transition">الأعمال</a></li>
//                 <li><a href="#request-a-service" className="hover:text-white transition">اطلب خدمة</a></li>
//                 <li><a href="#contact-us" className="hover:text-white transition">تواصل معنا</a></li>
//               </ul>
//             </div>
//           </div>

  
//           <div className="hidden lg:block border-l border-white/30 h-64 mx-8"></div>

      
//           <div className="w-full lg:w-2/4 flex flex-col items-center lg:items-start gap-6 text-center lg:text-end">
//             <h3 className="text-base font-semibold lg:-translate-x-[90px]">خدماتنا</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-6 text-white/90 w-full">
//               <span>تصميم وتطوير المواقع</span>
//               <span>تصميم واجهات وتجربة المستخدم (UI/UX)</span>
//               <span>برمجة تطبيقات الموبايل</span>
//               <span>حلول الأنظمة الداخلية (CMS / CRM / ERP)</span>
//               <span>التصميم الإبداعي (جرافيك وموشن)</span>
//               <span>التحول الرقمي والتحليل الاستشاري</span>
//               <span>الاستضافة والبنية التحتية والحماية</span>
//               <span>التكامل مع الأنظمة والخدمات (AI / Payment / APIs)</span>
//             </div>
//           </div>
//         </div>

//         <div className="mt-8">
//           <div className="flex items-center">
           
//             <div className="flex-grow border-t border-white/30"></div>
            
     
//             <div className="flex gap-6 px-4">
//               <a href="#" aria-label="Whatsapp" className="hover:opacity-80 transition"><MessageCircle size={20} /></a>
//               <a href="#" aria-label="Facebook" className="hover:opacity-80 transition"><Facebook size={20} /></a>
//               <a href="#" aria-label="Instagram" className="hover:opacity-80 transition"><Instagram size={20} /></a>
//             </div>
            
       
//             <div className="flex-grow border-t border-white/30"></div>
//           </div>

     
//           <p className="text-center text-white/80 text-xs pt-4">
//             جميع الحقوق محفوظة © 2025 |{' '}
//             <a href="#" className=" hover:text-white">سياسة الخصوصية</a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from 'react';
import {
  Mail,
  PhoneCall,
  Facebook,
  Instagram,
  MessageCircle
} from 'lucide-react';


import FooterLogo from "../../assets/Footer-logo.svg"
import WhatsappIcon from "../../assets/whatsapp-icon.svg"
import InstagramIcon from "../../assets/instagram-icon.svg"
import FacebookIcon from "../../assets/facebook-icon.svg"


export default function Footer() {
  return (
    <footer
      id='contact-us'
      className="w-full text-white pt-14 pb-8 text-sm"
      style={{ background: 'radial-gradient(ellipse at top, #8C6AF9, #53419E)' }}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 rounded-[30px]">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start pb-10 gap-12 lg:gap-4">
          <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start gap-6 text-center lg:text-end">
            <img src={FooterLogo} alt='footer-logo' className='w-[150px]' />
            <div className="flex flex-col items-center lg:items-start gap-6 text-sm">
              <a href="mailto:adelkharzoum@gmail.com" className="flex items-center gap-2 opacity-90 hover:opacity-100 transition">
                <Mail size={16} /> adelkharzoum@gmail.com
              </a>
              <a href="tel:+963993656197" className="flex items-center gap-2 opacity-90 hover:opacity-100 transition">
                 <PhoneCall size={16} /> 963 993 656 197+
               </a>
            </div>
          </div>
          <div className="hidden lg:block border-l border-white/30 h-64 mx-8"></div>
          <div className="w-full lg:w-1/4 flex flex-col items-center  gap-6">
            <h3 className="text-base font-semibold lg:translate-x-[40px]">روابط مهمة</h3>
            <div className="flex gap-14 text-white/90 text-center lg:text-end">
              <ul className="flex flex-col space-y-6">
                <li><a href="#" className="hover:text-white transition">الرئيسية</a></li>
                <li><a href="#about-us" className="hover:text-white transition">من نحن</a></li>
                <li><a href="#our-team" className="hover:text-white transition">الفريق</a></li>
                <li><a href="#our-services" className="hover:text-white transition">خدماتنا</a></li>
              </ul>
              <ul className="flex flex-col space-y-6">
                <li><a href="#" className="hover:text-white transition">الأعمال</a></li>
                <li><a href="#request-a-service" className="hover:text-white transition">اطلب خدمة</a></li>
                <li><a href="#contact-us" className="hover:text-white transition">تواصل معنا</a></li>
              </ul>
            </div>
          </div>
          <div className="hidden lg:block border-l border-white/30 h-64 mx-8"></div>
          <div className="w-full lg:w-2/4 flex flex-col items-center lg:items-start gap-6 text-center lg:text-start">
            <h3 className="text-base font-semibold ">خدماتنا</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-y-7 text-[#EFEDF8] w-full text-[13px]">
              <span>تصميم وتطوير المواقع</span>
              <span>تصميم واجهات وتجربة المستخدم (UI/UX)</span>
              <span>برمجة تطبيقات الموبايل</span>
              <span>حلول الأنظمة الداخلية (ERP / CRM / CMS)</span>
              <span>التصميم الإبداعي (جرافيك وموشن)</span>
              <span>التحول الرقمي والتحليل الاستشاري</span>
              <span>الاستضافة والبنية التحتية والحماية</span>
              <span className='lg:inline-flex lg:w-[280px]'>التكامل مع الأنظمة والخدمات (AI / Payment / APIs)</span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex items-center">
            <div className="flex-grow border-1 border-white"></div>
            <div className="flex gap-4 px-4 -translate-y-1">
              <a href="#" aria-label="Instagram" className="hover:opacity-80 transition"><img src={InstagramIcon} alt="instagram-icon" className='size-6' /></a>
              <a href="#" aria-label="Facebook" className="hover:opacity-80 transition"><img src={FacebookIcon} alt="facebook-icon" className='size-6' /></a>
              <a href="#" aria-label="Whatsapp" className="hover:opacity-80 transition"><img src={WhatsappIcon} alt="whatsapp-icon" className='size-6' /></a>
            </div>
            <div className="flex-grow  border-1 border-white "></div>
          </div>
          <p className="text-center text-white/80 text-xs pt-4">
            جميع الحقوق محفوظة © 2025 |{' '}
            <a href="#" className="hover:text-white">سياسة الخصوصية</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/** @format */

import Icon1 from "../../assets/services-icon/Group 163.svg";
import Icon2 from "../../assets/services-icon/Group 172.svg";
import Icon3 from "../../assets/services-icon/Group 165.svg";
import Icon4 from "../../assets/services-icon/Group 167.svg";
import Icon5 from "../../assets/services-icon/Group 168.svg";
import Icon6 from "../../assets/services-icon/Group 170.svg";
import Icon7 from "../../assets/services-icon/Group 171.svg";
import Icon8 from "../../assets/services-icon/Group 169.svg";
import arrowIcon from "../../assets/services-icon/Group 34.svg";

import { useNavigate } from "react-router-dom";

const services = [
  {
    name: "تصميم وتطوير المواقع",
    icon: Icon3,
    description:
      "نصنع مواقع ويب احترافية وعصرية، متجاوبة وسريعة، تواكب معايير الأداء وتجربة المستخدم.",
  },
  {
    name: "برمجة تطبيقات الموبايل",
    icon: Icon2,
    description:
      "نطوّر تطبيقات Android وiOS أصلية أو هجينة، بتجربة سلسة وأداء عالٍ، تناسب مختلف الاحتياجات.",
  },
  {
    name: "تصميم واجهات وتجربة المستخدم (UI/UX)",
    icon: Icon1,
    description:
      "نبتكر تصاميم تفاعلية جذابة، مبنية على فهم سلوك المستخدم واحتياجات السوق.",
  },
  {
    name: "الاستضافة والبنية التحتية والحماية",
    icon: Icon8,
    description:
      "نوفر حلول استضافة آمنة وسريعة، مع إعداد السيرفرات والحماية من الهجمات الإلكترونية.",
  },

  {
    name: "التصميم الإبداعي (جرافيك وموشن)",
    icon: Icon5,
    description:
      "نصمم الهوية البصرية، الشعارات، الرسوم التوضيحية، والمقاطع المتحركة بأسلوب فني محترف.",
  },
  {
    name: "حلول الأنظمة الداخلية (ERP / CRM / CMS)",
    icon: Icon4,
    description:
      "نطور أنظمة داخلية مخصصة لإدارة الأعمال والموارد بكفاءة عالية قابلة للتخصيص والتوسيع.",
  },
  {
    name: "التحول الرقمي والتحليل الاستشاري",
    icon: Icon7,
    description:
      "نساعد الشركات على الانتقال الرقمي بخطط استراتيجية وحلول تكنولوجية موجهة لتحقيق النمو.",
  },
  {
    name: "التكامل مع الأنظمة والخدمات",
    icon: Icon6,
    description:
      "نبني جسورًا بين أنظمتك وخدمات الطرف الثالث، وندمج حلول الدفع والذكاء الاصطناعي بسهولة.",
  },
];

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section dir="rtl" id="our-services" className="py-16 px-4 bg-[#FBFAFF]">
      <div className="mb-12">
        <h1 className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#6161ff] to-[#8c6af9] font-bold text-[48px] text-center leading-normal mb-2">
          {" "}
          خدماتنا المميزة
        </h1>
        <div className="h-[5px] w-32 mx-auto -mt-[6px] bg-gradient-to-r from-[#6161ff] to-[#8c6af9] rounded-full" />
      </div>

      <div className="flex flex-col items-center sm:grid sm:gap-y-[35px] sm:gap-x-[30px] md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto sm:mx-16">
        {services.map(({ name, description, icon }, idx) => (
          <div
            key={idx}
            className="w-[90%] sm:w-auto relative bg-white rounded-[16px] shadow-sm p-5 flex flex-col gap-6 items-center transition hover:shadow-md ring-[0.1px] ring-[#362963] mb-6 sm:mb-0"
          >
            <img src={icon} className=" w-13 h-13 " />

            <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#362963] to-[#7056CC] text-[12px] md:text-sm mb-2">
              {name}
            </h3>
            <p className="text-xs md:text-[14px] text-gray-600 leading-[1.75] w-[80%] text-center -mt-4">
              {description}
            </p>

            <div className="bg-primary flex items-center justify-center border border-text-2 rounded-full px-16 py-3">
              <div
                onClick={() => {
                  navigate("/service_request");
                }}
                className="flex items-center gap-3"
              >
                <div className=" text-[11px] lg:text-sm text-white cursor-pointer hover:underline">
                  اطلب الخدمة
                </div>
                {/* <img src={arrowIcon} alt="arrow-icon" /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


/** @format */

// import React, { useEffect, useState } from "react";
// import Icon1 from "../../assets/services-icon/Group 73.svg";
// import Icon2 from "../../assets/services-icon/Group 74.svg";
// import Icon3 from "../../assets/services-icon/Group 75.svg";
// import Icon4 from "../../assets/services-icon/Group 76.svg";
// import Icon5 from "../../assets/services-icon/Group 77.svg";
// import Icon6 from "../../assets/services-icon/Group 78.svg";
// import Icon7 from "../../assets/services-icon/Group 79.svg";
// import Icon8 from "../../assets/services-icon/Group 80.svg";
// import arrowIcon from "../../assets/services-icon/Group 34.svg";

// import { useNavigate } from "react-router-dom";
// import { GET } from "../../services/http.service"; // غيّر المسار لو لزم

// export default function ServicesSection() {
//   const navigate = useNavigate();

//   const [servicesList, setServicesList] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // أيقونات افتراضية للاستخدام كـ fallback لو الـ icon غير موجودة
//   const fallbackIcons = [Icon5, Icon3, Icon1, Icon6, Icon4, Icon2, Icon8, Icon7];

//   useEffect(() => {
//     let mounted = true;
//     const fetchHome = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await GET("home", false); // لو احتاج توكن غيّر false -> true
//         if (res?.status === 200  && res?.data?.data) {
//           const srv = res.data.data.services || [];
//           if (mounted) setServicesList(srv);
//         } else {
//           // استجابة غير متوقعة
//           setError("فشل استرجاع بيانات الخدمات من الخادم.");
//           console.error("home endpoint returned unexpected payload:", res);
//         }
//       } catch (err) {
//         setError("حصل خطأ أثناء تحميل الخدمات.");
//         console.error("fetch home error:", err);
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     };

//     fetchHome();
//     return () => {
//       mounted = false;
//     };
//   }, []);

//   return (
//     <section dir="rtl" id="our-services" className="py-16 px-4 bg-[#FBFAFF]">
//       <div className="mb-12">
//         <h1 className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#6161ff] to-[#8c6af9] font-bold text-[48px] text-center leading-normal mb-2">
//           {" "}
//           خدماتنا المميزة
//         </h1>
//         <div className="h-[5px] w-32 mx-auto -mt-[6px] bg-gradient-to-r from-[#6161ff] to-[#8c6af9] rounded-full" />
//       </div>

//       <div className="grid gap-y-14 gap-x-2 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
//         {loading && (
//           <p className="col-span-full text-center">جاري تحميل الخدمات...</p>
//         )}

//         {!loading && error && (
//           <p className="col-span-full text-center text-red-500">
//             {error}
//           </p>
//         )}

//         {!loading &&
//           !error &&
//           servicesList.map((service, idx) => {
//             // اختيار أيقونة افتراضية إذا لم يأتِ icon من الـ API
//             const iconSrc =
//               (service && service.icon) ||
//               fallbackIcons[idx % fallbackIcons.length];

//             return (
//               <div
//                 key={service?.id ?? `srv-${idx}`}
//                 className="relative bg-white rounded-[16px]  shadow-sm  p-5 flex flex-col gap-6 items-center  transition hover:shadow-md w-[85%] md:w-[90%] mx-auto ring-[0.1px] ring-[#362963]"
//               >
//                 <img src={iconSrc} className=" w-13 h-13 " alt={service?.name} />

//                 <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#362963] to-[#7056CC] text-[12px] md:text-sm mb-2">
//                   {service?.name}
//                 </h3>
//                 <p className="text-xs md:text-[14px] text-gray-600 leading-[1.75] w-[80%] text-center -mt-4">
//                   {service?.description}
//                 </p>

//                 <div className="flex items-center justify-center border border-text-2 rounded-full px-16 py-3">
//                   <div
//                     onClick={() => {
//                       navigate("/service_request");
//                     }}
//                     className="flex items-center gap-3"
//                   >
//                     <div className="text-[11px] lg:text-sm text-[#6161FF] cursor-pointer hover:underline">
//                       اطلب الخدمة
//                     </div>
//                     <img src={arrowIcon} alt="arrow-icon" />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}

//         {!loading && !error && servicesList.length === 0 && (
//           <p className="col-span-full text-center">لا توجد خدمات للعرض حالياً.</p>
//         )}
//       </div>
//     </section>
//   );
// }


// import React, { useEffect, useState } from "react";
// import Icon1 from "../../assets/services-icon/Group 73.svg";
// import Icon2 from "../../assets/services-icon/Group 74.svg";
// import Icon3 from "../../assets/services-icon/Group 75.svg";
// import Icon4 from "../../assets/services-icon/Group 76.svg";
// import Icon5 from "../../assets/services-icon/Group 77.svg";
// import Icon6 from "../../assets/services-icon/Group 78.svg";
// import Icon7 from "../../assets/services-icon/Group 79.svg";
// import Icon8 from "../../assets/services-icon/Group 80.svg";
// import arrowIcon from "../../assets/services-icon/Group 34.svg";

// import { useNavigate } from "react-router-dom";
// import { GET } from "../../services/http.service";

// export default function ServicesSection() {
//   const navigate = useNavigate();

//   const [servicesList, setServicesList] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fallbackIcons = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8];

//   // helper للتحقق من صحة رابط الصورة
//   const isValidImage = (url) => {
//     return new Promise((resolve) => {
//       const img = new Image();
//       img.src = url;
//       img.onload = () => resolve(true);
//       img.onerror = () => resolve(false);
//     });
//   };

//   const prepareServices = async (servicesFromAPI) => {
//     const prepared = await Promise.all(
//       servicesFromAPI.map(async (service, index) => {
//         let icon = service.icon;
//         const valid = icon ? await isValidImage(icon) : false;

//         return {
//           ...service,
//           displayIcon: valid ? icon : fallbackIcons[index % fallbackIcons.length],
//         };
//       })
//     );
//     setServicesList(prepared);
//   };

//   useEffect(() => {
//     let mounted = true;
//     const fetchHome = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await GET("home", false);
//         if (res?.status === 200 && res?.data?.data) {
//           const srv = res.data.data.services || [];
//           if (mounted) await prepareServices(srv);
//         } else {
//           setError("فشل استرجاع بيانات الخدمات من الخادم.");
//           console.error("home endpoint returned unexpected payload:", res);
//         }
//       } catch (err) {
//         setError("حصل خطأ أثناء تحميل الخدمات.");
//         console.error("fetch home error:", err);
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     };

//     fetchHome();
//     return () => {
//       mounted = false;
//     };
//   }, []);

//   return (
//     <section dir="rtl" id="our-services" className="py-16 px-4 bg-[#FBFAFF]">
//       <div className="mb-12">
//         <h1 className="text-transparent text-5xl bg-clip-text bg-gradient-to-r from-[#6161ff] to-[#8c6af9] font-bold text-[48px] text-center leading-normal mb-2">
//           خدماتنا المميزة
//         </h1>
//         <div className="h-[5px] w-32 mx-auto -mt-[6px] bg-gradient-to-r from-[#6161ff] to-[#8c6af9] rounded-full" />
//       </div>

//       <div className="grid gap-y-14 gap-x-2 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
//         {loading && <p className="col-span-full text-center">جاري تحميل الخدمات...</p>}

//         {!loading && error && (
//           <p className="col-span-full text-center text-red-500">{error}</p>
//         )}

//         {!loading &&
//           !error &&
//           servicesList.map((service, idx) => (
//             <div
//               key={service?.id ?? `srv-${idx}`}
//               className="relative bg-white rounded-[16px] shadow-sm p-5 flex flex-col gap-6 items-center transition hover:shadow-md w-[85%] md:w-[90%] mx-auto ring-[0.1px] ring-[#362963]"
//             >
//               <img
//                 src={service.displayIcon}
//                 className="w-13 h-13"
//                 alt={service?.name}
//               />

//               <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#362963] to-[#7056CC] text-[12px] md:text-sm mb-2">
//                 {service?.name}
//               </h3>
//               <p className="text-xs md:text-[14px] text-gray-600 leading-[1.75] w-[80%] text-center -mt-4">
//                 {service?.description}
//               </p>

//               <div className="flex items-center justify-center border border-text-2 rounded-full px-16 py-3">
//                 <div
//                   onClick={() => navigate("/service_request")}
//                   className="flex items-center gap-3"
//                 >
//                   <div className="text-[11px] lg:text-sm text-[#6161FF] cursor-pointer hover:underline">
//                     اطلب الخدمة
//                   </div>
//                   <img src={arrowIcon} alt="arrow-icon" />
//                 </div>
//               </div>
//             </div>
//           ))}

//         {!loading && !error && servicesList.length === 0 && (
//           <p className="col-span-full text-center">لا توجد خدمات للعرض حالياً.</p>
//         )}
//       </div>
//     </section>
//   );
// }

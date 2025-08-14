/** @format */

import Icon1 from "../../assets/services-icon/Group 73.svg";
import Icon2 from "../../assets/services-icon/Group 74.svg";
import Icon3 from "../../assets/services-icon/Group 75.svg";
import Icon4 from "../../assets/services-icon/Group 76.svg";
import Icon5 from "../../assets/services-icon/Group 77.svg";
import Icon6 from "../../assets/services-icon/Group 78.svg";
import Icon7 from "../../assets/services-icon/Group 79.svg";
import Icon8 from "../../assets/services-icon/Group 80.svg";
import arrowIcon from "../../assets/services-icon/Group 34.svg";

import { useNavigate } from "react-router-dom";

const services = [
  {
    name: "تصميم وتطوير المواقع",
    icon: Icon5,
    description:
      "نصنع مواقع ويب احترافية وعصرية متجاوبة وسريعة تراعي معايير الأداء وتجربة المستخدم.",
  },
  {
    name: "برمجة تطبيقات الموبايل",
    icon: Icon3,
    description:
      "نطور تطبيقات Android و iOS أصلية أو هجينة بتجربة سلسة وأداء عالي تناسب مختلف الاحتياجات.",
  },
  {
    name: "تصميم واجهات وتجربة المستخدم (UI/UX)",
    icon: Icon1,
    description:
      "نبتكر تصاميم تفاعلية جذابة مبنية على فهم سلوك المستخدم واحتياجات السوق.",
  },
  {
    name: "الاستضافة والبنية التحتية والحماية",
    icon: Icon6,
    description:
      "نوفر حلول استضافة آمنة وسريعة، مع إعداد الاستراتيجيات والحماية من الهجمات الإلكترونية.",
  },

  {
    name: "التصميم الإبداعي (جرافيك وموشن)",
    icon: Icon4,
    description:
      "نصمم الهوية البصرية، الشعارات، الرسوم التوضيحية، والمقاطع المتحركة بأسلوب فني محترف.",
  },
  {
    name: "حلول الأنظمة الداخلية (ERP / CRM / CMS)",
    icon: Icon2,
    description:
      "نطور أنظمة داخلية مخصصة لإدارة الأعمال والموارد بكفاءة عالية قابلة للتخصيص والتوسيع.",
  },
  {
    name: "التحول الرقمي والتحليل الاستشاري",
    icon: Icon8,
    description:
      "نساعد الشركات على الانتقال الرقمي الذكي بقرارات مبنية على البيانات والتحليل الاستشاري.",
  },
  {
    name: "التكامل مع الأنظمة والخدمات",
    icon: Icon7,
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

      <div className="grid gap-y-14 gap-x-2 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map(({ name, description, icon }, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-[16px]  shadow-sm  p-5 flex flex-col gap-6 items-center  transition hover:shadow-md w-[85%] md:w-[90%] mx-auto ring-[0.1px] ring-[#362963]"
          >
            <img src={icon} className=" w-13 h-13 " />

            <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#362963] to-[#7056CC] text-[12px] md:text-sm mb-2">
              {name}
            </h3>
            <p className="text-xs md:text-[14px] text-gray-600 leading-[1.75] w-[80%] text-center -mt-4">
              {description}
            </p>

            <div className="flex items-center justify-center border border-text-2 rounded-full px-16 py-3">
              <div
                onClick={() => {
                  navigate("/service_request");
                }}
                className="flex items-center gap-3"
              >
                <div className="text-[11px] lg:text-sm text-[#6161FF] cursor-pointer hover:underline">
                  اطلب الخدمة
                </div>
                <img src={arrowIcon} alt="arrow-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
